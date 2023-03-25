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
    const deadline = "2023-04-01";
    function getTimeRemaining(endtime) {
        let timer = Date.parse(deadline) - Date.parse(new Date()),
            days = Math.floor(timer / (3600 * 24000)),
            hours = Math.floor(timer / 3600000) % 24,
            minutes = Math.floor(timer / 60000) % 60,
            seconds = Math.floor(timer / 1000) % 60;
        if (timer <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }

        return {
            timer,
            days,
            hours,
            minutes,
            seconds,
        };
    }
    function getZero(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock(endtime) {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.timer <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock(".timer", deadline);
    //EndTimer

    //Model
    const modal = document.querySelector(".modal"),
        modalOpenBtn = document.querySelector("[Date-model]"),
        modalCloseBtn = document.querySelector("[Date-close]");
    function openModelDemo() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        clearTimeout(modalTimeId);
    }
    function closeModelDemo() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }
    modalOpenBtn.addEventListener("click", openModelDemo);
    modalCloseBtn.addEventListener("click", closeModelDemo);
    modal.addEventListener("click", (event) => {
        if (event.target == model) {
            closeModelDemo();
        }
    });
    const modalTimeId = setTimeout(openModelDemo, 4000);
    document.addEventListener("keydown", (event) => {
        if (event.code == "Escape" && modal.classList.contains("show")) {
            closeModelDemo();
        }
    });
    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModelDemo();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }
    window.addEventListener("scroll", showModalByScroll);
    //EndModel
});
