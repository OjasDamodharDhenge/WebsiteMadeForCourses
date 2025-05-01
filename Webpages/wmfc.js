// Toggle and save setting
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// Load setting on page load
window.onload = function () {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
};

// Grab the button and icon
const toggleBtn = document.getElementById('darkModeToggle');
const icon = toggleBtn.querySelector('i');
const label = toggleBtn.querySelector('.label');

// Initialize from localStorage
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    icon.className = 'fa fa-sun';
}

// Toggle function
function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);

    // Swap icon + text
    if (isDark) {
        icon.className = 'fa fa-sun';
    } else {
        icon.className = 'fa fa-moon';
    }
}

// Attach listener
toggleBtn.addEventListener('click', toggleDarkMode);

// Ensure only one PDF dropdown is open at a time
function toggleDropdown(element) {
    const id = element.getAttribute('data-id');
    const dropdown = document.getElementById(`pdfDropdown${id}`);

    

    // Toggle the current dropdown
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}