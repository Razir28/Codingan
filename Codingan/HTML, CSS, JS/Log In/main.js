document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-btn");

  loginButton.addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const userData = {
      rajwaaNY: {
        username: "razir28",
        password: "admin",
        namaAsli: "Rajwaa NY",
        email: "rajwaa@contoh.com",
      },

      bimoSenoWP: {
        username: "bswp",
        password: "bswp123",
        namaAsli: "Bimo Seno WP",
        email: "bimosen@contoh.com",
      },
    };

    let cariUser = null;

    for (const key in userData) {
      if (
        userData[key].username === username &&
        userData[key].password === password
      ) {
        cariUser = userData[key];
        break;
      }
    }
    if (cariUser !== null) {
      console.log("User data:", cariUser);
      displayUserDataInTable(cariUser);
    } else {
      console.log("Username atau Password salah.");
    }
  });

  function displayUserDataInTable(user) {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    for (const key in user) {
      const row = document.createElement("tr");
      const keyCell = document.createElement("td");
      const valueCell = document.createElement("td");

      keyCell.textContent = key;
      valueCell.textContent = user[key];

      row.appendChild(keyCell);
      row.appendChild(valueCell);
      tbody.appendChild(row);
    }

    table.appendChild(tbody);
    table.classList.add("user-table");

    const container = document.querySelector(".container");
    container.appendChild(table);
  }
});
