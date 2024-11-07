function toggleMenu() {
    // Select the menu element with the class 'menu-links'
    const menu = document.querySelector(".menu-links");
    
    // Select the icon element with the class 'mobile-icon'
    const icon = document.querySelector(".mobile-icon");
    
    // Toggle the 'open' class on the menu element
    // This will add the 'open' class if it is not present, or remove it if it is
    menu.classList.toggle("open");
    
    // Toggle the 'open' class on the icon element
    // This provides visual feedback (e.g., changing the icon) when the menu is opened/closed
    icon.classList.toggle("open");
}
