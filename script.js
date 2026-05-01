// Existing code + NEW FEATURES

// Pendidikan Detail Toggle
document.querySelectorAll('.pendidikan-card').forEach(card => {
    card.addEventListener('click', () => {
        const level = card.dataset.level;
        document.querySelectorAll('.pendidikan-card').forEach(c => c.style.opacity = '0.5');
        card.style.opacity = '1';
        
        // Show detail section
        document.querySelectorAll('.detail-level').forEach(sec => sec.classList.add('hidden'));
        document.getElementById(level).classList.remove('hidden');
        
        // Smooth scroll
        document.getElementById(level).scrollIntoView({ behavior: 'smooth' });
    });
});

// Back button
document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.detail-level').forEach(sec => sec.classList.add('hidden'));
        document.querySelectorAll('.pendidikan-card').forEach(c => c.style.opacity = '1');
        document.getElementById('pendidikan').scrollIntoView({ behavior: 'smooth' });
    });
});

// Gallery Modal
document.querySelectorAll('.galeri-item').forEach(item => {
    item.addEventListener('click', () => {
        const modal = document.getElementById('galeriModal');
        const modalImg = document.getElementById('modalImg');
        modal.style.display = 'block';
        modalImg.src = item.querySelector('img').src;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('galeriModal').style.display = 'none';
});

window.addEventListener('click', (e) => {
    const modal = document.getElementById('galeriModal');
    if (e.target === modal) modal.style.display = 'none';
});

// PPDB Form
document.getElementById('form-ppdb').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const text = btn.textContent;
    
    btn.textContent = 'Mengirim...';
    btn.disabled = true;
    
    setTimeout(() => {
        alert('✅ Pendaftaran berhasil! Tim kami akan hubungi via WhatsApp dalam 24 jam.');
        this.reset();
        btn.textContent = text;
        btn.disabled = false;
    }, 2000);
});

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target') || parseInt(counter.textContent);
        const count = +counter.getAttribute('data-count') || 0;
        const increment = target / 100;
        
        let current = count;
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        updateCounter();
    });
}

// Trigger counters on scroll
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
});

document.querySelector('.hero-stats')?.addEventListener('mouseenter', animateCounters);
