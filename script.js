document.addEventListener('DOMContentLoaded', function() {
    // Navigation bar scroll effect
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu when clicking a link
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll event listener
    window.addEventListener('scroll', function() {
        // Navbar color change on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            if (scrollIndicator) {
                scrollIndicator.style.opacity = '0';
            }
        } else {
            navbar.classList.remove('scrolled');
            if (scrollIndicator) {
                scrollIndicator.style.opacity = '1';
            }
        }

        // Activate menu items based on scroll position
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-menu a');

        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        // Animate elements on scroll
        animateOnScroll();
    });

    // Initialize animations on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('active');
            }
        });

        // Parallax effect for about image
        const parallaxBoxes = document.querySelectorAll('.parallax-box');
        parallaxBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const boxHeight = box.offsetHeight;
            const windowHeight = window.innerHeight;
            
            if (boxTop < windowHeight && boxTop > -boxHeight) {
                const scrolledRatio = (windowHeight - boxTop) / (windowHeight + boxHeight);
                const moveY = scrolledRatio * 60 - 30; // Move between -30px and +30px
                box.style.transform = `translateY(${moveY}px)`;
            }
        });
    }

    // Testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (testimonialSlider && testimonialSlides.length > 0) {
            let currentSlide = 0;
    
            // Add your slider functionality here
            // Example: testimonialSlides[currentSlide].classList.add('active');
        }
        
    // Initialize scroll animations on load
    animateOnScroll();

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const formElements = this.elements;
            let isValid = true;
            
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].required && !formElements[i].value.trim()) {
                    formElements[i].style.borderColor = 'red';
                    isValid = false;
                } else if (formElements[i].type === 'email' && formElements[i].value) {
                    // Basic email validation
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(formElements[i].value)) {
                        formElements[i].style.borderColor = 'red';
                        isValid = false;
                    } else {
                        formElements[i].style.borderColor = '';
                    }
                } else {
                    formElements[i].style.borderColor = '';
                }
            }
            
            if (isValid) {
                // Normally this would submit to a server, but for demo we'll just show a success message
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                submitButton.textContent = 'Message Sent!';
                submitButton.disabled = true;
                submitButton.style.backgroundColor = 'var(--accent-dark)';
                
                // Reset form
                this.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.backgroundColor = '';
                }, 3000);
            }
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button');
            
            if (!emailInput.value.trim()) {
                emailInput.style.borderColor = 'red';
                return;
            }
            
            // Basic email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailInput.style.borderColor = 'red';
                return;
            }
            
            // Success state
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Subscribed!';
            submitButton.disabled = true;
            emailInput.style.borderColor = '';
            
            // Reset form
            this.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 3000);
        });
    }

    // Create a floating effect for hero section
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        let floatInterval = setInterval(() => {
            heroImage.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                heroImage.style.transform = 'translateY(0)';
            }, 1000);
        }, 2000);
    }

    // Create a directory for the images if it doesn't exist
    console.log('HealthyBites website loaded successfully!');
}); 