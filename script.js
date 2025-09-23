// Animation on load
window.addEventListener('load', () => {
    // GSAP Animations
    gsap.from("#mainTitle", { duration: 1.5, y: -50, opacity: 0, ease: "power3.out" });
    gsap.from("#subTitle", { duration: 1.5, y: -50, opacity: 0, ease: "power3.out", delay: 0.2 });
    gsap.from("#methodText", { duration: 1.5, y: -50, opacity: 0, ease: "power3.out", delay: 0.4 });
    // Animasi untuk eventInfo dihapus
    gsap.from("#closedNotice", { duration: 1, x: 100, opacity: 0, ease: "power3.out", delay: 0.8 });
    
    // Counter animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };
        
        setTimeout(updateCounter, 1000);
    });
    
    // Pulse animation for status badge
    const statusBadge = document.getElementById('statusBadge');
    setInterval(() => {
        statusBadge.classList.add('scale-110');
        setTimeout(() => statusBadge.classList.remove('scale-110'), 300);
    }, 2000);
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Add blob animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes animate-blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
    }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }
`;
document.head.appendChild(style);


// Contoh data dihapus; akan diisi dari Supabase saat runtime
let dataPeserta = [];

// Supabase: ambil data peserta dari tabel pendaftaran_diklat
function formatTanggalIndo(dateStr) {
    if (!dateStr) return "";
    const dateObj = new Date(dateStr);
    if (isNaN(dateObj)) return String(dateStr);
    return dateObj.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
}

async function loadPesertaFromSupabase() {
    try {
        const supabaseUrl = 'https://iwnwqcxigtywetgcmlou.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3bndxY3hpZ3R5d2V0Z2NtbG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MjQ4MTUsImV4cCI6MjA1MTQwMDgxNX0.fjdJlTVav4Gm8ku9rBmRuLoae5ViFxas7Uu069ItfnY';
        if (!window.supabase || !window.supabase.createClient) {
            console.error('Supabase library belum termuat.');
            return;
        }

        const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
        const { data, error } = await supabase
            .from('pendaftaran_diklat')
            .select('nama_lengkap, tempat_lahir, tanggal_lahir');

        if (error) {
            console.error('Gagal memuat data dari Supabase:', error);
            return;
        }

        const mapped = (data || []).map((row) => {
            const nama = row.nama_lengkap || '';
            const tempat = row.tempat_lahir || '';
            const tgl = formatTanggalIndo(row.tanggal_lahir);
            const ttl = (tempat && tgl) ? `${tempat}, ${tgl}` : (tempat || tgl || '');
            return { nama, ttl };
        });

        // Jika ada data dari Supabase, timpa dataPeserta contoh
        if (mapped.length > 0) {
            dataPeserta = mapped;
        }

        // Segarkan dropdown jika user sudah mengetik
        if (input && input.value && input.value.length >= 3) {
            const evt = new Event('input');
            input.dispatchEvent(evt);
        }
    } catch (e) {
        console.error('Kesalahan tak terduga saat memuat data peserta:', e);
    }
}

const input = document.getElementById("namaInput");
const suggestions = document.getElementById("suggestions");
const detailCard = document.getElementById("detailCard");
const detailNama = document.getElementById("detailNama");
const detailTTL = document.getElementById("detailTTL");

// Fungsi untuk mengatur posisi kontakInfo
function adjustKontakInfoPosition() {
const kontakInfo = document.getElementById("kontakInfo");
const suggestionsVisible = !suggestions.classList.contains("hidden");

if (suggestionsVisible) {
// Hitung tinggi dropdown suggestions
const suggestionsHeight = suggestions.offsetHeight;
// Tambahkan margin top pada kontakInfo
kontakInfo.style.marginTop = (suggestionsHeight + 20) + "px";
kontakInfo.style.transition = "margin-top 0.3s ease";
} else {
// Kembalikan margin top ke normal
kontakInfo.style.marginTop = "0";
}
}

input.addEventListener("input", function () {
const query = this.value.toLowerCase();
suggestions.innerHTML = "";

if (query.length >= 3) {
const filtered = dataPeserta.filter(p =>
p.nama.toLowerCase().includes(query)
);

if (filtered.length > 0) {
filtered.forEach(p => {
  const li = document.createElement("li");
  li.className = "p-3 hover:bg-blue-100 cursor-pointer rounded-lg";
  li.textContent = p.nama;
  li.addEventListener("click", () => {
    input.value = p.nama;
    suggestions.classList.add("hidden");
    adjustKontakInfoPosition(); // Atur posisi saat dropdown ditutup

    // Tampilkan card detail
    detailNama.textContent = p.nama;
    detailTTL.textContent = p.ttl;
    detailCard.classList.remove("hidden");
  });
  suggestions.appendChild(li);
});
suggestions.classList.remove("hidden");
adjustKontakInfoPosition(); // Atur posisi saat dropdown muncul
} else {
suggestions.classList.add("hidden");
adjustKontakInfoPosition(); // Atur posisi saat dropdown kosong
}
} else {
suggestions.classList.add("hidden");
}
});

// Klik di luar menutup dropdown
document.addEventListener("click", function (e) {
if (!e.target.closest("#namaInput")) {
suggestions.classList.add("hidden");
adjustKontakInfoPosition(); // Atur posisi saat dropdown ditutup dengan klik di luar
}
});

// Atur posisi awal saat halaman dimuat
window.addEventListener("load", function() {
adjustKontakInfoPosition();
});

// Atur posisi saat halaman di-resize
window.addEventListener("resize", function() {
    adjustKontakInfoPosition();
});

// Countdown Timer untuk Acara
function startCountdown() {
    // Tanggal acara: 27 September 2025, 08:00 WITA
    const eventDate = new Date('2025-09-27T08:00:00+08:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            // Acara sudah berlalu
            document.getElementById('eventDays').textContent = '00';
            document.getElementById('eventHours').textContent = '00';
            document.getElementById('eventMinutes').textContent = '00';
            document.getElementById('eventSeconds').textContent = '00';
            return;
        }
        
        // Hitung waktu tersisa
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update tampilan
        document.getElementById('eventDays').textContent = days.toString().padStart(2, '0');
        document.getElementById('eventHours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('eventMinutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('eventSeconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update countdown setiap detik
    updateCountdown(); // Panggil sekali untuk inisialisasi
    setInterval(updateCountdown, 1000);
}

// Jalankan countdown saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    // Muat data peserta dari Supabase
    loadPesertaFromSupabase();
});
