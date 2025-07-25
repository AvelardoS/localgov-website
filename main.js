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

// Officials Scrolls
    window.addEventListener("load", () => {
            const track = document.getElementById("marqueeTrack");
            const cards = Array.from(track.children);

            const clonedCards = cards.map(card => card.cloneNode(true));
            clonedCards.forEach(clone => track.appendChild(clone));

            const trackWidth = Array.from(track.children).reduce((acc, el) => acc + el.offsetWidth + 32, 0);
            track.style.animation = `scrollMarquee ${trackWidth / 200}s linear infinite`;

            const styleSheet = document.createElement("style");
            styleSheet.innerHTML = `
            @keyframes scrollMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${trackWidth / 2}px); }
            }`;

            document.head.appendChild(styleSheet);
        });

// Navigation Menu Toggle
    const navHeader = document.getElementById('navHeader');
    const navMenu = document.getElementById('navMenu');

    navHeader.addEventListener('click', () => {
        navHeader.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
















// Pagination
//     document.addEventListener("DOMContentLoaded", () => {
//     const carousel = document.querySelector(".officials-carousel");
//     const cardWidth = document.querySelector(".official-card").offsetWidth + 16;

//     carousel.style.transition = "none";
//     carousel.style.transform = `translateX(-${cardWidth}px)`;

//     const lastCard = carousel.lastElementChild;
//     carousel.insertBefore(lastCard, carousel.firstElementChild);

//     function slideLeft() {
//         carousel.style.transition = "transform 0.4s ease-in-out";
//         carousel.style.transform = `translateX(0px)`;

//         carousel.addEventListener("transitionend", () => {
//             const last = carousel.lastElementChild;
//             carousel.insertBefore(last, carousel.firstElementChild);
//             carousel.style.transition = "none";
//             carousel.style.transform = `translateX(-${cardWidth}px)`;
//         }, { once: true });
//     }

//     function slideRight() {
//         carousel.style.transition = "transform 0.4s ease-in-out";
//         carousel.style.transform = `translateX(-${cardWidth * 2}px)`;

//         carousel.addEventListener("transitionend", () => {
//             const first = carousel.firstElementChild;
//             carousel.appendChild(first);
//             carousel.style.transition = "none";
//             carousel.style.transform = `translateX(-${cardWidth}px)`;
//         }, { once: true });
//     }

//     document.getElementById("scrollLeft").addEventListener("click", slideLeft);
//     document.getElementById("scrollRight").addEventListener("click", slideRight);
// });