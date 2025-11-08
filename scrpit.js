  window.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;

    // Header ko fix kar do
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.width = "100%";
    header.style.zIndex = "1000";

    // Body ko header ke niche dhakelne ke liye padding
    document.body.style.paddingTop = headerHeight + "px";
  });