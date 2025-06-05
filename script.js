document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
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


    const contactForm = document.getElementById('contactForm');
    const confirmationPopup = document.getElementById('confirmationPopup');
    const closePopup = document.querySelector('.close-popup');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
  
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
 
        confirmationPopup.classList.add('active');
        
    
        this.reset();
    });


    closePopup.addEventListener('click', function() {
        confirmationPopup.classList.remove('active');
    });


    confirmationPopup.addEventListener('click', function(e) {
        if (e.target === confirmationPopup) {
            confirmationPopup.classList.remove('active');
        }
    });

   
    const hamburger = document.querySelector('.hamburger');
    const navLinksMobile = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    console.log('Hamburger element:', hamburger);
    console.log('Nav links element:', navLinksMobile);

    if (hamburger && navLinksMobile) {
        hamburger.addEventListener('click', function(e) {
            console.log('Hamburger clicked');
            e.stopPropagation();
            this.classList.toggle('active');
            navLinksMobile.classList.toggle('active');
        });

        navLinksItems.forEach(item => {
            item.addEventListener('click', function() {
                console.log('Nav link clicked');
                hamburger.classList.remove('active');
                navLinksMobile.classList.remove('active');
            });
        });

        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navLinksMobile.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinksMobile.classList.remove('active');
            }
        });
    }
}); 