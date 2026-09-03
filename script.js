// Gambar cadangan jika link ImgBB belum diisi atau gagal dimuat
const fallbackImage = "https://via.placeholder.com/150/161b22/58a6ff?text=NODE_PHOTO";

// Array Data 36 Murid
const students = [
    { id: 1, name: "Ahmad Rizky", role: "Network Administrator", quote: "Ping 8.8.8.8 succeed, high school completed.", ig: "@ahmad_rizky", img: "https://i.ibb.co/sample1/foto1.jpg" },
    { id: 2, name: "Siti Aminah", role: "Cyber Security Eng.", quote: "No system is safe, but our memories are encrypted.", ig: "@siti_tkj", img: "" },
    { id: 3, name: "Budi Santoso", role: "Cloud Architect", quote: "Deploying dreams to the cloud.", ig: "@budi_santoso", img: "" },
    { id: 4, name: "Dewi Lestari", role: "System Analyst", quote: "Analyzing the logic of our friendship.", ig: "@dewilestari", img: "" },
    { id: 5, name: "Eko Prasetyo", role: "Hardware Specialist", quote: "Fixed the hardware, broke the limitation.", ig: "@eko_tkj", img: "" },
    { id: 6, name: "Fajar Nugraha", role: "DevOps Engineer", quote: "Continuous integration of memories.", ig: "@fajarnugraha", img: "" },
    { id: 7, name: "Gita Gutawa", role: "IoT Specialist", quote: "Connecting people, connecting future.", ig: "@gitagutawa", img: "" },
    { id: 8, name: "Hadi Syahputra", role: "Routing & Switching", quote: "Finding the shortest path to success.", ig: "@hadi_sp", img: "" },
    { id: 9, name: "Indah Permata", role: "UI/UX Specialist", quote: "Designing a beautiful connection.", ig: "@indah_p", img: "" },
    { id: 10, name: "Joko Widodo", role: "Database Admin", quote: "SELECT * FROM memories WHERE status = 'unforgettable';", ig: "@jokowd", img: "" },
    { id: 11, name: "Kiki Amalia", role: "Security Auditor", quote: "Checking for vulnerabilities, finding none in us.", ig: "@kiki_amalia", img: "" },
    { id: 12, name: "Lukman Hakim", role: "Server Admin", quote: "Uptime 100% throughout high school.", ig: "@lukman_h", img: "" },
    { id: 13, name: "Maya Putri", role: "Fiber Optic Tech", quote: "Fast connection, strong relationship.", ig: "@maya_putri", img: "" },
    { id: 14, name: "Naufal Hadi", role: "Fullstack Dev", quote: "Frontend smiles, backend hard work.", ig: "@naufal_h", img: "" },
    { id: 15, name: "Olivia Zalianty", role: "Network Engineer", quote: "Configured to succeed.", ig: "@olivia_z", img: "" },
    { id: 16, name: "Pratama Arhan", role: "Wireless Specialist", quote: "No wires needed to keep us connected.", ig: "@pratama_a", img: "" },
    { id: 17, name: "RAHMATTULAH ROSYID SUDARSONO", role: "Network Engineer", quote: "Jangan pernah menyerah sebelum mencoba.", ig: "@r", img: "" },
    { id: 18, name: "Rian D'Masiv", role: "Infrastructure Lead", quote: "Building a strong foundation.", ig: "@rian_dm", img: "" },
    { id: 19, name: "Salsa Bila", role: "Data Scientist", quote: "Data shows 100% chance of future success.", ig: "@salsa_b", img: "" },
    { id: 20, name: "Taufik Hidayat", role: "MikroTik Specialist", quote: "Bandwidth limit: Unlimited possibilities.", ig: "@taufik_h", img: "" },
    { id: 21, name: "Utami Nur", role: "Cisco Certified", quote: "Switching to the next chapter.", ig: "@utami_n", img: "" },
    { id: 22, name: "Vina Panduwinata", role: "System Administrator", quote: "Rebooting life for new adventures.", ig: "@vina_p", img: "" },
    { id: 23, name: "SAHRIL FAJAR YANTO", role: "Linux Administrator", quote: "sudo make a better future.", ig: "@wahyu_s", img: "foto2sahril.jpg" },
    { id: 24, name: "Xaverius Jun", role: "Ethical Hacker", quote: "Bypassing barriers, securing dreams.", ig: "@xaverius_j", img: "" },
    { id: 25, name: "Yulia Rahman", role: "Telecom Engineer", quote: "Signal strong, future bright.", ig: "@yulia_r", img: "" },
    { id: 26, name: "SAMUEL JASON F", role: "CISCO Certified", quote: "JADI MASINIS.", ig: "@spt_asterona052", img: "foto1sam.jpg" },
    { id: 27, name: "Aria Putra", role: "Firewall Expert", quote: "Blocking negativity, allowing success.", ig: "@aria_p", img: "" },
    { id: 28, name: "Bella Safira", role: "Cloud Security", quote: "Protected memories, bright days ahead.", ig: "@bella_s", img: "" },
    { id: 29, name: "Chandra Wijaya", role: "Hardware Technician", quote: "Solder the future, fix the bugs.", ig: "@chandra_w", img: "" },
    { id: 30, name: "Dina Mariana", role: "Virtualization Eng.", quote: "Creating virtual machines, real success.", ig: "@dina_m", img: "" },
    { id: 31, name: "Erick Thohir", role: "IT Project Manager", quote: "Managing goals, achieving dreams.", ig: "@erick_t", img: "" },
    { id: 32, name: "Fitri Carlina", role: "Network Security", quote: "Secured for life.", ig: "@fitri_c", img: "" },
    { id: 33, name: "Gilang Dirga", role: "Site Reliability Eng.", quote: "Zero downtime, maximum effort.", ig: "@gilang_d", img: "" },
    { id: 34, name: "Hesty Purwadinata", role: "Kubernetes Admin", quote: "Containerizing sweet memories.", ig: "@hesty_p", img: "" },
    { id: 35, name: "Irfan Hakim", role: "IT Consultant", quote: "Solving problems, creating paths.", ig: "@irfan_h", img: "" },
    { id: 36, name: "Zahra Salsabila", role: "Network Architect", quote: "Architecting the map to tomorrow.", ig: "@zahra_s", img: "" }
];

// Fungsi merender kartu murid
function renderNodes() {
    const grid = document.getElementById('nodeGrid');
    grid.innerHTML = '';

    students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'node-card';
        card.setAttribute('data-name', student.name);

        // Validasi tautan gambar (menggunakan gambar fallback jika kosong)
        const photoUrl = (student.img && student.img.trim() !== "") ? student.img : fallbackImage;

        card.innerHTML = `
            <div class="card-header">
                <span class="ip-address">IP: 192.168.1.${student.id}</span>
                <span class="badge">ONLINE</span>
            </div>
            <div class="avatar-frame">
                <img src="${photoUrl}" onerror="this.onerror=null; this.src='${fallbackImage}';" alt="${student.name}">
            </div>
            <div class="card-body">
                <h3>${student.name}</h3>
                <p class="role">${student.role}</p>
                <p class="quote">"${student.quote}"</p>
                <div class="socials">
                    <a href="https://instagram.com/${student.ig.replace('@', '')}" target="_blank">${student.ig}</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Fitur Pencarian Real-time Nama/IP/Role
function filterNodes() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const cards = document.getElementsByClassName('node-card');

    for (let i = 0; i < cards.length; i++) {
        const text = cards[i].innerText.toLowerCase();
        cards[i].style.display = text.includes(filter) ? "" : "none";
    }
}

// Inisialisasi saat web dimuat
document.addEventListener('DOMContentLoaded', renderNodes);