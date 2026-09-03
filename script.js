// Gambar cadangan jika link foto belum diisi atau gagal dimuat
const fallbackImage = "https://via.placeholder.com/150/161b22/58a6ff?text=NODE_PHOTO";

// Array Data 36 Murid (Sudah disesuaikan dengan daftar nama terbaru)
const students = [
    { id: 1, name: "JASTINE FILIPUS WIBAWANTO", role: "role", quote: "motivasi", ig: "name ig", img: "https://i.ibb.co/sample1/foto1.jpg" },
    { id: 2, name: "JENIVER FANIA VIVI ERWINDA", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 3, name: "JEYSIKA CHELSEA PUTRI SAKINAH", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 4, name: "LULUK SHOFIYAH FITRI NADHIFA SUYUTI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 5, name: "M.JOHAN NEWYEAR IFHAM SYAZALI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 6, name: "MOH ALIFF AR RAFI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 7, name: "MOHAMMAD NOVAN NUR ROKHIM", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 8, name: "MUHAMMAD AZWAN SYAHRIL EFENDI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 9, name: "MUHAMMAD NASRODIN", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 10, name: "MUHAMMAD NUR FADHIL", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 11, name: "MUKHAMAD AKHSANUL ROZIKIN", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 12, name: "NADYA ARNETA ANGGRAINI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 13, name: "NOVITA DWI ANGGRAINI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 14, name: "NUMA INTYAS", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 15, name: "NURBAITHI ALYIN LIANA", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 16, name: "RAFILIO HERMAWAN", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 17, name: "RAHMATTULLAH ROSYID SUDARSONO", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 18, name: "RAMA NOFIANTO", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 19, name: "REGA FIRMANSYAH", role: "role", quote: "motivasi", ig: "name ig", img: "foto19rega.jpg" },
    { id: 20, name: "REHAN PRATAMA", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 21, name: "REVA APRILIA EKA PUTRI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 22, name: "RIKO SILA DWI HABIBI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 23, name: "SAHRIL FAJAR YULIANTO", role: "role", quote: "motivasi", ig: "name ig", img: "foto23sahril.jpg" },
    { id: 24, name: "SALWA LAUKFITASARI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 25, name: "SAMUEL JASON FIRST", role: "role", quote: "motivasi", ig: "name ig", img: "foto25sam.jpg" },
    { id: 26, name: "SEKAR ARUM RATNA SARI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 27, name: "SEVIYA NUR AINI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 28, name: "SYIFA'U RAHMA WATI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 29, name: "THESALONICA NONIK CRISTIHANA", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 30, name: "WIDYA SARI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 31, name: "YANA WIDYA KARTIKASARI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 32, name: "YENI RAHMASARI", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 33, name: "YULFIANA WAHYU NINGSIH", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 34, name: "YUNITA PUTRI PUJI PRATAMA", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 35, name: "ZAHRATUL FITRI SHOLICHAH", role: "role", quote: "motivasi", ig: "name ig", img: "" },
    { id: 36, name: "MAS RENO DWI", role: "role", quote: "motivasi", ig: "name ig", img: "" }
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
                <p class="role">${student.role}</p>
                <p class="quote">"${student.quote}"</p>
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