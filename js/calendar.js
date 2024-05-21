document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date-input');
    const calendar = document.getElementById('calendar');
    const monthYear = document.getElementById('month-year');
    const prevMonth = document.getElementById('prev-month');
    const nextMonth = document.getElementById('next-month');
    const calendarDays = document.querySelector('.calendar-days');
    const calendarContainer = document.querySelector('.calendar-container');

    let currentDate = new Date();



    prevMonth.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonth.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
        calendarDays.innerHTML = '';

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            calendarDays.appendChild(emptyCell);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayCell = document.createElement('div');
            dayCell.textContent = i;
            dayCell.addEventListener('click', function() {
                dateInput.value = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
                clearSelection();
                dayCell.classList.add('selected');
            });
            calendarDays.appendChild(dayCell);
        }
    }

    function clearSelection() {
        document.querySelectorAll('.calendar-days div').forEach(day => {
            day.classList.remove('selected');
        });
    }

    renderCalendar();
});
