const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userDataPath = "./userData.json";

fs.readFile(userDataPath, "utf-8", (err, data) => {
  if (err) {
    console.error("Terjadi kesalahan saat membaca file:", err);
    return;
  }

  const userData = JSON.parse(data);

  console.log("Daftar username yang ada:");
  userData.forEach((user, index) => {
    console.log(`${index + 1}. ${user.username}`);
  });

  rl.question("Masukkan nomor username yang ingin Anda hapus: ", (answer) => {
    const selectedNumber = parseInt(answer) - 1;

    if (
      isNaN(selectedNumber) ||
      selectedNumber < 0 ||
      selectedNumber >= userData.length
    ) {
      console.log("Nomor yang dimasukkan tidak valid.");
      rl.close();
      return;
    }

    const deletedUser = userData.splice(selectedNumber, 1)[0];

    fs.writeFileSync(userDataPath, JSON.stringify(userData, null, 2), "utf-8");
    console.log(
      `Data username "${deletedUser.username}" telah dihapus dari userData.json`
    );
    rl.close();
  });
});
