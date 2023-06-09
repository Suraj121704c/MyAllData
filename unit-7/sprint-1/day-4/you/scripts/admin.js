document
  .getElementById("doctor-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const specialization = document.getElementById("specialization").value;
    const experience = document.getElementById("experience").value;
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const slots = document.getElementById("slots").value;
    const fee = document.getElementById("fee").value;

    const newDoctor = {
      name,
      image,
      specialization,
      experience,
      location,
      date,
      slots,
      fee,
    };

    fetch(`https://backendchecking.onrender.com/docotrs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDoctor),
    })
      .then((res) => res.json())
      .then((res) => {
        fetchDoctor();
        alert("Doctor added Successfully...");
      })
      .catch((err) => {
        console.log(err);
      });
  });

function fetchDoctor() {
  fetch("https://backendchecking.onrender.com/docotrs")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      display(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function display(data) {
  document.querySelector("tbody").innerHTML = "";
  data.forEach((e) => {
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = e.id;

    let td2 = document.createElement("td");
    td2.innerText = e.name;

    let td3 = document.createElement("td");
    td3.innerText = e.specialization;

    let td4 = document.createElement("td");
    td4.innerText = e.experience;

    let td5 = document.createElement("td");
    td5.innerText = e.location;

    let td6 = document.createElement("td");
    td6.innerText = e.slots;

    let td7 = document.createElement("td");
    td7.innerText = "Edit";

    let td8 = document.createElement("td");
    td8.innerText = "Delete";
    td8.addEventListener("click", function () {
      delFun(e);
    });

    let td9 = document.createElement("td");
    td9.innerText = "Appointments";

    row.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
    document.querySelector("tbody").append(row);
  });
}

fetchDoctor();

function delFun(e) {
  fetch(`https://backendchecking.onrender.com/docotrs/${e.id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      alert("Deleted...");
      fetchDoctor();
    })
    .catch((err) => {
      console.log(err);
    });
}
