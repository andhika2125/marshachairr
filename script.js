// ================= DATA =================
let menuData = JSON.parse(localStorage.getItem("menu")) || [];
let user = localStorage.getItem("user");

// ================= LOGIN =================
function login() {
    const username = document.getElementById("username").value;
    if (!username) { alert("Masukkan nama!"); return; }
    localStorage.setItem("user", username);
    location.reload();
}

// ================= LOGOUT =================
function logout() {
    localStorage.removeItem("user");
    location.reload();
}

// ================= TAMBAH MENU =================
function addMenu() {
    const menu = document.getElementById("menu").value;
    const harga = document.getElementById("harga").value;
    const gambar = document.getElementById("gambar").value;

    if (!menu || !harga || !gambar) {
        alert("Lengkapi semua data!");
        return;
    }

    menuData.push({ menu, harga, gambar });
    localStorage.setItem("menu", JSON.stringify(menuData));
    renderTable();

    // Reset form
    document.getElementById("menu").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("gambar").value = "";
}

// ================= TAMPILKAN TABEL =================
function renderTable() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    menuData.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.menu}</td>
                <td>${item.harga}</td>
                <td><img src="${item.gambar}" alt="${item.menu}" width="80"></td>
            </tr>
        `;
    });
}

// ================= CEK LOGIN =================
if (user) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("menuBox").classList.remove("hidden");
    document.getElementById("welcome").innerText = "Login sebagai: " + user;
}

// ================= LOAD DATA =================
renderTable();

// ================= EFEK KLIK LUCU =================
document.addEventListener("click", function(e){
    const sparkle = document.createElement("div");
    sparkle.innerHTML = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    sparkle.style.fontSize = "18px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.animation = "fadeOut 0.8s ease-out";
    document.body.appendChild(sparkle);
    setTimeout(()=> sparkle.remove(), 800);
});
