// Dynamic greeting based on time of day
function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    
    if (greetingElement) {
        let greeting;
        if (hour < 12) {
            greeting = 'Good morning! Welcome to my website.';
        } else if (hour < 18) {
            greeting = 'Good afternoon! Welcome to my website.';
        } else {
            greeting = 'Good evening! Welcome to my website.';
        }
        greetingElement.textContent = greeting;
    }
}

// Scroll to top button functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
            scrollTopBtn.style.opacity = '1';
        } else {
            scrollTopBtn.style.opacity = '0';
            setTimeout(() => {
                if (window.pageYOffset <= 300) {
                    scrollTopBtn.style.display = 'none';
                }
            }, 300);
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Card hover effect with JavaScript
document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
});
