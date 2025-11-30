document.addEventListener('DOMContentLoaded', () => {
    // Popup Logic
    const popup = document.getElementById('promoPopup');
    const closePopup = document.querySelector('.close-popup');

    // Show popup after 1 second
    setTimeout(() => {
        popup.classList.add('active');
    }, 1000);

    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    // Close popup when clicking outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
        }
    });

    // Language Toggle - FIXED
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            // Toggle between en and bm
            if (document.body.classList.contains('lang-en')) {
                document.body.classList.remove('lang-en');
                document.body.classList.add('lang-bm');
            } else {
                document.body.classList.remove('lang-bm');
                document.body.classList.add('lang-en');
            }
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust for fixed header
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate sections on scroll
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Animate Hamburger
            const bars = menuToggle.querySelectorAll('.bar');
            if (navLinks.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const bars = menuToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }
});
