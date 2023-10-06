const darkModeToggle = document.getElementById("dark-mode-toggle");
const stylesheet = document.getElementById("stylesheet");
const darkStylesheet = document.getElementById("dark-stylesheet");

const isDarkMode = localStorage.getItem("darkMode") === "enabled";


if (isDarkMode) {
    enableDarkMode();
}


function enableDarkMode() {
    document.body.classList.add("dark-mode");
    stylesheet.disabled = true;
    darkStylesheet.disabled = false;
    localStorage.setItem("darkMode", "enabled");
    darkModeToggle.checked = true;
}


function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    stylesheet.disabled = false;
    darkStylesheet.disabled = true;
    localStorage.setItem("darkMode", "disabled");
    darkModeToggle.checked = false;
}


darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});


function setSiteColors() {
    if (document.body.classList.contains("dark-mode")) {
        document.body.style.setProperty("--background-color", "#333"); 
        document.body.style.setProperty("--text-color", "#fff"); 
      
    } else {
        document.body.style.setProperty("--background-color", "#f4f4f4"); 
        document.body.style.setProperty("--text-color", "#000"); 
        
    }
}


setSiteColors();
