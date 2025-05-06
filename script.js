// Fungsi untuk animasi scroll
function handleScrollAnimation() {
    const sections = document.querySelectorAll('section');
    const fadeElements = document.querySelectorAll('.fade-in');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });

    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.75) {
            element.classList.add('visible');
        }
    });
}

// Menambahkan class fade-in ke elemen yang akan dianimasikan
document.addEventListener('DOMContentLoaded', () => {
    // Menambahkan class fade-in ke elemen yang akan dianimasikan
    const elementsToAnimate = document.querySelectorAll('h1, h2, p, .cta-button');
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
    });

    // Menjalankan animasi scroll saat halaman dimuat
    handleScrollAnimation();
});

// Menjalankan animasi scroll saat user melakukan scroll
window.addEventListener('scroll', handleScrollAnimation);

// Animasi untuk tombol CTA
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    ctaButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        ctaButton.style.transform = 'scale(1)';
        alert('Terima kasih atas ketertarikan Anda!');
    }, 200);
});

// Form submission handler dengan animasi
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.style.transform = 'scale(0.95)';
    
    // Mengambil nilai form
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    // Simulasi pengiriman data dengan animasi
    setTimeout(() => {
        submitButton.style.transform = 'scale(1)';
        console.log('Data form:', formValues);
        alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
        contactForm.reset();
    }, 200);
});

// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efek parallax sederhana untuk hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    
    if (hero) {
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
}); 