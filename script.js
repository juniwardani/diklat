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


// Contoh data nama + TTL
const dataPeserta = [
{ nama: "Abdu Dhohir Fatahillah", ttl: "Kotabaru, 13 Januari 1998" },
{ nama: "ABDUL HALIM", ttl: "Kotabaru, 26 Oktober 1988" },
{ nama: "Adelia Sukma Budi Hartanti ", ttl: "Kotabaru, 10 Oktober 2001" },
{ nama: "Agustin", ttl: "Sarang Tiung, 17 Agustus 1996" },
{ nama: "agustina", ttl: "kotabaru, 05 Agustus 1969" },
{ nama: "Ahmad Dailami", ttl: "Mundar, 13 Juli 1979" },
{ nama: "AHMAD SURYANI", ttl: "SENGAYAM, 05 Januari 2000" },
{ nama: "Ahmad Tepu", ttl: "Kalbar, 12 April 1985" },
{ nama: "Aida jubaedah", ttl: "Ciamis, 15 Desember 1969" },
{ nama: "AKHMAD FIRDAUS", ttl: "GUNUNG BATU BESAR, 25 Oktober 1994" },
{ nama: "AKHMAD KHAIRUL FAHMI ", ttl: "Kotabaru, 20 Mei 1998" },
{ nama: "Akhmad Multawi", ttl: "Pantai, 03 Oktober 1990" },
{ nama: "Akhmad rifani", ttl: "pantai, 24 Februari 1972" },
{ nama: "Alfa Nurjannah", ttl: "Banjarnegara, 21 Desember 1995" },
{ nama: "Ali zaenal abidin", ttl: "Kotabaru, 08 Juni 2002" },
{ nama: "ALPISAH ", ttl: "KOTABARU, 20 Juni 1982" },
{ nama: "Alvira Amalia", ttl: "Kotabaru, 19 Agustus 2007" },
{ nama: "Alya Azizah", ttl: "Kotabaru, 22 Juli 2006" },
{ nama: "Alya Zuhratun Nisa", ttl: "Banjarmasin, 13 Januari 2002" },
{ nama: "Amelia", ttl: "Kotabaru, 06 Februari 1984" },
{ nama: "Ana fitrotul laili", ttl: "Bulitar, 15 Mei 1991" },
{ nama: "Andi Sulman R", ttl: "Teluk Kemuning, 05 Agustus 1998" },
{ nama: "Andi sulman R ", ttl: "Teluk kemuning, 05 Agustus 1998" },
{ nama: "Arbaiyah", ttl: "Hulu Sungai Tengah, 16 Oktober 1997" },
{ nama: "Aulia Rahmah", ttl: "Kotabaru, 14 Januari 2006" },
{ nama: "AWALIYAH", ttl: "Tanjung Selayar, 10 Desember 1999" },
{ nama: "AZIZAH", ttl: "JEDDAH, 10 November 1989" },
{ nama: "AZIZATUNNAFISAH ", ttl: "GALAGAH HULU, 02 Februari 2002" },
{ nama: "Badalia Fahrina Humaira", ttl: "Martapura, 12 Januari 1998" },
{ nama: "Bagir Muhammad", ttl: "Kotabaru, 29 Oktober 2003" },
{ nama: "Baiq Siti Fathimah, S.Pd", ttl: "NTB, 13 Juli 1964" },
{ nama: "Binti Khotimah, S.Pd.I", ttl: "Magetan, 27 Mei 1969" },
{ nama: "Bukhari", ttl: "Sleman, 31 Mei 1978" },
{ nama: "CAHAYA NOOR", ttl: "Tbg.Lahung, 21 Juli 1977" },
{ nama: "Cep mansur jalaludin", ttl: "Ciamis, 25 Oktober 1996" },
{ nama: "Cica Ariska", ttl: "Kotabaru, 13 Juli 1999" },
{ nama: "Damayanti, S.Pd", ttl: "Sembuluan, 28 November 2000" },
{ nama: "Dessy ayu lazela fitri ", ttl: "Bekambit, 12 Januari 2001" },
{ nama: "Desy aulia rahman", ttl: "Kotabaru, 07 Desember 2005" },
{ nama: "Dina Andayani, S.Pd", ttl: "Lembah Raya, 11 Maret 2000" },
{ nama: "Dina Hidayatul Salamah", ttl: "Kotabaru, 08 Juni 2003" },
{ nama: "Dwi Ella Noviarini", ttl: "Kotabaru, 12 November 1992" },
{ nama: "Dwi Ratna Maulida,S.Pd.I.", ttl: "Ponorogo, 27 Januari 1983" },
{ nama: "Dynda Faramidha", ttl: "Kotabaru, 16 Juli 1995" },
{ nama: "Edy tansil", ttl: "Tanjung sungkai, 14 Maret 2000" },
{ nama: "Eka Mustika", ttl: "Tarjun, 21 Juli 1990" },
{ nama: "Ella Mairatnawati", ttl: "Kotabaru, 27 Mei 1981" },
{ nama: "ELVANA NURLAILA", ttl: "KOTABARU, 18 Mei 1990" },
{ nama: "Fadhila Zahra", ttl: "Kotabaru, 13 Juli 2007" },
{ nama: "Fahrul Rozi Maulana ", ttl: "Kotabaru, 30 September 2002" },
{ nama: "fariati", ttl: "amuntai, 02 Oktober 1974" },
{ nama: "Faridah", ttl: "Kotabaru, 10 Desember 1969" },
{ nama: "FATHIR M. KHAIKAL", ttl: "KAB. KOTABARU, 16 Januari 2004" },
{ nama: "Fatimahul Jannah", ttl: "Kotabaru, 02 Desember 1969" },
{ nama: "Hadiatul Adawiyah ", ttl: "Kotabaru, 26 Juni 1979" },
{ nama: "Haerun Nisa", ttl: "Tg. Sungkai, 12 Mei 1985" },
{ nama: "Hairunnisa ", ttl: "Kotabaru, 05 Mei 1995" },
{ nama: "Haryati", ttl: "Kotabaru, 08 Februari 1980" },
{ nama: "Heliani", ttl: "Kotabaru, 25 November 1983" },
{ nama: "Herdiyanti", ttl: "Makassar, 30 September 1998" },
{ nama: "Herlinawati, S.sos", ttl: "Kotabaru, 26 Maret 1974" },
{ nama: "HJ. Gusnawati", ttl: "Soppeng, 01 Juli 1972" },
{ nama: "Hj. Jurmiah", ttl: "KOTABARU, 02 Februari 1963" },
{ nama: "HJ. Sri Wahyuni", ttl: "Samarinda, 28 Januari 1977" },
{ nama: "HJ.SITI AISYAH", ttl: "BANJARMASIN, 26 Oktober 1977" },
{ nama: "Husnur Rabiah", ttl: "Kotabaru, 17 Oktober 1991" },
{ nama: "Ida Isnawati", ttl: "Kotabaru, 22 November 1984" },
{ nama: "Idawati", ttl: "Sekapung, 05 Juli 1973" },
{ nama: "Ilda Hendevi ", ttl: "Kotabaru, 29 Desember 1996" },
{ nama: "IMAS MASHLAHAH, S.Si", ttl: "KRAYAN, 28 Februari 1992" },
{ nama: "Indra Asmara", ttl: "Kotabaru, 24 Februari 1983" },
{ nama: "Indra riawan", ttl: "KOTABARU, 03 Juni 2008" },
{ nama: "Jailani", ttl: "Seratak, 29 Oktober 1996" },
{ nama: "Jamiatul Mardiah, S. Pd", ttl: "Kotabaru, 31 Maret 1990" },
{ nama: "JARIAH", ttl: "Sungai betung, 10 November 1996" },
{ nama: "Jariah", ttl: "Kotabaru, 16 Mei 1984" },
{ nama: "Juhri", ttl: "Manuntung, 08 Agustus 1991" },
{ nama: "Jumantan", ttl: "Kotabaru, 17 Agustus 1971" },
{ nama: "Jumiati", ttl: "Kotabaru, 02 Juni 1989" },
{ nama: "JUNAIDI", ttl: "Kotabaru, 17 Oktober 1985" },
{ nama: "KAMALIAH", ttl: "KOTABARU, 15 Juli 1970" },
{ nama: "KARIEDI", ttl: "TUBAN, 28 Agustus 2000" },
{ nama: "Keyla chusnaya wahid", ttl: "Balikpapan, 12 Maret 2003" },
{ nama: "KHAFIFAH", ttl: "SUMENEP, 12 Februari 1994" },
{ nama: "Khotijah", ttl: "Cilacap, 13 Januari 1974" },
{ nama: "Kiki Mardiana", ttl: "Kotabaru, 26 Februari 1990" },
{ nama: "KOLILAH", ttl: "Kronto, 09 September 2000" },
{ nama: "Kresna Firman Syah", ttl: "Gresik, 23 Maret 2002" },
{ nama: "LAILY HAFIFAH", ttl: "TANJUNG BATU, 09 April 2000" },
{ nama: "LIDIYAWATI", ttl: "PALINGKAU, 10 April 1975" },
{ nama: "LINDA KIPTIAH", ttl: "SUNGAI NIPAH, 10 Agustus 1992" },
{ nama: "Linda Nurhana", ttl: "Kotabaru, 22 Agustus 2006" },
{ nama: "Lolita Achraeny,S.Psi", ttl: "Bulukumba, 04 Maret 1985" },
{ nama: "Lumatul asngadiyah", ttl: "Purbalingga, 19 Maret 1995" },
{ nama: "M. HENDRI", ttl: "TG. MAHKOTA, 03 Januari 2001" },
{ nama: "M. Nashrul Fahmi", ttl: "Kotabaru, 28 Juni 2000" },
{ nama: "M. NUR IMANSYAH", ttl: "TG. MANGKOK, 29 Desember 2000" },
{ nama: "M. Syaifullah", ttl: "Barabai, 28 September 1977" },
{ nama: "M.Hasanul", ttl: "Tajau Landung, 21 Mei 1984" },
{ nama: "Kurnia", ttl: "Banjarmasin, 10 Oktober 1974" },
{ nama: "Mahmudatus sopia", ttl: "Kotabaru, 15 September 1999" },
{ nama: "Mardi", ttl: "Sepit, 31 Desember 1989" },
{ nama: "Mardiana ", ttl: "Kotabaru, 11 Mei 1977" },
{ nama: "Mariana ", ttl: "Banjarmasin, 06 April 1985" },
{ nama: "Mariatul Adawiyah", ttl: "Kotabaru, 31 Desember 2002" },
{ nama: "Mastaniah, A.Ma", ttl: "Kotabaru, 06 Agustus 1979" },
{ nama: "Miftahul Jannah", ttl: "Kotabaru, 28 Februari 1992" },
{ nama: "Mimi saâ€™adah ", ttl: "Sang sang, 15 Oktober 1994" },
{ nama: "Mislawati", ttl: "Marajam, 15 April 2004" },
{ nama: "Muh. Syar'i", ttl: "Bongor, 31 Desember 1990" },
{ nama: "Muhammad", ttl: "BANJARMASIN, 10 Februari 1991" },
{ nama: "Muhammad Hafiz Anshari", ttl: "Kotabaru, 06 Mei 1998" },
{ nama: "Muhammad Ridho", ttl: "Martapura, 01 Februari 1996" },
{ nama: "Muhammad Syaifullah", ttl: "Terangkih, 14 Maret 1991" },
{ nama: "Muhammad Talib", ttl: "Kotabaru, 29 Juli 1982" },
{ nama: "muhammad yordani", ttl: "Pudi seberang, 13 Februari 1983" },
{ nama: "MUKHTAR SOFIYAN", ttl: "BERANGAS, 06 Agustus 1976" },
{ nama: "Mulia", ttl: "Banua lawas, 27 September 2007" },
{ nama: "Mulyati", ttl: "Martapura, 12 September 1975" },
{ nama: "Murliani", ttl: "Kotabaru, 25 Februari 1966" }, 
    {  nama: "M. Rezki Ramadhan", ttl: "Kotabaru, 20 Maret 2003" },
{ nama: "Murtasiah", ttl: "Kotabaru, 28 Agustus 1971" },
{ nama: "Mustika Amani", ttl: "Kotabaru, 12 Mei 1986" },
{ nama: "Nahdatul Ihsan Hidayatullah", ttl: "KOTABARU, 16 Mei 2001" },
{ nama: "NANING LAILATUL AZIZAH", ttl: "NGANJUK, 15 Mei 1991" },
{ nama: "Nida Hasanah, S. Pd", ttl: "Simpang Tiga, 23 Juli 1993" },
{ nama: "Nima", ttl: "Lumajang, 21 Januari 1975" },
{ nama: "Ning Ekasari", ttl: "KEBUMEN, 22 Agustus 1983" },
{ nama: "NIRWAN", ttl: "Kotabaru, 26 Maret 1984" },
{ nama: "Noor Afriani", ttl: "Kotabaru, 03 April 1978" },
{ nama: "Noor Hijrah", ttl: "kotabaru, 17 April 1985" },
{ nama: "Noor Hikmah", ttl: "Tanjung Seloka, 07 Juli 1987" },
{ nama: "Noor jennah", ttl: "Sekapung, 05 Januari 1975" },
{ nama: "Noor Rita Rahmah", ttl: "Kotabaru, 11 Februari 1985" },
{ nama: "Noor salasiah", ttl: "Kotabaru kalsel, 12 Desember 1983" },
{ nama: "NOORHAYATI", ttl: "KOTABARU, 08 April 1979" },
{ nama: "NORHANA", ttl: "KOTABARU, 01 Desember 1979" },
{ nama: "NORLAILA HASANAH ", ttl: "Mandurian, 22 September 2004" },
{ nama: "Nur Hidayah", ttl: "Kotabaru, 12 Maret 1986" },
{ nama: "Nur Janah", ttl: "Kotabaru, 01 Januari 1996" },
{ nama: "nur khalishatul azmi", ttl: "desa langadai, 23 September 2003" },
{ nama: "Nur Shifa Apreyani", ttl: "Kotabaru, 07 April 2002" },
{ nama: "Nurjanah", ttl: "Kotabaru, 18 April 1988" },
{ nama: "NURJANAH", ttl: "Kotabaru, 29 Mei 1980" },
{ nama: "Nurul Aulia Putri", ttl: "Kotabaru, 28 Juli 2001" },
{ nama: "Nurul faridah S.Pd", ttl: "Kotabaru, 20 Juli 1979" },
{ nama: "Nurul Hidayah,S.Pd I", ttl: "Batuah, 11 Februari 1992" },
{ nama: "Putra April Wicaksono", ttl: "Kotabaru, 23 April 1994" },
{ nama: "Putri Amiliyani", ttl: "Jombang, 30 April 1995" },
{ nama: "Putri Nadiya Istiqoma, S.Pd", ttl: "Mojokerto, 12 Juni 1998" },
{ nama: "Rabiatul Adawiyah", ttl: "Gunung Sari, 26 November 1997" },
{ nama: "RABIATUL ADLAWIAH,S.PD.I", ttl: "Teluk kemuning, 27 Maret 1983" },
{ nama: "Rahmat", ttl: "Pesapoang, 15 Agustus 1984" },
{ nama: "Rahmat ", ttl: "Kabupaten Kotabaru, 10 Januari 2003" },
{ nama: "raihana aulia", ttl: "martapura, 12 November 1999" },
{ nama: "RAUDHATUL JANNAH", ttl: "KOTABARU, 04 Juni 1996" },
{ nama: "Refa Margarita", ttl: "Banyuwangi, 20 Maret 2002" },
{ nama: "Renna Ratna Sari, S. Pd. I", ttl: "Magalau hulu, 15 Juni 1993" },
{ nama: "Riana Oktaraharti", ttl: "Kotabaru, 28 Oktober 1993" },
{ nama: "RICO SAPUTRA ", ttl: "kota baru, 13 Desember 2006" },
{ nama: "RINA FITRIANI PRATIWI", ttl: "MARTAPURA, 26 Mei 1986" },
{ nama: "RISDAWATI", ttl: "Tanjung Seloka, 11 November 1997" },
{ nama: "Rizkie Amelia, S.Si", ttl: "Surabaya, 02 April 1986" },
{ nama: "Rosita susilawati", ttl: "kotabaru, 03 Desember 1982" },
{ nama: "Rosita, S.Pd.I", ttl: "Alabio, 16 September 1975" },
{ nama: "Rusdiana", ttl: "Martapura, 16 Agustus 1972" },
{ nama: "RUWANTI FEBRINA", ttl: "MEGASARI, 19 Februari 1991" },
{ nama: "Saddam Husin", ttl: "Kotabaru, 17 November 1991" },
{ nama: "Salasiah", ttl: "Pantai, 04 Desember 1968" },
{ nama: "Saputra Adji Rachman", ttl: "Samarinda, 27 November 1998" },
{ nama: "Sari Jumaini ", ttl: "Palembang, 07 Mei 1982" },
{ nama: "Selpia", ttl: "Kotabaru, 15 April 2000" },
{ nama: "SIRAJUDIN ", ttl: "Baradatu, 05 Februari 1984" },
{ nama: "Siti Aisah", ttl: "Pati, 14 Oktober 1988" },
{ nama: "SITI AISYAH", ttl: "Kulipak, 23 Desember 2003" },
{ nama: "Siti Aisyah ", ttl: "Kotabaru, 07 Agustus 2002" },
{ nama: "SITI HADIJAH", ttl: "PANDAK DAUN, 10 Juni 1992" },
{ nama: "SITI MARIANi", ttl: "Berangas, 23 Maret 1988" },
{ nama: "SITI MUNIRAH", ttl: "KERAMAT, 19 Maret 2001" },
{ nama: "Siti raudah", ttl: "Sungai kupang, 28 Agustus 1998" },
{ nama: "Siti Raudatul Jannah", ttl: "Kotabaru, 10 Desember 1977" },
{ nama: "SITI SANIATI", ttl: "KOTABARU, 20 November 1973" },
{ nama: "Sitti Mislin", ttl: "Pulau Kerasian, 03 Juni 1995" },
{ nama: "Sri Harlina", ttl: "Kotabaru, 25 Oktober 1983" },
{ nama: "SRI MAWARTININGSIH", ttl: "banjarmasin, 16 Oktober 1958" },
{ nama: "SRIYANA", ttl: "Kebumen, 09 Juli 1992" },
{ nama: "SUMIYATI", ttl: "PATI, 09 Juni 1973" },
{ nama: "Sumiyati", ttl: "Pati, 09 Juni 1973" },
{ nama: "Supriadi", ttl: "Tanjung pelayar, 23 April 1993" },
{ nama: "Suprihati", ttl: "Wonosobo, 25 September 1986" },
{ nama: "Suriani", ttl: "Salino, 21 Mei 2000" },
{ nama: "Syaiful Irwandi.S.Pd", ttl: "Kotabaru, 15 Mei 1993" },
{ nama: "Tazkiratun Nufus", ttl: "Kotabaru, 22 Juli 2002" },
{ nama: "Tia Amalia", ttl: "Tarjun, 12 Desember 2003" },
{ nama: "Tiara Dewi Aisyah, S.Pd", ttl: "Kotabaru, 21 Oktober 1999" },
{ nama: "Umi hani", ttl: "Manado, 21 Juni 1967" },
{ nama: "UMMU AZKYA SS. ", ttl: "Banjarmasin, 15 Agustus 2005" },
{ nama: "Wahidah", ttl: "Kotabaru, 06 Januari 1983" },
{ nama: "Wahyaturrahmah", ttl: "Kotabaru, 15 Mei 1987" },
{ nama: "Wilda Al Aluf", ttl: "Sumenep, 11 November 2002" },
{ nama: "Wresni Tiar Rodhiyani", ttl: "Kotabaru, 03 Agustus 1994" }
];

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



