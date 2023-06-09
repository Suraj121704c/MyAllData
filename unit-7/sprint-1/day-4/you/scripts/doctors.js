let currentPage = 1;
// everything is done

function fetchProduct(specialization, sort , search) {
  let apiUrl = `https://backendchecking.onrender.com/docotrs?_limit=4`;

  if (sort) {
    apiUrl += `&_sort=date&_order=${sort}`;
  }

  if (specialization) {
    apiUrl += `&specialization=${specialization}`;
  }

  if(search){
    apiUrl += `&name=${search}`
  }

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      display(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function display(data) {
  document.querySelector("#cart-container").innerHTML = "";
  data.map((e) => {
    console.log(e);
    let div = document.createElement("div");

    let pic = document.createElement("img");
    pic.setAttribute("src", e.image);

    let h1 = document.createElement("h1");
    h1.innerText = e.name;

    let p1 = document.createElement("p");
    p1.innerText = `Specialization : ${e.specialization}`;

    let p2 = document.createElement("p");
    p2.innerText = `Experience : ${e.experience}`;

    let p3 = document.createElement("p");
    p3.innerText = `Date : ${e.date}`;

    let p4 = document.createElement("p");
    p4.innerText = `Slots : ${e.slots}`;

    let p5 = document.createElement("p");
    p5.innerText = `Fees : ${e.fee}`;

    let btn = document.createElement("button");
    btn.innerText = "Booked Now";

    div.append(pic, h1, p1, p2, p3, p4, p5, btn);

    document.querySelector("#cart-container").append(div);
  });
}

fetchProduct();

const filterData = () => {
  const sort = document.querySelector("#sort").value;
  const specialization = document.querySelector("#specialization").value;
  let search = document.querySelector("#search").value;

  fetchProduct(specialization, sort , search);
};

document.querySelector("#specialization").addEventListener("change", filterData);

document.querySelector("#sort").addEventListener("change", filterData);

document.querySelector("#search").addEventListener("change", filterData);

function pageJi(page) {
  let apiUrl = `https://backendchecking.onrender.com/docotrs?_page=${page}&_limit=4`;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      display(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    pageJi(currentPage);
  }
});

next.addEventListener("click", () => {
  currentPage++;
  pageJi(currentPage);
});
