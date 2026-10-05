/* =====================================================
   PAWAN ❤️ SNEHA
   ANNIVERSARY WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   RELATIONSHIP DATE
===================================================== */

/*
    Your relationship started:
    06 October 2018
*/

const relationshipStart =
    new Date("2018-10-06T00:00:00");


/* =====================================================
   PAGE LOADER
===================================================== */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("loader");

    setTimeout(function () {

        loader.classList.add("hide");

    }, 1800);

});


/* =====================================================
   RELATIONSHIP COUNTER
===================================================== */

function updateCounter() {

    const now =
        new Date();


    const start =
        relationshipStart;


    /*
        Calculate complete years
    */

    let years =
        now.getFullYear() -
        start.getFullYear();


    const anniversaryThisYear =
        new Date(
            now.getFullYear(),
            start.getMonth(),
            start.getDate()
        );


    if (now < anniversaryThisYear) {

        years--;

    }


    /*
        Calculate total days
    */

    const difference =
        now.getTime() -
        start.getTime();


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const totalMinutes =
        Math.floor(
            totalSeconds / 60
        );


    const totalHours =
        Math.floor(
            totalMinutes / 60
        );


    const totalDays =
        Math.floor(
            totalHours / 24
        );


    /*
        Remaining days after complete years
    */

    const completedYearDate =
        new Date(
            start.getFullYear() + years,
            start.getMonth(),
            start.getDate()
        );


    const remainingDifference =
        now.getTime() -
        completedYearDate.getTime();


    const remainingDays =
        Math.floor(
            remainingDifference /
            (1000 * 60 * 60 * 24)
        );


    /*
        Remaining hours
    */

    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    /*
        Remaining minutes
    */

    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    /*
        Update website
    */

    document.getElementById("years")
        .textContent = Math.max(years, 0);


    document.getElementById("days")
        .textContent = Math.max(remainingDays, 0);


    document.getElementById("hours")
        .textContent = Math.max(hours, 0);


    document.getElementById("minutes")
        .textContent = Math.max(minutes, 0);

}


/*
    Run immediately
*/

updateCounter();


/*
    Update every minute
*/

setInterval(
    updateCounter,
    60000
);


/* =====================================================
   SCROLL TO STORY
===================================================== */

function scrollToStory() {

    const story =
        document.getElementById("story");


    story.scrollIntoView({

        behavior: "smooth"

    });

}


/* =====================================================
   SURPRISE MODAL
===================================================== */

function openSurprise() {

    const modal =
        document.getElementById("surpriseModal");


    modal.classList.add("active");


    document.body.classList.add("no-scroll");


    createHeartBurst();

}


function closeSurprise() {

    const modal =
        document.getElementById("surpriseModal");


    modal.classList.remove("active");


    document.body.classList.remove("no-scroll");

}


/*
    Close modal when clicking outside
*/

document
    .getElementById("surpriseModal")
    .addEventListener(
        "click",
        function (event) {

            if (
                event.target === this
            ) {

                closeSurprise();

            }

        }
    );


/*
    Close with Escape key
*/

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeSurprise();

        }

    }
);


/* =====================================================
   FLOATING HEARTS
===================================================== */

function createHeart() {

    const container =
        document.getElementById(
            "heart-container"
        );


    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "heart";


    /*
        Random heart
    */

    heart.innerHTML =
        Math.random() > .5
            ? "♥"
            : "♡";


    /*
        Random position
    */

    heart.style.left =
        Math.random() * 100 + "vw";


    /*
        Random size
    */

    heart.style.fontSize =
        (
            10 +
            Math.random() * 18
        ) + "px";


    /*
        Random speed
    */

    heart.style.animationDuration =
        (
            6 +
            Math.random() * 7
        ) + "s";


    container.appendChild(
        heart
    );


    /*
        Remove after animation
    */

    setTimeout(
        function () {

            heart.remove();

        },
        14000
    );

}


/*
    Create hearts every 1.2 seconds
*/

setInterval(
    createHeart,
    1200
);


/* =====================================================
   HEART BURST
===================================================== */

function createHeartBurst() {

    const container =
        document.getElementById(
            "heart-container"
        );


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );


        heart.className =
            "heart";


        heart.innerHTML =
            "♥";


        /*
            Start around center
        */

        heart.style.left =
            (
                35 +
                Math.random() * 30
            ) + "vw";


        heart.style.bottom =
            (
                30 +
                Math.random() * 25
            ) + "vh";


        heart.style.fontSize =
            (
                12 +
                Math.random() * 22
            ) + "px";


        heart.style.animationDuration =
            (
                2 +
                Math.random() * 3
            ) + "s";


        container.appendChild(
            heart
        );


        setTimeout(
            function () {

                heart.remove();

            },
            6000
        );

    }

}


/* =====================================================
   BACKGROUND MUSIC
===================================================== */

const music =
    document.getElementById(
        "backgroundMusic"
    );


/*
    Modern browsers don't normally
    allow autoplay with sound.

    Therefore music starts after
    the first user interaction.
*/

let musicStarted = false;


function startMusic() {

    if (
        !music ||
        musicStarted
    ) {

        return;

    }


    music.volume = 0.25;


    music.play()
        .then(function () {

            musicStarted = true;

        })
        .catch(function () {

            /*
                Browser blocked autoplay.
                User can interact again.
            */

        });

}


/*
    Start after first click
*/

document.addEventListener(
    "click",
    startMusic,
    {
        once: true
    }
);


/* =====================================================
   PHOTO REVEAL ANIMATION
===================================================== */

const photos =
    document.querySelectorAll(
        ".photo"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: .15
        }
    );


photos.forEach(
    function (photo) {

        observer.observe(
            photo
        );

    }
);