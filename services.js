// Code for showing services content on single page 

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.servicedev');


    function smoothScrollTo(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
        }
    }

    function showSection(serviceId) {
        sections.forEach(section => section.classList.remove('active'));
        const activeSection = document.getElementById(serviceId);
        if (activeSection) activeSection.classList.add('active');
    }
    function loadSectionFromHash() {
        const hash = window.location.hash.slice(1);
        if (hash && document.getElementById(hash)) {
            showSection(hash);
            setTimeout(() => smoothScrollTo(`#${hash}`), 100);
        }
    }
    loadSectionFromHash();
    window.addEventListener('hashchange', loadSectionFromHash);

});

document.addEventListener("DOMContentLoaded", function () {
        const serviceCards = document.querySelectorAll(".card");
        serviceCards.forEach(card => {
            card.addEventListener("click", function () {
                const serviceId = this.getAttribute("id");
                window.location.href = `services.html#${serviceId}`;
            });
        });
    });