// Kumpulan data user
const userData = {
  admin: {
    Username: "admin",
    Password: "admin123",
    Access: "Full",
  },

  global: {
    Username: "global",
    Password: "global123",
    Access: "Limited",
  },

  razir: {
    Username: "razir28",
    Password: "razir280606",
    Access: "Limited",
  },
};

function loginBtn() {
  // Untuk div yang fungsinya menampilkan berhasil atau gagalnya login
  const announceContainer = document.getElementById("announceContainer");

  // Mendapatkan value (nilai) username & password yang user telah input
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("Username:", username);
  console.log("Password:", password);

  let cariUser = null; // Untuk mencari username dan password yang sama dengan yang user masukkan pada tag <input> di dalam userData

  // Menggunakan Forin loop untuk mencarinya
  for (const key in userData) {
    if (
      userData[key].Username == username &&
      userData[key].Password == password
    ) {
      cariUser = userData[key];
      break;
    }
  }

  // Bila sudah ketemu
  if (cariUser !== null) {
    console.log(cariUser);
    announceContainer.textContent = "Login berhasil";
    announceContainer.style.backgroundColor = "green";
  } else {
    console.log("Username dan atau Password salah.");
    announceContainer.textContent = "Username dan atau Password salah";
    announceContainer.style.backgroundColor = "#ff0000";
  }

  announceContainer.style.display = "block"; // State awal

  setTimeout(() => {
    announceContainer.style.opacity = "1"; // Fade in

    // Set timeout untuk fade out dan menyembunyikan pesan setelah 3 detik (3000 ms)
    setTimeout(() => {
      announceContainer.style.opacity = "0"; // Fade out
      setTimeout(() => {
        announceContainer.style.display = "none";
      }, 500); // Menunggu animasi fade out selesai sebelum menyembunyikan pesa
    }, 3000); // Menyembunyikan pesan setelah 3 detik (3000 ms)
  }, 100); // Delay untuk menampilkan pesan selama 100 ms

  // Mencegah agar halaman tidak refresh
  return false;
}
