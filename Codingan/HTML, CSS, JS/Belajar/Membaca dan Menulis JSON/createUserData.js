const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createUserData() {
  rl.question("Masukkan username: ", (username) => {
    rl.question("Masukkan password: ", (password) => {
      rl.question("Masukkan realname: ", (realname) => {
        rl.question("Masukkan email: ", (email) => {
          const userData = {
            username,
            password,
            realname,
            email,
          };

          const userDataPath = "./userData.json";

          fs.readFile(userDataPath, "utf-8", (err, data) => {
            let existingData = [];
            if (!err) {
              existingData = JSON.parse(data);
            }

            existingData.push(userData);

            fs.writeFileSync(
              userDataPath,
              JSON.stringify(existingData, null, 2),
              "utf-8"
            );
            console.log("Data berhasil ditambahkan ke userData.json");

            rl.question(
              "Apakah Anda ingin menambahkan data lagi? (y/n): ",
              (answer) => {
                if (answer.toLowerCase() === "y") {
                  createUserData();
                } else {
                  rl.close();
                }
              }
            );
          });
        });
      });
    });
  });
}

createUserData();
