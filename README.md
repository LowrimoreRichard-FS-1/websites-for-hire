# Websites For Hire: Project Documentation

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

## 🔗 [Visit the Live Website Here!](https://lowrimorerichard-fs-1.github.io/websites-for-hire/)


We can create the most **modern and advanced websites** you need. This documentation page serves as a complete overview of the "Websites For Hire" project, detailing its structure, goals, and the cutting-edge technologies utilized.

## 🌟 Our Mission

This multi-page website serves as a robust and professional portfolio foundation. Our mission is to deliver web solutions built on **Simplicity, Performance, and Scalability**, ensuring your online presence is both highly functional and easy to maintain.

## ✨ Core Website Features

| Feature | Description | Technical Implementation |
| :--- | :--- | :--- |
| **Full Responsiveness** | The layout is optimized for all screen sizes (mobile, tablet, desktop). The content automatically adapts, ensuring a perfect viewing experience for every visitor. | Achieved using CSS **Flexbox** and **CSS Grid** with mobile-first media queries.  |
| **Dark Mode Toggle** | A persistent theme toggle allows users to switch between light and dark modes. The site remembers their preference for future visits. | Implemented via **CSS Custom Properties** (variables) and **JavaScript Local Storage** in `JS/script.js`. |
| **High Accessibility** | Focus on clean structure, semantic HTML, and high-contrast buttons (`.cta-button`) that meet WCAG standards for readability. | Ensured through semantic HTML5 tags and high-contrast color choices in `CSS/styles.css`. |
| **Modern Styling** | A professional, polished aesthetic featuring rounded main containers and card-like content sections that "lift" off the page background. | Applied using the `main.container` selector with `border-radius: 8px` and soft `box-shadow`. |
| **Client-Side Validation** | The contact form prevents errors before submission by validating required fields and email formats in the user's browser. | Handled by the optimized `validateForm()` function in `JS/script.js`. |

---

## 🛠️ The Technical Stack

This project is built exclusively with the three foundational pillars of the web:

### 1. HTML5 (Structure)

The entire site consists of seven interlinked pages, each featuring a consistent structure for easy navigation and maintenance:

* **`index.html`:** Homepage with a clear call-to-action (CTA).
* **`second-page.html`:** Introduction to the project's technology.
* **`about.html`:** Mission statement and **Contact Information**. (Now using external CSS for clean styling).
* **`form-page.html`:** Comprehensive contact form.
* **`responsive-design.html`**
* **`modern-css.html`**
* **`interactive-js.html`**

### 2. CSS3 (Styling)

All styling is consolidated in **`CSS/styles.css`**.

* **CSS Custom Properties:** Used for defining all colors (`--primary-color`, `--background-color`), ensuring quick and systematic theming.
* **Layout Modules:** Heavy use of **Flexbox** for aligning header/footer items and **CSS Grid** for the three-column feature sections.
* **Code Refinement:** Inline styles in `about.html` have been externalized into the clean `.contact-info` class in `styles.css`.
* **Responsiveness:** Explicitly handles screen size breakpoints to reorganize elements for mobile viewers.

### 3. JavaScript (Interactivity)

All functionality is contained in **`JS/script.js`**.

* **Theme Control:** Manages the visual state of the dark mode toggle with **optimized initialization logic** for better performance.
* **Form Logic:** Implements the `validateForm()` function to check user inputs before allowing submission.

---

## 📞 Direct Contact Information

For project inquiries or support, please reach out directly:

* **👤 Name:** Richard Lowrimore
* **📧 Email:** richardlowrimore22@gmail.com
* **🏠 Address:** 13491 County Road 472, Lindale, Texas 75771

[Send a Message via the Form](form-page.html)
