/**
 * How Are You?! Landing Page JavaScript
 * - Spam-protected contact email
 * - Scroll reveal animations
 * - Primary nav: hamburger toggle + active-section highlighting
 *
 * Language switching is handled via separate static pages (/bg/, /de/)
 * with <a> links in the language switcher. No client-side i18n needed.
 */

// Contact email (obfuscated)
const emailParts = ['developer', '@', 'howareu', '.', 'app'];

/**
 * Initialize the page
 */
function init() {
    setupContactLink();
    setupNavToggle();
    setupActiveSectionHighlight();
}

/**
 * Set up spam-protected contact link
 */
function setupContactLink() {
    const contactLinks = document.querySelectorAll('.contact-link');

    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const email = emailParts.join('');
            window.location.href = 'mailto:' + email;
        });
    });
}

/**
 * Hamburger menu toggle + close-on-link / close-on-outside-click
 */
function setupNavToggle() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-nav');
    if (!toggle || !nav) return;

    const close = () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
    };
    const open = () => {
        nav.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
    };

    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        expanded ? close() : open();
    });

    // Close when any nav link is tapped (mobile)
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => close());
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) close();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });
}

/**
 * Highlight the nav link whose section is currently in view
 */
function setupActiveSectionHighlight() {
    const links = document.querySelectorAll('.primary-nav .nav-link[href^="#"]');
    if (!links.length) return;

    const byId = new Map();
    links.forEach(link => {
        const id = link.getAttribute('href').slice(1);
        if (id) byId.set(id, link);
    });

    const sections = Array.from(byId.keys())
        .map(id => document.getElementById(id))
        .filter(Boolean);
    if (!sections.length) return;

    const setActive = (id) => {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
    };

    const observer = new IntersectionObserver((entries) => {
        // Pick the entry closest to the top of the viewport that's currently intersecting
        const visible = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
    }, {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
    });

    sections.forEach(s => observer.observe(s));
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
