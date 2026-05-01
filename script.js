* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #2563eb;
    --secondary: #1e40af;
    --success: #10b981;
    --warning: #f59e0b;
    --dark: #1f2937;
    --light: #f8fafc;
    --gray: #6b7280;
    --white: #ffffff;
    --shadow: 0 10px 40px rgba(0,0,0,0.1);
    --shadow-lg: 0 20px 60px rgba(0,0,0,0.15);
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--dark);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Loader */
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.loader.hidden {
    opacity: 0;
    pointer-events: none;
}

.loader-content {
    text-align: center;
}

.loader i {
    font-size: 4rem;
    color: var(--primary);
    margin-bottom: 1rem;
    animation: spin 2s linear infinite;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(20px);
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 2px 20px rgba(0,0,0,0.05);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--dark);
}

.nav-logo i {
    color: var(--success);
    font-size: 1.5rem;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2.5rem;
    align-items: center;
}

.nav-link {
    color: var(--gray);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
}

.nav-link.active,
.nav-link:hover {
    color: var(--primary);
}

.btn-nav {
    padding: 10px 20px;
    background: var(--primary);
    color: white;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-nav:hover {
    background: var(--secondary);
    transform: translateY(-2px);
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--dark);
    transition: 0.3s;
}

/* Hero */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding-top: 80px;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    z-index: -1;
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.badge {
    display: inline-block;
    background: rgba(255,255,255,0.2);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 500;
    backdrop-filter: blur(10px);
    margin-bottom: 1.5rem;
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 700;
    color: white;
    line-height: 1.1;
    margin-bottom: 1.5rem;
}

.hero-title span {
    display: block;
    background: linear-gradient(45deg, white, rgba(255,255,255,0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-desc {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.9);
    margin-bottom: 3rem;
    max-width: 500px;
}

.hero-stats {
    display: flex;
    gap: 3rem;
    margin-bottom: 3rem;
}

.stat-item {
    text-align: center;
}

.stat-num {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.25rem;
}

.stat-label {
    color: rgba(255,255,255,0.8);
    font-size: 0.95rem;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.btn-primary, .btn-outline {
    padding: 16px 32px;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
}

.btn-primary {
    background: white;
    color: var(--primary);
    box-shadow: var(--shadow);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
}

.btn-outline {
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
    background: transparent;
}

.btn-outline:hover {
    border-color: white;
    background: white;
    color: var(--primary);
}

.btn-large {
    padding: 20px 40px;
    font-size: 1.1rem;
}

.btn-full {
    width: 100%;
}

.hero-right {
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-illustration {
    position: relative;
    width: 350px;
    height: 350px;
}

.student-card, .quran-card {
    position: absolute;
    background: rgba(255,255,255,0.1);
    border-radius: 20px;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: white;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.2);
}

.student-card {
    top: 20%;
    right: 10%;
    animation: float1 6s ease-in-out infinite;
}

.quran-card {
    bottom: 20%;
    left: 10%;
    animation: float2 6s ease-in-out infinite reverse;
}

/* Sections */
.section {
    padding: 100px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-subtitle {
    color: var(--success);
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1rem;
    display: block;
}

.section-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--dark);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.2;
}

/* Profil */
.profil-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
}

.profil-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.profil-card {
    display: flex;
    gap: 1.5rem;
    padding: 2rem;
    background: var(--light);
    border-radius: 20px;
    transition: all 0.3s ease;
}

.profil-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}

.card-icon {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: white;
    flex-shrink: 0;
}

.card-icon.primary { background: var(--primary); }
.card-icon.success { background: var(--success); }
.card-icon.warning { background: var(--warning); }

.profil-image {
    text-align: center;
}

.image-circle {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: white;
    margin: 0 auto;
    box-shadow: var(--shadow-lg);
}

/* Program */
.program-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.program-card {
    background: var(--white);
    border-radius: 24px;
    padding: 2.5rem 2rem;
    text-align: center;
    box-shadow: var(--shadow);
    transition: all 0.4s ease;
    border-top: 4px solid transparent;
    position: relative;
    overflow: hidden;
}

.program-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--success));
}

.program-card:hover {
    transform: translateY(-12px);
    box-shadow: var(--shadow-lg);
}

.program-card.featured {
    grid-column: 1 / -1;
    border-top-color: var(--success);
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

.card-badge {
    background: var(--success);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.card-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary);
}

.program-features {
    list-style: none;
    margin: 1.5rem 0;
    text-align: left;
}

.program-features li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    color: var(--gray);
}

.program-features i {
    color: var(--success);
    width: 18px;
}

.program-price {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--success);
    margin: 1rem 0;
}

/* PPDB */
.ppdb-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.alert {
    background: var(--success);
    color: white;
    padding: 1.5rem 2rem;
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    margin-bottom: 2rem;
}

.jadwal-timeline {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.timeline-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    background: var(--light);
    border-radius: 16px;
    position: relative;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 100%;
    background: var(--light);
}

.timeline-item.active::before {
    background: var(--primary);
}

.timeline-date {
    min-width: 80px;
    font-weight: 700;
    color: var(--primary);
}

.timeline-label {
    flex: 1;
    font-weight: 500;
}

.contact-cta {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255,255,255,0.1);
    border-radius: 16px;
    backdrop-filter: blur(10px);
}

.contact-cta i {
    font-size: 1.5rem;
    color: var(--success);
}

.contact-cta a {
    color: white;
    text-decoration: none;
    font-weight: 600;
}

.ppdb-form {
    background: var(--white);
    padding: 2.5rem;
    border-radius: 24px;
    box-shadow: var(--shadow-lg);
}

.ppdb-form h3 {
    margin-bottom: 2rem;
    color: var(--dark);
    text-align: center;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 16px 20px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

/* Galeri */
.galeri-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.galeri-item {
    position: relative;
    aspect-ratio: 4/3;
    border-radius: 20px;
    overflow: hidden;
    display: block;
    transition: all 0.4s ease;
    box-shadow: var(--shadow);
}

.galeri-item:hover {
    transform: scale(1.03);
    box-shadow: var(--shadow-lg);
}

.galeri-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.galeri-item:hover img {
    transform: scale(1.1);
}

.galeri-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, rgba(37,99,235,0.9), rgba(16,185,129,0.9));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.galeri-item:hover .galeri-overlay {
    opacity: 1;
}

.galeri-overlay i {
    color: white;
    font-size: 2rem;
}

/* Contact */
.contact-grid {
    max-width: 800px;
    margin: 0 auto;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.contact-card {
    display: flex;
    gap: 1.5rem;
    padding: 2rem;
    background: var(--light);
    border-radius: 20px;
    transition: all 0.3s ease;
}

.contact-card:hover {
    background: var(--white);
    box-shadow: var(--shadow);
}

.contact-icon {
    width: 60px;
    height: 60px;
    background: var(--primary);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    flex-shrink: 0;
}

.contact-card h4 {
    margin-bottom: 0.5rem;
    color: var(--dark);
}

.contact-card a {
    color: var(--primary);
    text-decoration: none;
}

/* Footer */
.footer {
    background: var(--dark);
    color: white;
    padding: 4rem 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
}

.footer-brand p {
    color: #9ca3af;
    margin-top: 1rem;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.footer-links a {
    color: #9ca3af;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: white;
}

.whatsapp-btn {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: var(--success);
    color: white;
    text-decoration: none;
    border-radius: 12px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.whatsapp-btn:hover {
    background: #059669;
    transform: translateY(-2px);
}

.footer-bottom {
    border-top: 1px solid #374151;
    padding-top: 2rem;
    text-align: center;
    color: #9ca3af;
}

/* Animations */
@keyframes spin {
    100% { transform: rotate(360deg); }
}

@keyframes float1 {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

@keyframes float2 {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
}

/* Responsive */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .nav-menu {
        display: none;
    }
    
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 3rem;
    }
    
    .hero-stats {
        justify-content: center;
    }
    
    .ppdb-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .profil-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .btn-primary, .btn-outline {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }
}
