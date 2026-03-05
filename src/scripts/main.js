// ── Nav scroll effect ──
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile menu ──
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
    document.body.style.overflow = document.getElementById('mobileMenu').classList.contains('open') ? 'hidden' : '';
}
function closeMobileMenu(e) {
    if (e.target === e.currentTarget) toggleMobileMenu();
}

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Contact form (mailto fallback) ──
function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const role = form.role.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Website Inquiry from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
        `Name: ${firstName} ${lastName}\nEmail: ${email}\nRole: ${role}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:projectmanagementpurdue@gmail.com?subject=${subject}&body=${body}`;

    document.getElementById('formSuccess').style.display = 'block';
    form.reset();
    setTimeout(() => {
        document.getElementById('formSuccess').style.display = 'none';
    }, 5000);
}
