var iconDarkMode = document.getElementById("icon-dark-mode")

iconDarkMode.onclick = function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        iconDarkMode.classList.remove("fa-moon");
        iconDarkMode.classList.add("fa-sun");
    } else {
        iconDarkMode.classList.remove("fa-sun");
        iconDarkMode.classList.add("fa-moon");
    }
}