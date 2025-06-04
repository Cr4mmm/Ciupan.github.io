document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar a');

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const targetPosition = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink();

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const confirmationPopup = document.getElementById('confirmationPopup');
    const closePopup = document.querySelector('.close-popup');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        // Here you would typically send the data to a server
        // For now, we'll just show the confirmation popup
        confirmationPopup.classList.add('active');
        
        // Clear the form
        this.reset();
    });

    // Close popup when clicking the OK button
    closePopup.addEventListener('click', function() {
        confirmationPopup.classList.remove('active');
    });

    // Close popup when clicking outside
    confirmationPopup.addEventListener('click', function(e) {
        if (e.target === confirmationPopup) {
            confirmationPopup.classList.remove('active');
        }
    });
}); 