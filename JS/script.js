/* --- script.js --- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Typing Animation for Hero Section
    const typeTarget = document.querySelector('.typing-text');
    if (typeTarget) {
        const phrases = ["E-commerce Sites", "Modern Portfolios", "Landing Pages"];
        let i = 0, j = 0, current = "", isDeleting = false;

        function type() {
            current = phrases[i];
            typeTarget.textContent = isDeleting ? current.substring(0, j--) : current.substring(0, j++);
            
            if (!isDeleting && j === current.length + 1) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && j === 0) {
                isDeleting = false;
                i = (i + 1) % phrases.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 100 : 200);
            }
        }
        type();
    }

    // 2. Mobile Nav Logic (Existing)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-links');
    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});
