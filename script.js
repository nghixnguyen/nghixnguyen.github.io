const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            
            navLinks.forEach(link => {
                link.classList.remove('active', 'highlight', 'underline');
            });

            const activeLink = document.querySelector(`header nav a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active', 'highlight');
            }
        }
    });
}, {
    threshold: 0.3 
});

sections.forEach(section => {
    observer.observe(section);
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
