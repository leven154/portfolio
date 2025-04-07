document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.color = "red";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "";
        });
    });
});
console.log('Happy developing ✨')
