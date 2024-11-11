// Navbar functionality
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
let lastScroll = 0;

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
});

// Navbar scroll behavior
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove sticky class
    if (currentScroll > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply reveal class to elements
document.querySelectorAll('section, .feature-card, .price-card').forEach(el => {
    el.classList.add('reveal');
    scrollObserver.observe(el);
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    hero.style.backgroundPositionY = `${scroll * 0.5}px`;
});

// Enhanced glitch effect for headings
function createGlitchAnimation(element) {
    const originalText = element.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    
    let iterations = 0;
    const maxIterations = 15;
    
    const interval = setInterval(() => {
        element.textContent = originalText
            .split('')
            .map((char, index) => {
                if (index < iterations || Math.random() < 0.5) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        iterations++;
        
        if (iterations >= maxIterations) {
            clearInterval(interval);
            element.textContent = originalText;
        }
    }, 50);
}

// Apply glitch effect to main heading
const mainHeading = document.querySelector('.hero h1');
mainHeading.addEventListener('mouseenter', () => createGlitchAnimation(mainHeading));

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Pricing hover effects
document.querySelectorAll('.price-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        if (!card.classList.contains('featured')) {
            card.style.transform = 'translateY(-10px)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('featured')) {
            card.style.transform = 'translateY(0)';
        }
    });
});

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Initialize any other plugins or functionality
});

// Counter animation for stats
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 20);
}

// Animate stats when they come into view
const stats = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

stats.forEach(stat => statsObserver.observe(stat));

// Mejora del efecto de Navbar
let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    
    // Efecto de aparición/desaparición suave
    if (prevScrollPos > currentScrollPos) {
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
    } else {
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.opacity = '0';
    }
    
    // Efecto de blur aumentado al scroll
    if (currentScrollPos > 100) {
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.backdropFilter = 'blur(10px)';
    }
    
    prevScrollPos = currentScrollPos;
});

// Efecto de partículas en el hero
const createParticles = () => {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.opacity = Math.random() * 0.5;
        hero.appendChild(particle);
    }
};

// Mejora del efecto glitch
function enhancedGlitchEffect(element) {
    const originalText = element.textContent;
    const glitchIntensity = 3;
    
    for (let i = 0; i < glitchIntensity; i++) {
        setTimeout(() => {
            element.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            element.style.textShadow = `
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px var(--primary-color),
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px var(--accent-color)
            `;
        }, i * 50);
    }
    
    setTimeout(() => {
        element.style.transform = 'none';
        element.style.textShadow = 'none';
    }, glitchIntensity * 50);
}

// Aplicar el efecto mejorado de glitch
document.querySelectorAll('.glitch').forEach(element => {
    element.addEventListener('mouseenter', () => enhancedGlitchEffect(element));
});

// Efecto de hover 3D en las cards
document.querySelectorAll('.feature-card, .price-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = -(x - centerX) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});