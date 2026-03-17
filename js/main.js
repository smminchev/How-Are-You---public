/**
 * How Are You?! Landing Page JavaScript
 * - Spam-protected contact email
 * - Scroll reveal animations
 *
 * Language switching is now handled via separate static pages (/bg/, /de/)
 * with <a> links in the language switcher. No client-side i18n needed.
 */

// Contact email (obfuscated)
const emailParts = ['developer', '@', 'howareu', '.', 'app'];

/**
 * Initialize the page
 */
function init() {
    // Set up contact link
    setupContactLink();
}

/**
 * Set up spam-protected contact link
 */
function setupContactLink() {
    const contactLinks = document.querySelectorAll('.contact-link');

    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Assemble email from parts
            const email = emailParts.join('');
            window.location.href = 'mailto:' + email;
        });
    });
}

/**
 * Scroll reveal animation using IntersectionObserver
 */
function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { init(); setupScrollReveal(); });
} else {
    init();
    setupScrollReveal();
}
