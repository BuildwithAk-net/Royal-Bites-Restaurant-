// Mobile menu button
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        // Allow normal behavior for external links or javascript:void(0)
        const href = this.getAttribute("href");
        if (!href) return;

        e.preventDefault();

        if (href === "#") {
            // scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }

        if (navLinks) {
            navLinks.classList.remove("active");
        }
    });
});
