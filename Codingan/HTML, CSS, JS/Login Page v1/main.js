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
  }
};

function loginBtn() {
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
  } else {
    console.log("Username dan atau Password salah.");
  }
}
