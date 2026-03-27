/* Navigation - Modern Design */

class Navigation {
    constructor() {
        this.header = document.getElementById('header');
        this.navToggle = document.getElementById('nav-toggle');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.mobileClose = document.getElementById('mobile-close');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');
        this.isMenuOpen = false;
        this.init();
    }
    
    init() {
        this.handleScroll();
        this.handleNavToggle();
        this.handleMobileMenu();
        this.handleMobileNavLinks();
        this.handleNavLinks();
        this.handleSectionObserver();
    }
    
    handleScroll() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        }, { passive: true });
    }
    
    handleNavToggle() {
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }
    }
    
    handleMobileMenu() {
        if (this.mobileClose) {
            this.mobileClose.addEventListener('click', () => this.closeMobileMenu());
        }
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener('click', (e) => {
                if (e.target === this.mobileMenu) this.closeMobileMenu();
            });
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) this.closeMobileMenu();
        });
    }
    
    toggleMobileMenu() {
        if (this.isMenuOpen) this.closeMobileMenu();
        else this.openMobileMenu();
    }
    
    openMobileMenu() {
        if (this.mobileMenu) {
            this.mobileMenu.classList.add('active');
            this.navToggle.classList.add('active');
            this.isMenuOpen = true;
            document.body.style.overflow = 'hidden';
        }
    }
    
    closeMobileMenu() {
        if (this.mobileMenu) {
            this.mobileMenu.classList.remove('active');
            this.navToggle.classList.remove('active');
            this.isMenuOpen = false;
            document.body.style.overflow = '';
        }
    }
    
    handleMobileNavLinks() {
        this.mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
    }
    
    handleNavLinks() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const headerHeight = this.header.offsetHeight;
                        const position = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        window.scrollTo({ top: position, behavior: 'smooth' });
                    }
                }
            });
        });
    }
    
    handleSectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    this.updateActiveNavLink(id);
                }
            });
        }, { rootMargin: '-20% 0px -80% 0px' });
        
        this.sections.forEach(section => observer.observe(section));
    }
    
    updateActiveNavLink(id) {
        this.navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new Navigation());
