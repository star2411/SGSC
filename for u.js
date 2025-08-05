
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Get all dropdown elements
const dropdowns = document.querySelectorAll('.dropdown-menu');

// Add event listeners to each dropdown
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdownMenu.computedStyleMap.display = dropdownMenu.computedStyleMap.display === 'block' ? 'none' : 'block';
    });
});