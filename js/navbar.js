// TCA Navbar System - Consistent across all pages
class TCANavbar {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop().replace('.html', '');
        
        const pageMap = {
            'index': 'home',
            'about': 'about',
            'events': 'events',
            'news': 'awareness',
            'code-of-conduct': 'conduct',
            'team-tca': 'team'
        };
        
        return pageMap[page] || 'home';
    }

    async loadNavbar() {
        try {
            const response = await fetch('navbar.html');
            const navbarHTML = await response.text();
            document.querySelector('header').innerHTML = navbarHTML;
            this.setActiveLink();
            this.addEventListeners();
        } catch (error) {
            console.error('Error loading navbar:', error);
            this.fallbackNavbar();
        }
    }

    fallbackNavbar() {
        const navbarHTML = `
            <nav class="tca-navbar navbar navbar-expand-md navbar-dark fixed-top">
                <div class="container-fluid">
                    <a href="index.html" class="navbar-brand">
                        The Cyber Alliance
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item"><a href="index.html" class="nav-link" data-page="home"><i class="fa fa-home"></i> Home</a></li>
                            <li class="nav-item"><a href="about.html" class="nav-link" data-page="about"><i class="fa fa-info-circle"></i> About TCA</a></li>
                            <li class="nav-item"><a href="events.html" class="nav-link" data-page="events"><i class="fa fa-calendar"></i> Events</a></li>
                            <li class="nav-item"><a href="news.html" class="nav-link" data-page="awareness"><i class="fa fa-bolt"></i> Awareness</a></li>
                            <li class="nav-item"><a href="code-of-conduct.html" class="nav-link" data-page="conduct"><i class="fa fa-gavel"></i> Code of Conduct</a></li>
                            <li class="nav-item"><a href="team-tca.html" class="nav-link" data-page="team"><i class="fa fa-users"></i> Team TCA</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
        document.querySelector('header').innerHTML = navbarHTML;
        this.setActiveLink();
        this.addEventListeners();
    }

    setActiveLink() {
        const links = document.querySelectorAll('.tca-navbar .nav-link');
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === this.currentPage) {
                link.classList.add('active');
            }
        });
    }

    addEventListeners() {
        // Smooth scroll for anchor links
        document.querySelectorAll('.tca-navbar .nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                // Add click effect
                link.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    link.style.transform = '';
                }, 150);
            });
        });

        // Auto-collapse mobile menu on link click
        document.querySelectorAll('.tca-navbar .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navbarCollapse = document.querySelector('#navbarCollapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }

    init() {
        // Load CSS
        if (!document.querySelector('link[href*="navbar.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'css/navbar.css';
            document.head.appendChild(link);
        }

        // Load navbar HTML
        this.loadNavbar();
    }
}

// Initialize navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TCANavbar();
});


