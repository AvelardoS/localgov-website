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

        track.addEventListener("mousedown", () => {
            track.style.animationPlayState = "paused";
            });

        track.addEventListener("mouseup", () => {
            track.style.animationPlayState = "running";
            });

        track.addEventListener("mouseleave", () => {
            track.style.animationPlayState = "running";
        });
    });

// Announcement Scrolls
    window.addEventListener("load", () => {
        const marquee = document.getElementById("announcementMarquee");
        const messages = Array.from(marquee.children);

        const clones = messages.map(msg => msg.cloneNode(true));
        clones.forEach(clone => marquee.appendChild(clone));

        const totalWidth = Array.from(marquee.children)
        .reduce((acc, el) => acc + el.offsetWidth + 48, 0);

        marquee.style.animation = `scrollAnnouncement ${totalWidth / 100}px linear infinite`;

        const style = document.createElement("style");
        style.innerHTML = `
        @keyframes scrollAnnouncement {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${totalWidth / 2}px); }
        }`;

        document.head.appendChild(style);
    });

// Navigation Menu Toggle
    document.addEventListener("DOMContentLoaded", () => {
        const navHeader = document.getElementById("navHeader");
        const navMenu = document.getElementById("navMenu");
        const navOverlay = document.getElementById("navOverlay");
        const navLinks = document.querySelectorAll(".nav-links a");

        navHeader.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            navOverlay.classList.toggle("active");
            navHeader.classList.toggle("active");
            });

        navOverlay.addEventListener("click", () => {
            navMenu.classList.remove("active");
            navOverlay.classList.remove("active");
            navHeader.classList.remove("active");
            });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            navOverlay.classList.remove("active");
            navHeader.classList.remove("active");
            });
        });
    });

// Back to Top
    document.querySelector(".back-to-top").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        });
