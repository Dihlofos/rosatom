"use strict";
(function () {
  const tabsContainer = document.querySelector(".js-tabs");
  const contentContainer = document.querySelector(".js-content");
  const contentITems = contentContainer.querySelectorAll(".js-content-item");
  const tabs = tabsContainer.querySelectorAll(".js-tab");
  const activeClass = "active";

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains(activeClass)) return;
      clearTabs();
      tab.classList.add(activeClass);

      const contentToshow = contentContainer.querySelector(
        `[data-lang=${tab.dataset.lang}]`
      );

      contentToshow.classList.add(activeClass);
    });
  });

  function clearTabs() {
    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });

    contentITems.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
})();
