export function toc() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = document.querySelectorAll('.toc-section');

    // Smooth scroll to section
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Highlight active section in TOC
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const tocLink = document.querySelector(`.toc-link[href="#${id}"]`);
            if (entry.isIntersecting) {
                tocLink.classList.add('is-active');
            } else {
                tocLink.classList.remove('is-active');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });
}