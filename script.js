// Gambar cadangan jika link foto belum diisi atau gagal dimuat
const fallbackImage = "https://via.placeholder.com/150/161b22/58a6ff?text=NODE_PHOTO";

// Array Data 36 Murid (Sudah diperbaiki error syntax titik dua mandarin)
const students = [
    { id: 1, name: "JASTINE FILIPUS WIBAWANTO", role: " . ", quote: "motivasi", ig: "name ig", img: "foto1jastine.png" },
    { id: 2, name: "JENIVER FANIA VIVI ERWINDA", role: " . ", quote: "motivasi", ig: "name ig", img: "foto2jeniver.png" },
    { id: 3, name: "JEYSIKA CHELSEA PUTRI SAKINAH", role: " . ", quote: "motivasi", ig: "name ig", img: "foto3jey.png" },
    { id: 4, name: "LULUK SHOFIYAH FITRI NADHIFA SUYUTI", role: " . ", quote: "motivasi", ig: "name ig", img: "foto4luluk.png" },
    { id: 5, name: "M.JOHAN NEWYEAR IFHAM SYAZALI", role: " . ", quote: "motivasi", ig: "name ig", img: "foto5johan.png" },
    { id: 6, name: "MOH ALIFF AR RAFI", role: " . ", quote: "motivasi", ig: "name ig", img: "foto6alif.png" },
    { id: 7, name: "MOHAMMAD NOVAN NUR ROKHIM", role: " . ", quote: "motivasi", ig: "name ig", img: "foto7novan.png" },
    { id: 8, name: "MUHAMMAD AZWAN SYAHRIL EFENDI", role: " ", quote: "motivasi", ig: "name ig", img: "foto8azwan.png" },
    { id: 9, name: "MUHAMMAD NASRODIN", role: " ", quote: "motivasi", ig: "name ig", img: "foto9udin.png" },
    { id: 10, name: "MUHAMMAD NUR FADHIL", role: " . ", quote: "motivasi", ig: "name ig", img: "foto10nur.png" },
    { id: 11, name: "MUKHAMAD AKHSANUL ROZIKIN", role: " . ", quote: "motivasi", ig: "name ig", img: "foto11rozik.png" },
    { id: 12, name: "NADYA ARNETA ANGGRAINI", role: " . ", quote: "motivasi", ig: "name ig", img: "foto12nadya.png" },
    { id: 13, name: "NOVITA DWI ANGGRAINI", role: " . ", quote: "motivasi", ig: "name ig", img: "foto13novita.png" },
    { id: 14, name: "NUMA INTYAS", role: " . ", quote: "motivasi", ig: "name ig", img: "foto14numa.png" },
    { id: 15, name: "NURBAITHI ALYIN LIANA", role: " . ", quote: "motivasi", ig: "name ig", img: "foto15nurbaiti.png" },
    { id: 16, name: "RAFILIO HERMAWAN", role: " . ", quote: "motivasi", ig: "name ig", img: "foto16pio.png" },
    { id: 17, name: "RAHMATTULLAH ROSYID SUDARSONO", role: " . ", quote: "motivasi", ig: "name ig", img: "foto17rosid.png" },
    { id: 18, name: "RAMA NOFIANTO", role: " . ", quote: "motivasi", ig: "name ig", img: "foto18rama.png" },
    { id: 19, name: "REGA FIRMANSYAH", role: " . ", quote: "motivasi", ig: "name ig", img: "foto19rega.jpg" },
    { id: 20, name: "REHAN PRATAMA", role: " . ", quote: "motivasi", ig: "name ig", img: "foto20rehan.png" },
    { id: 21, name: "REVA APRILIA EKA PUTRI", role: " . ", quote: "motivasi", ig: "name ig", img: "" },
    { id: 22, name: "RIKO SILA DWI HABIBI", role: " . ", quote: "motivasi", ig: "name ig", img: "foto22riko.png" },
    { id: 23, name: "SAHRIL FAJAR YULIANTO", role: " . ", quote: "motivasi", ig: "name ig", img: "foto23sahril.png" },
    { id: 24, name: "SALWA LAUKFITASARI", role: " . ", quote: "motivasi", ig: "name ig", img: "" },
    { id: 25, name: "SAMUEL JASON FIRST", role: " . ", quote: "motivasi", ig: "name ig", img: "foto25sam.jpg" },
    { id: 26, name: "SEKAR ARUM RATNA SARI", role: " . ", quote: "motivasi", ig: "name ig", img: "foto26arum.png" },
    { id: 27, name: "SEVIYA NUR AINI", role: " . ", quote: "motivasi", ig: "name ig", img: "foto27sevia.png" },
    { id: 28, name: "SYIFA'U RAHMA WATI", role: " . ", quote: "motivasi", ig: "name ig", img: "foto28sifau.png" },
    { id: 29, name: "THESALONICA NONIK CRISTIHANA", role: " . ", quote: "motivasi", ig: "name ig", img: "foto29tesa.png" },
    { id: 30, name: "WIDYA SARI", role: " . ", quote: "motivasi", ig: "name ig", img: "foto30widya.png" },
    { id: 31, name: "YANA WIDYA KARTIKASARI", role: " . ", quote: "motivasi", ig: "name ig", img: "foto31yana.png" },
    { id: 32, name: "YENI RAHMASARI", role: " . ", quote: "motivasi", ig: "name ig", img: "" },
    { id: 33, name: "YULFIANA WAHYU NINGSIH", role: " . ", quote: "motivasi", ig: "name ig", img: "foto33yul.png" },
    { id: 34, name: "YUNITA PUTRI PUJI PRATAMA", role: " . ", quote: "motivasi", ig: "name ig", img: "foto34yunita.png" },
    { id: 35, name: "ZAHRATUL FITRI SHOLICHAH", role: " . ", quote: "motivasi", ig: "name ig", img: "foto35fitri.png" },
    { id: 36, name: "MAS RENO DWI", role: " . ", quote: "motivasi", ig: "name ig", img: "" }
];

// Fungsi merender kartu murid
function renderNodes() {
    const grid = document.getElementById('nodeGrid');
    grid.innerHTML = '';

    students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'node-card';
        card.setAttribute('data-name', student.name);

        const photoUrl = (student.img && student.img.trim() !== "") ? student.img : fallbackImage;

        // Catatan: Tampilan <p class="role"> dan <p class="quote"> disembunyikan menggunakan style="display:none;" 
        // Jika nanti ingin dimunculkan lagi, cukup hapus style="display:none;" pada bagian tersebut.
        card.innerHTML = `
            <div class="card-header">
                <span class="ip-address">IP: 192.168.1.${student.id}</span>
                <span class="badge">ONLINE</span>
            </div>
            <div class="avatar-frame">
                <img src="${photoUrl}" onerror="this.onerror=null; this.src='${fallbackImage}';" alt="${student.name}" onclick="openModal(this.src)">
            </div>
            <div class="card-body">
                <h3>${student.name}</h3>
                <p class="role" style="display:none;">${student.role}</p>
                <p class="quote" style="display:none;">"${student.quote}"</p>
                <div class="socials">
                    <a href="https://instagram.com/${student.ig.replace('@', '').replace(' ', '')}" target="_blank">${student.ig}</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Fitur Pencarian Real-time (termasuk deteksi kata 'struktur')
function filterNodes() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase().trim();
    const grid = document.getElementById('nodeGrid');
    const structureSection = document.getElementById('structureSection');

    // Jika pencarian mengandung kata kunci "struktur", "structure", atau "kesepakatan"
    if (filter.includes('struktur') || filter.includes('structure') || filter.includes('kesepakatan') || filter.includes('piket')) {
        grid.style.display = 'none';
        structureSection.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        structureSection.style.display = 'none';

        const cards = document.getElementsByClassName('node-card');
        for (let i = 0; i < cards.length; i++) {
            const text = cards[i].innerText.toLowerCase();
            cards[i].style.display = text.includes(filter) ? "" : "none";
        }
    }
}

// Fungsi Buka dan Tutup Foto Fullscreen (Modal)
function openModal(src) {
    const modal = document.getElementById('imageModal');
    const fullImg = document.getElementById('fullImg');
    if (modal && fullImg) {
        modal.style.display = 'flex';
        fullImg.src = src;
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Inisialisasi saat web dimuat
document.addEventListener('DOMContentLoaded', renderNodes);