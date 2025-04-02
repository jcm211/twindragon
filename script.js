// Gallery Tab Functionality
function openTab(tabName) {
    const tabContents = document.getElementsByClassName("gallery-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }
    
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle (can be added if needed)
// const menuToggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('nav ul');
// 
// menuToggle.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });