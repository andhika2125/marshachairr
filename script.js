function addMenu() {
    const menu = document.getElementById("menu").value;
    const harga = document.getElementById("harga").value;
    const fileInput = document.getElementById("gambar");
    const file = fileInput.files[0];

    if (!menu || !harga || !file) {
        alert("Lengkapi semua data!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        // Ambil data URL gambar
        const gambarData = e.target.result;
        menuData.push({ menu, harga, gambar: gambarData });
        localStorage.setItem("menu", JSON.stringify(menuData));
        renderTable();

        // Reset form
        document.getElementById("menu").value = "";
        document.getElementById("harga").value = "";
        fileInput.value = "";
    }
    reader.readAsDataURL(file);
}
