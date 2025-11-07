// Variabel untuk menyimpan nama user
let userName = '';

// Fungsi untuk menampilkan prompt nama
function showNamePrompt() {
    const name = prompt('Silakan masukkan nama Anda:');
    if (name && name.trim() !== '') {
        userName = name.trim();
        updateGreeting();
    } else {
        alert('Nama tidak boleh kosong!');
    }
}

// Fungsi untuk update ucapan selamat datang
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement && userName) {
        greetingElement.textContent = `Halo, ${userName}!`;
    }
}

// Fungsi untuk toggle menu mobile
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animasi hamburger
            hamburger.classList.toggle('active');
        });

        // Tutup menu ketika link diklik
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// Validasi Form Contact
function validateForm(event) {
    event.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(error => {
        error.style.display = 'none';
    });
    
    let isValid = true;
    
    // Validasi Nama
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        showError('nameError', 'Nama harus diisi!');
        isValid = false;
    } else if (name.length < 3) {
        showError('nameError', 'Nama minimal 3 karakter!');
        isValid = false;
    }
    
    // Validasi Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('emailError', 'Email harus diisi!');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('emailError', 'Format email tidak valid!');
        isValid = false;
    }
    
    // Validasi Pesan
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        showError('messageError', 'Pesan harus diisi!');
        isValid = false;
    } else if (message.length < 10) {
        showError('messageError', 'Pesan minimal 10 karakter!');
        isValid = false;
    }
    
    // Jika valid, tampilkan hasil
    if (isValid) {
        displayFormResult(name, email, message);
        document.getElementById('contactForm').reset();
    }
}

// Fungsi untuk menampilkan error
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Fungsi untuk menampilkan hasil form
function displayFormResult(name, email, message) {
    const resultDiv = document.getElementById('formResult');
    resultDiv.innerHTML = `
        <h3 style="color: #0051a5; margin-bottom: 1rem;">Terima kasih atas pesan Anda!</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${message}</p>
        <p style="margin-top: 1rem; color: #666;">Kami akan segera menghubungi Anda.</p>
    `;
    resultDiv.classList.add('show');
    
    // Scroll ke hasil
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Event listener ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi mobile menu
    toggleMobileMenu();
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
    
    // Auto prompt nama saat halaman pertama kali dibuka (opsional)
    // Uncomment baris di bawah jika ingin otomatis muncul prompt
    // setTimeout(showNamePrompt, 1000);
});

// Smooth scroll untuk link anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});