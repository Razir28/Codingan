document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-btn");

  loginButton.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const userData = {
      Admin: {
        Username: "admin",
        Password: "1",
        Nama: "admin",
        "Alamat Email": "",
      },

      RajwaaNazirYatim: {
        Username: "razir",
        Password: "rajwaa28",
        Nama: "Rajwaa Nazir Yatim",
        "Alamat Email": "rajwaa@contoh.com",
      },

      BimoSenoWidaytmanuPutra: {
        Username: "bswp",
        Password: "bswp1",
        Nama: "Bimo Seno Widyatmanu Putra",
        "Alamat Email": "bimoseno@contoh.com",
      },
    };

    let cariUser = null;

    for (const key in userData) {
      if (
        userData[key].Username === username &&
        userData[key].Password === password
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

    const container = document.querySelector(".form-container");
    container.appendChild(table);
  }
});
