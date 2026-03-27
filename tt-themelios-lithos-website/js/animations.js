/* Animations - Modern Design */

class ScrollAnimations {
    constructor() {
        this.revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '0px 0px -100px 0px' });
            
            this.revealElements.forEach(el => observer.observe(el));
        } else {
            this.revealElements.forEach(el => el.classList.add('revealed'));
        }
    }
}

class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('[data-count]');
        this.isAnimated = false;
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.isAnimated) {
                        this.animateCounters();
                        this.isAnimated = true;
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            const container = document.querySelector('.hero-stats') || document.querySelector('.stats-grid');
            if (container) observer.observe(container);
        }
    }
    
    animateCounters() {
        this.counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const update = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            };
            update();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimations();
    new CounterAnimation();
});
