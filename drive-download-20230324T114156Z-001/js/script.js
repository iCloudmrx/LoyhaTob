"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const tabItemsParent = document.querySelector(".tabheader__items"),
        tabItems = document.querySelectorAll(".tabheader__item"),
        tabcontent = document.querySelectorAll(".tabcontent"),
        loader = document.querySelector(".loader");

    //Loader
    setTimeout(() => {
        loader.classList.add("leaderOpacity");
        setTimeout(() => {
            loader.classList.add("leaderDisplay");
        }, 500);
    }, 2000);

    //EndLoader
    // Tab
    function hiddenTabContent() {
        tabItems.forEach((item) => {
            item.classList.remove("tabheader__item_active");
        });
        tabcontent.forEach((item) => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });
    }
    function shownTabContent(i = 0) {
        tabcontent[i].classList.add("show");
        tabcontent[i].classList.remove("hide");
        tabItems[i].classList.add("tabheader__item_active");
    }
    hiddenTabContent();
    shownTabContent();
    tabItemsParent.addEventListener("click", (event) => {
        const target = event.target;
        if (target && target.classList.contains("tabheader__item")) {
            tabItems.forEach((item, idx) => {
                if (item == target) {
                    hiddenTabContent();
                    shownTabContent(idx);
                }
            });
        }
    });
    //EndTab

    //Timer
    const deadline = "2024-04-01";
    function getTimeRemaining(endtime) {
        const timer = Date.parse(deadline) - Date.parse(new Date()),
            days = Math.floor(timer / (3600 * 24000)),
            hours = Math.floor(timer / 3600000) % 24,
            minutes = Math.floor(timer / 60000) % 60,
            seconds = Math.floor(timer / 1000) % 60;

        return {
            timer,
            days,
            hours,
            minutes,
            seconds,
        };
    }
    updateClock();

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(endtime) {
            const t = getTimeRemaining(endtime);

            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.timer <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock(".timer", deadline);
    //EndTimer
});
