/* Projects Filter - Modern Design */

class ProjectsFilter {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        if (this.filterBtns.length > 0 && this.projectCards.length > 0) {
            this.init();
        }
    }
    
    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleFilterClick(btn));
        });
    }
    
    handleFilterClick(clickedBtn) {
        const filter = clickedBtn.dataset.filter;
        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        clickedBtn.classList.add('active');
        this.filterProjects(filter);
    }
    
    filterProjects(filter) {
        this.projectCards.forEach(card => {
            const categories = card.dataset.category;
            if (filter === 'all' || (categories && categories.includes(filter))) {
                card.classList.remove('hidden');
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.transition = 'opacity 0.3s ease';
                card.style.opacity = '0';
                setTimeout(() => card.classList.add('hidden'), 300);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new ProjectsFilter());
