// --- 1. Theme Toggle Logic ---
const getTheme = () => localStorage.getItem('theme');

// Set the theme class and the emoji icon
const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
    document.getElementById('theme-toggle').textContent = theme === 'dark' ? '☀️' : '🌙';
};

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) { 
        
        // REFINEMENT: Optimized theme initialization
        const savedTheme = getTheme();
        const initialTheme = savedTheme === null ? 'light' : savedTheme;
        
        setTheme(initialTheme); // Apply initial theme

        themeToggle.addEventListener('click', () => {
            const currentTheme = getTheme();
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }

    // --- 2. Form Validation Listener ---
    const form = document.querySelector('#contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            validateForm();
        });
    }
});

function setERRor(id, message) {
    const errorElement = document.getElementById(id);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = message ? 'block' : 'none';
    }
}

function validateForm() {
    let isValid = true;
    
    // Clear all previous errors
    setERRor('nameError', '');
    setERRor('emailError', '');
    setERRor('messageError', '');

    // Name Validation
    const nameInput = document.getElementById('name');
    if (!nameInput.value.trim()) {
        setERRor('nameError', 'Name is required.');
        isValid = false;
    }
    
    // Email Validation
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
        setERRor('emailError', 'Email is required.');
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        setERRor('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // Message Validation
    const messageInput = document.getElementById('message');
    if (!messageInput.value.trim()) {
        setERRor('messageError', 'Message is required.');
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        setERRor('messageError', 'Message must be at least 10 characters long.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // form.reset(); 
    }
    
    return isValid;
}