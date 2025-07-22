// Smooth Scroll

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

// Calendar Functionality
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let currentDate = new Date();

    function generateCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const calendarBody = document.getElementById("calendarBody");
        const calendarMonth = document.getElementById("calendarMonth");
        calendarBody.innerHTML = "";
        calendarMonth.textContent = `${monthNames[month]} ${year}`;

        let day = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");
                if (i === 0 && j < firstDay) {
                    cell.textContent = "";
                    } else if (day > daysInMonth) {
                        cell.textContent = "";
                        } else {

        const isToday = (
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
            );

        cell.textContent = day;
        if (isToday) {
            cell.classList.add("today");
            }
            day++;
    }

        row.appendChild(cell);
        }

        calendarBody.appendChild(row);

        if (day > daysInMonth) break;
        }
    }

    document.getElementById("prevMonth").addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
        });

    document.getElementById("nextMonth").addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
        });

        generateCalendar(currentDate);

// Officials Pagination
    document.addEventListener("DOMContentLoaded", () => {
        const carousel = document.querySelector(".officials-carousel");
        const cardWidth = document.querySelector(".official-card").offsetWidth + 16;

    document.getElementById("scrollRight").addEventListener("click", () => {
        carousel.style.transition = "transform 0.4s ease-in-out";
        carousel.style.transform = `translateX(-${cardWidth}px)`;

        setTimeout(() => {

            const firstCard = carousel.children[0];
            carousel.appendChild(firstCard);
            carousel.style.transition = "none";
            carousel.style.transform = "translateX(0)";
        }, 400);
    });

    document.getElementById("scrollLeft").addEventListener("click", () => {
        const lastCard = carousel.lastElementChild;
        carousel.insertBefore(lastCard, carousel.firstElementChild);
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(-${cardWidth}px)`;

        setTimeout(() => {
            carousel.style.transition = "transform 0.4s ease-in-out";
            carousel.style.transform = "translateX(0)";
        }, 20);
    });
});


