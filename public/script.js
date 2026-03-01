document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-trigger');
    const caText = document.getElementById('ca-text').innerText;
    const toast = document.getElementById('toast');

    // CA Copy Logic
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(caText).then(() => {
            showToast();
        });
    });

    function showToast() {
        toast.classList.add('active');
        setTimeout(() => {
            toast.classList.remove('active');
        }, 2000);
    }

    // Scroll Reveal Logic (Simple & High Performance)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply basic reveal to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(section);
    });
});
