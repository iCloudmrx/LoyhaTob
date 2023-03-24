"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const tabItemsParent = document.querySelector(".tabheader__items"),
        tabItems = document.querySelectorAll(".tabheader__item"),
        tabcontent = document.querySelectorAll(".tabcontent");

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
});
