const fs = require("fs");

const userDataPath = "./userData.json";

fs.readFile(userDataPath, "utf-8", (err, data) => {
  if (err) {
    console.error("Terjadi kesalahan saat membaca file:", err);
    return;
  }

  const userData = JSON.parse(data);
  console.log("Isi userData.json:");

  for (const user of userData) {
    console.log(`Username: ${user.username}`);
    console.log(`Password: ${user.password}`);
    console.log(`Realname: ${user.realname}`);
    console.log(`Email: ${user.email}`);
    console.log("---");
  }
});
