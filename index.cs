[Route("AskSpediaSendReply/{sessiontoken}/{TeacherID}/{HelpDeskID}/{HelpDeskText}/{SubjectID}/{ClassID}")]
[HttpPost]
public async Task<ReturnedObject> AskSpediaSendReply([FromRoute] string SessionToken, int TeacherID, int HelpDeskID, string HelpDeskText, int SubjectID, int ClassID, [FromForm] IFormFile stream, [FromForm] IFormFile audiostream)
{
    ReturnedObject Objres = new ReturnedObject();
    var status = false;
    DefinitioData objmodel = new DefinitioData(Config);
    StudentSchoolClass ObjschoolClass = new StudentSchoolClass();
    SessionUtility session = new SessionUtility();
    HelpDesk table = new HelpDesk();
    table.SubjectID = SubjectID;
    table.ClassID = ClassID;
    table.AttachmentFile = stream;
    table.VoiceFile = audiostream;
    table.HelpDeskText = HelpDeskText;
    table.HelpDeskID = HelpDeskID;
    table.UserID = TeacherID;

    try
    {
        if (CheckSessionTocken(SessionToken))
        {
            if (table.AttachmentFile != null)
            {
                var uniqueFileName = GetUniqueFileName(table.AttachmentFile.FileName);
                table.Attachment = uniqueFileName;
                var uploads = Path.Combine(Config.GetSection("AppSettings").GetSection("ServerFolder").Value, "Uploads\\AskSpedia");
                var filePath = Path.Combine(uploads, uniqueFileName);
                table.AttachmentFile.CopyTo(new FileStream(filePath, FileMode.Create));
            }

            if (table.VoiceFile != null)
            {
                var uniqueFileName = GetUniqueFileName(table.VoiceFile.FileName);
                table.AudioFile = uniqueFileName;
                var uploads = Path.Combine(Config.GetSection("AppSettings").GetSection("ServerFolder").Value, "Uploads\\AskSpedia");
                var filePath = Path.Combine(uploads, uniqueFileName);
                table.VoiceFile.CopyTo(new FileStream(filePath, FileMode.Create));
            }

            if (await objmodel.InsertHelpDeskReplyAsync(table))
            {
                table.Status = 2; // read
                await objmodel.HelpDeskUpdateStatusAsync(table);

                Objres.Status = "true";

                //Send Notification
                int iStudentID = objmodel.GetStudentIDFromHelpDeskID(table.HelpDeskID);
                DataTable dtUserDevices = await objmodel.GetStudentDevicesInfoAsync(iStudentID);

                bool sentToAtleastOnedevice = false;
                string DeviceIDs = string.Empty;
                string MessageBody = "تم ارسال رسالة من الدعم الفنى‎";
                await SendNotificationAsync(dtUserDevices, MessageBody);
                // Send Notification
                //int iStudentID = objmodel.GetStudentIDFromHelpDeskID(table.HelpDeskID);
                //DataTable dtUserDevices = await objmodel.GetStudentDevicesInfoAsync(iStudentID);

                //var notificationTasks = dtUserDevices.AsEnumerable().Select(async deviceInfo =>
                //{
                //    string deviceID = deviceInfo["DeviceID"].ToString();
                //    // Construct the message for this device
                //    string messageBody = "تم ارسال رسالة من الدعم الفنى‎";

                //    // Send the notification to this device
                //    await SendNotificationAsync(deviceID, messageBody);
                //});

                //// Wait for all notification tasks to complete
                //await Task.WhenAll(notificationTasks);

            }
        }
        else
        {
            Objres.MessageAr = InvaliedTocken;
            Objres.MessageEn = InvaliedTocken;
            Objres.Status = "false";
        }
    }
    catch (Exception ex)
    {
        Objres.Status = "false";
        ExceptionLogData exceptionLog = new ExceptionLogData(Config, "TeacherAppController.cs/AskSpediaSendReply", ex);
        exceptionLog.Log();
    }

    return Objres;
}