document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const sidebar = document.querySelector(".sidebar");

    hamburgerMenu.addEventListener("click", function () {
        // Toggle the sidebar's display
        if (window.getComputedStyle(sidebar).display === "none") {
            sidebar.style.display = "block";
        } else {
            sidebar.style.display = "none";
        }
    });
});
