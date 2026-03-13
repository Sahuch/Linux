/**
 * Sections tak smooth scroll karne ke liye logic
 */
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        // 130px offset diya hai taaki navbar section ke title ko na chupaye
        const headerOffset = 130;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

/**
 * Commands copy karne ka logic
 */
function copyText(btn) {
    const codeElement = btn.previousElementSibling;
    const textToCopy = codeElement.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        // Button state change
        const originalText = btn.innerText;
        btn.innerText = "Copied!";
        btn.style.background = "#64ffda";
        btn.style.color = "#0a192f";

        // 1.5 second baad wapas normal kar dena
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = ""; // Wapas CSS wali style
            btn.style.color = "";
        }, 1500);
    }).catch(err => {
        console.error("Copy fail ho gaya: ", err);
    });
}

/**
 * Scroll hone par 'Top' button dikhana ya chupana
 */
window.onscroll = function() {
    const topBtn = document.getElementById("topBtn");
    // Agar page 400px niche scroll ho gaya hai
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

/**
 * Seedha upar jane ke liye
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
