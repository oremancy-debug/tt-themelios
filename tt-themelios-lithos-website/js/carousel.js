/* Photo Carousel */
class PhotoCarousel {
    constructor(el) {
        this.el = el;
        this.track = el.querySelector('.carousel-track');
        this.slides = el.querySelectorAll('.carousel-slide');
        this.prevBtn = el.querySelector('.carousel-prev');
        this.nextBtn = el.querySelector('.carousel-next');
        this.dotsContainer = el.querySelector('.carousel-dots');
        this.current = 0;
        this.total = this.slides.length;

        if (this.total <= 1) return;

        this.createDots();
        this.bindEvents();
        this.update();
    }

    createDots() {
        if (!this.dotsContainer) return;
        for (let i = 0; i < this.total; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
            dot.addEventListener('click', () => this.goTo(i));
            this.dotsContainer.appendChild(dot);
        }
    }

    bindEvents() {
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

        // Touch/swipe support
        let startX = 0;
        this.track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; });
        this.track.addEventListener('touchend', (e) => {
            const diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? this.next() : this.prev();
            }
        });
    }

    prev() { this.goTo(this.current <= 0 ? this.total - 1 : this.current - 1); }
    next() { this.goTo(this.current >= this.total - 1 ? 0 : this.current + 1); }

    goTo(index) {
        this.current = index;
        this.update();
    }

    update() {
        this.track.style.transform = 'translateX(-' + (this.current * 100) + '%)';
        const dots = this.el.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => dot.classList.toggle('active', i === this.current));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.photo-carousel').forEach(el => new PhotoCarousel(el));
});
