document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".section");
    const contactForm = document.getElementById("contact-form");
    const formResponse = document.getElementById("form-response");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);

            sections.forEach(sec => sec.classList.remove("active"));

            const target = document.getElementById(targetId);
            if (target) target.classList.add("active");
        });
    });

    if (contactForm) {
        contactForm.addEventListener("submit", e => {
            e.preventDefault();
            formResponse.textContent = "Pesan berhasil dikirim!";
            contactForm.reset();
        });
    }
});
