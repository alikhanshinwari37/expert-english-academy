/* =========================================================
   EXPERT ENGLISH ACADEMY
   PREMIUM MASTER JAVASCRIPT
   Splash + Navigation + Animations + Admission
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SPLASH SCREEN
       ===================================================== */

    const splashScreen =
        document.querySelector(".splash-screen");

    const enterButton =
        document.querySelector(".enter-btn");

    if (splashScreen && enterButton) {

        const glassCard =
            document.querySelector(".glass-card");

        if (glassCard) {

            document.addEventListener("mousemove", (event) => {

                const x =
                    (window.innerWidth / 2 - event.clientX) / 45;

                const y =
                    (window.innerHeight / 2 - event.clientY) / 45;

                glassCard.style.transform =
                    `translate(${x}px, ${y}px)`;

            });

            document.addEventListener("mouseleave", () => {

                glassCard.style.transform =
                    "translate(0, 0)";

            });

        }

        enterButton.addEventListener("click", (event) => {

            event.preventDefault();

            splashScreen.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            splashScreen.style.opacity = "0";

            splashScreen.style.transform =
                "scale(1.03)";

            setTimeout(() => {

                window.location.href =
                    "home.html";

            }, 700);

        });

    }


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            const isOpen =
                navMenu.classList.contains("open");

            if (isOpen) {

                navMenu.classList.remove("open");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            } else {

                navMenu.classList.add("open");

                menuToggle.classList.add("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });


        navMenu.addEventListener("click", (event) => {

            event.stopPropagation();

        });


        const navLinks =
            navMenu.querySelectorAll("a");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        document.addEventListener("click", (event) => {

            if (!event.target.closest(".navbar")) {

                navMenu.classList.remove("open");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* =====================================================
       PREMIUM BUTTON RIPPLE
       ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".premium-btn, .enter-btn"
        );

    buttons.forEach((button) => {

        button.addEventListener("click", function (event) {

            const ripple =
                document.createElement("span");

            ripple.classList.add(
                "button-ripple"
            );

            const rect =
                this.getBoundingClientRect();

            const size =
                Math.max(
                    rect.width,
                    rect.height
                );

            ripple.style.width =
                `${size}px`;

            ripple.style.height =
                `${size}px`;

            ripple.style.left =
                `${event.clientX - rect.left - size / 2}px`;

            ripple.style.top =
                `${event.clientY - rect.top - size / 2}px`;

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 650);

        });

    });


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".home-section, " +
            ".contact-preview, " +
            ".enrollment-cta, " +
            ".premium-card, " +
            ".why-card, " +
            ".teacher-highlight, " +
            ".founder-card"
        );

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach((element) => {

            element.classList.add(
                "reveal-element"
            );

            revealObserver.observe(
                element
            );

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add(
                "reveal-visible"
            );

        });

    }


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();

    if (navMenu) {

        const links =
            navMenu.querySelectorAll(
                ".nav-link"
            );

        links.forEach((link) => {

            const linkPage =
                link.getAttribute("href");

            if (
                linkPage === currentPage ||
                (
                    currentPage === "" &&
                    linkPage === "home.html"
                )
            ) {

                links.forEach((item) => {

                    item.classList.remove(
                        "active"
                    );

                });

                link.classList.add(
                    "active"
                );

            }

        });

    }


    /* =====================================================
       SMOOTH INTERNAL LINKS
       ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(
                    targetId
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       ESC KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                navMenu &&
                menuToggle
            ) {

                navMenu.classList.remove(
                    "open"
                );

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =====================================================
       ADMISSION SYSTEM
       FORM → WHATSAPP
       ===================================================== */

    const admissionForm =
        document.getElementById("admissionForm");

    const admissionSuccess =
        document.getElementById("admissionSuccess");


    if (admissionForm) {

        const studentName =
            document.getElementById("studentName");

        const fatherName =
            document.getElementById("fatherName");

        const studentPhone =
            document.getElementById("studentPhone");

        const dateOfBirth =
            document.getElementById("dateOfBirth");

        const studentCity =
            document.getElementById("studentCity");

            const streetAddress =
            document.getElementById("streetAddress");

            const admissionDate =
            document.getElementById("admissionDate");

        const course =
            document.getElementById("course");

        const studentMessage =
            document.getElementById("studentMessage");


        /* ---------------------------------------------
           ERROR
        --------------------------------------------- */

        function showError(input, message) {

            if (!input) {
                return;
            }

            const formGroup =
                input.closest(".form-group");

            if (!formGroup) {
                return;
            }

            const error =
                formGroup.querySelector(".form-error");

            formGroup.classList.add("has-error");

            if (error) {
                error.textContent = message;
            }

        }


        /* ---------------------------------------------
           CLEAR ERROR
        --------------------------------------------- */

        function clearError(input) {

            if (!input) {
                return;
            }

            const formGroup =
                input.closest(".form-group");

            if (!formGroup) {
                return;
            }

            const error =
                formGroup.querySelector(".form-error");

            formGroup.classList.remove(
                "has-error"
            );

            if (error) {
                error.textContent = "";
            }

        }


        /* ---------------------------------------------
           CLEAR ERRORS WHILE TYPING
        --------------------------------------------- */

        [
    studentName,
    fatherName,
    studentPhone,
    dateOfBirth,
    studentCity,
    streetAddress,
    admissionDate,
    course
].forEach((field) => {

    if (!field) {
        return;
    }

    field.addEventListener(
        "input",
        () => clearError(field)
    );

    field.addEventListener(
        "change",
        () => clearError(field)
    );

});


        /* ---------------------------------------------
           SUBMIT
        --------------------------------------------- */

        admissionForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                let isValid = true;


                /* Student Name */

                if (
                    !studentName.value.trim()
                ) {

                    showError(
                        studentName,
                        "Please enter the student's name."
                    );

                    isValid = false;

                } else {

                    clearError(studentName);

                }


                /* Father Name */

                if (
                    !fatherName.value.trim()
                ) {

                    showError(
                        fatherName,
                        "Please enter the father's name."
                    );

                    isValid = false;

                } else {

                    clearError(fatherName);

                }


                /* Phone */

                const phoneDigits =
                    studentPhone.value
                        .replace(/\D/g, "");

                if (
                    phoneDigits.length < 10 ||
                    phoneDigits.length > 15
                ) {

                    showError(
                        studentPhone,
                        "Please enter a valid mobile / WhatsApp number."
                    );

                    isValid = false;

                } else {

                    clearError(studentPhone);

                }


                /* Date of Birth */

                if (
                    !dateOfBirth.value
                ) {

                    showError(
                        dateOfBirth,
                        "Please select the date of birth."
                    );

                    isValid = false;

                } else {

                    clearError(dateOfBirth);

                }


                /* City */

                if (
                    !studentCity.value.trim()
                ) {

                    showError(
                        studentCity,
                        "Please enter the city."
                    );

                    isValid = false;

                } else {

                    clearError(studentCity);

                }


                /* Course */

                if (
                    !course.value
                ) {

                    showError(
                        course,
                        "Please select a course."
                    );

                    isValid = false;

                } else {

                    clearError(course);

                }

                    /* Street Address */

if (
    !streetAddress ||
    !streetAddress.value.trim()
) {

    showError(
        streetAddress,
        "Please enter the street address."
    );

    isValid = false;

} else {

    clearError(streetAddress);

}


/* Date of Admission */

if (
    !admissionDate ||
    !admissionDate.value
) {

    showError(
        admissionDate,
        "Please select the date of admission."
    );

    isValid = false;

} else {

    clearError(admissionDate);

}

                /* -----------------------------------------
                   STOP IF INVALID
                ----------------------------------------- */

                if (!isValid) {

                    const firstError =
                        admissionForm.querySelector(
                            ".has-error input, " +
                            ".has-error select"
                        );

                    if (firstError) {
                        firstError.focus();
                    }

                    return;

                }


                /* -----------------------------------------
                   FORM DATA
                ----------------------------------------- */

                const name =
                    studentName.value.trim();

                const father =
                    fatherName.value.trim();

                const phone =
                    studentPhone.value.trim();

                const city =
                     studentCity.value.trim();

                const address =
                     streetAddress.value.trim();

                const admissionDateValue =
                     admissionDate.value;

                const selectedCourse =
                          course.value;

                const message =
                    studentMessage
                        ? studentMessage.value.trim()
                        : "";


                /* -----------------------------------------
                   DATE
                ----------------------------------------- */

                let formattedDob =
                    dateOfBirth.value;

                if (dateOfBirth.value) {

                    const date =
                        new Date(
                            dateOfBirth.value +
                            "T00:00:00"
                        );

                    if (
                        !Number.isNaN(
                            date.getTime()
                        )
                    ) {

                        formattedDob =
                            date.toLocaleDateString(
                                "en-GB"
                            );

                    }

                }


                /* -----------------------------------------
                   WHATSAPP MESSAGE
                ----------------------------------------- */

                const whatsappMessage =
`🎓 NEW ADMISSION APPLICATION
━━━━━━━━━━━━━━━━━━━━

👤 Student Name:
${name}

👨 Father's Name:
${father}

📱 Mobile / WhatsApp:
${phone}

📚 Course:
${selectedCourse}

🎂 Date of Birth:
${formattedDob}

🏠 Street Address:
${address}

📍 City:
${city}

📅 Date of Admission:
${admissionDateValue}


📝 Additional Message:
${message || "No additional message."}

━━━━━━━━━━━━━━━━━━━━
EXPERT ENGLISH ACADEMY
Admission Application`;


                /* -----------------------------------------
                   WHATSAPP
                ----------------------------------------- */

                const whatsappURL =
                    "https://wa.me/923009753588?text=" +
                    encodeURIComponent(
                        whatsappMessage
                    );


                /* -----------------------------------------
                   SAVE PENDING STATE
                ----------------------------------------- */

                sessionStorage.setItem(
                    "eeaAdmissionPending",
                    "true"
                );


                /* -----------------------------------------
                   OPEN WHATSAPP
                ----------------------------------------- */

                window.location.href =
                    whatsappURL;

            }
        );

    }


    /* =====================================================
       ADMISSION SUCCESS
       RETURN FROM WHATSAPP
       ===================================================== */

    if (
        admissionSuccess &&
        admissionForm
    ) {

        function showAdmissionSuccess() {

            const pending =
                sessionStorage.getItem(
                    "eeaAdmissionPending"
                );

            if (pending !== "true") {
                return;
            }


            /* Hide form */

            admissionForm.style.display =
                "none";


            /* Hide intro */

            const intro =
                document.querySelector(
                    ".enroll-intro"
                );

            if (intro) {
                intro.style.display =
                    "none";
            }


            /* Hide hero */

            const hero =
                document.querySelector(
                    ".enroll-hero"
                );

            if (hero) {
                hero.style.display =
                    "none";
            }


            /* Show success */

            admissionSuccess.hidden =
                false;


            /* Clear pending state */

            sessionStorage.removeItem(
                "eeaAdmissionPending"
            );


            /* Scroll */

            setTimeout(() => {

                admissionSuccess.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 300);

        }


        /* Browser returns from WhatsApp */

        window.addEventListener(
            "pageshow",
            () => {

                setTimeout(
                    showAdmissionSuccess,
                    300
                );

            }
        );


        /* Mobile visibility return */

        document.addEventListener(
            "visibilitychange",
            () => {

                if (
                    document.visibilityState ===
                    "visible"
                ) {

                    setTimeout(
                        showAdmissionSuccess,
                        300
                    );

                }

            }
        );

    }

});

/* =========================================
   SPLASH SCREEN → WELCOME CELEBRATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const exploreButton = document.querySelector(".enter-btn");

    if (!exploreButton) return;

    exploreButton.addEventListener("click", function () {
        window.location.href = "welcome.html";
    });
});

/* =========================================
   ENROLL BUTTON → ADMISSION CELEBRATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const enrollLinks = document.querySelectorAll(
        'a[href="enroll.html"], a[href="./enroll.html"]'
    );

    enrollLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "admission-welcome.html";
        });
    });
});

/* =========================================
   CONTACT LINK → CONTACT WELCOME SCREEN
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const contactLinks = document.querySelectorAll(
        'a[href="contact.html"], a[href="./contact.html"], a[href="contact.html#contact"]'
    );

    contactLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "contact-welcome.html";
        });
    });
});

/* =========================================
   OWNER / FOUNDER → WELCOME SCREEN
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const ownerLinks = document.querySelectorAll(
        'a[href="owner.html"], a[href="./owner.html"]'
    );

    ownerLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "owner-welcome.html";
        });
    });
});

/* =========================================
   LOCATION LINK → WELCOME SCREEN
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const locationLinks = document.querySelectorAll(
        'a[href="location.html"], a[href="./location.html"]'
    );

    locationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "location-welcome.html";
        });
    });
});

/* =========================================
   GALLERY LINK → WELCOME SCREEN
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const galleryLinks = document.querySelectorAll(
        'a[href="gallery.html"], a[href="./gallery.html"]'
    );

    galleryLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "gallery-welcome.html";
        });
    });
});

/* =========================================
   WHY US LINK → WELCOME SCREEN
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const whyLinks = document.querySelectorAll(
        'a[href="why-us.html"], a[href="./why-us.html"]'
    );

    whyLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "why-welcome.html";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const teacherLinks = document.querySelectorAll(
        'a[href="teachers.html"], a[href="./teachers.html"]'
    );

    teacherLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "teachers-welcome.html";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const courseLinks = document.querySelectorAll(
        'a[href="courses.html"], a[href="./courses.html"]'
    );

    courseLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "courses-welcome.html";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutLinks = document.querySelectorAll(
        'a[href="about.html"], a[href="./about.html"]'
    );

    aboutLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "about-welcome.html";
        });
    });
});