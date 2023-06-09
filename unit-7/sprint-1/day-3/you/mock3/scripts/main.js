// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `${baseServerURL}/books`;
let mainSection = document.getElementById("data-list-wrapper");

// book
let bookTitleInput = document.getElementById("book-title");
let bookImageInput = document.getElementById("book-image");
let bookCategoryInput = document.getElementById("book-category");
let bookAuthorInput = document.getElementById("book-author");
let bookPriceInput = document.getElementById("book-price");
let bookCreateBtn = document.getElementById("add-book");

// Update book
let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateBookAuthorInput = document.getElementById("update-book-author");
let updateBookCategoryInput = document.getElementById("update-book-category");
let updateBookPriceInput = document.getElementById("update-book-price");
let updateBookBtn = document.getElementById("update-book");

//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookPriceButton = document.getElementById("update-price-book");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterClassic = document.getElementById("filter-Classic");
let filterFantasy = document.getElementById("filter-Fantasy");
let filterMystery = document.getElementById("filter-Mystery");

//Search by title/author

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Books Data
let booksData = [];

// fetching
function fetchBooks() {
  fetch(bookURL)
    .then((res) => res.json())
    .then((data) => {
      display(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

fetchBooks();

// display
function display(data) {
  mainSection.innerHTML = "";

  let cardList = document.createElement("div");
  cardList.setAttribute("class", "card-list");

  mainSection.append(cardList);

  data.forEach((e) => {
    let cardData = document.createElement("div");
    cardData.setAttribute("class", "card");
    cardData.setAttribute("data-id", e.id);

    let cardImg = document.createElement("div");
    cardImg.setAttribute("class", "card-img");

    let img = document.createElement("img");
    img.setAttribute("src", e.image);
    img.setAttribute("alt", e.author);

    cardImg.append(img);

    let bodyDiv = document.createElement("div");
    bodyDiv.setAttribute("class", "card-body");

    let h4 = document.createElement("h4");
    h4.setAttribute("class", "card-title");
    h4.innerText = e.title;

    let p1 = document.createElement("p");
    p1.setAttribute("class", "card-author");
    p1.innerText = e.author;

    let p2 = document.createElement("p");
    p2.setAttribute("class", "card-category");
    p2.innerText = e.category;

    let p3 = document.createElement("p");
    p3.setAttribute("class", "card-price");
    p3.innerText = e.price;

    let a = document.createElement("a");
    a.setAttribute("class", "card-link");
    a.setAttribute("data-id", e.id);
    a.setAttribute("href", "#");
    a.innerText = "Edit";
    a.addEventListener("click", function () {
      updateBookIdInput = e.id;
      updateBookTitleInput = e.title;
      updateBookImageInput = e.image;
      updateBookAuthorInput = e.author;
      updateBookCategoryInput = e.category;
      updateBookPriceInput = e.price;
      updatePriceBookId = e.id;
      updatePriceBookPrice = e.price;
    });

    let btn = document.createElement("button");
    btn.setAttribute("class", "card-button");
    btn.setAttribute("data-id", e.id);
    btn.innerText = "Delete";
    btn.addEventListener("click", function () {
      fetch(`${bookURL}/${e.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          fetchBooks();
          console.log("delete Done...");
        })
        .catch((err) => {
          console.log(err);
        });
    });

    bodyDiv.append(h4, p1, p2, p3, a, btn);

    cardData.append(cardImg, bodyDiv);
    cardList.append(cardData);
  });
}

// adding
bookCreateBtn.addEventListener("click", () => {
  const newBook = {
    author: bookAuthorInput.value,
    category: bookCategoryInput.value,
    image: bookImageInput.value,
    title: bookTitleInput.value,
    price: bookPriceInput.value,
  };
  fetch(bookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  })
    .then((res) => res.json())
    .then((data) => {
      fetchBooks();
    })
    .catch((err) => {
      console.log(err);
    });
});

// updating
updateBookBtn.addEventListener("click", function () {
  const updateBookId = updateBookIdInput.value;
  const updateBookTitle = updateBookTitleInput.value;
  const updateBookImage = updateBookImageInput.value;
  const updateBookAuthor = updateBookAuthorInput.value;
  const updateBookCategory = updateBookCategoryInput.value;
  const updateBookPrice = updateBookPriceInput.value;

  fetch(`${bookURL}/${updateBookId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: updateBookTitle,
      image: updateBookImage,
      author: updateBookAuthor,
      category: updateBookCategory,
      price: updateBookPrice,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      fetchBooks();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

// update Price
updatePriceBookPriceButton.addEventListener("click", function () {
  const updatePriceBookIdno = updatePriceBookId;
  const updatePriceBookPriceA = updatePriceBookPrice.value;

  fetch(`${bookURL}/${updatePriceBookIdno}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ price: updatePriceBookPriceA }),
  })
    .then((res) => res.json())
    .then((res) => {
      fetchBooks();
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
});

sortAtoZBtn.addEventListener("click", function () {
  fetch(`${bookURL}?_sort=price&_order=asc`)
    .then((res) => res.json())
    .then((data) => {
      display(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

sortZtoABtn.addEventListener("click", function () {
  fetch(`${bookURL}?_sort=price&_order=desc`)
    .then((res) => res.json())
    .then((data) => {
      display(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

filterClassic.addEventListener("click", function () {
  fetch(`${bookURL}?category=Classic`)
    .then((res) => res.json())
    .then((data) => {
      display(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

filterFantasy.addEventListener("click", function () {
  fetch(`${bookURL}?category=Fantasy`)
    .then((res) => res.json())
    .then((data) => {
      display(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

filterMystery.addEventListener("click", function () {
  fetch(`${bookURL}?category=Mystery`)
    .then((res) => res.json())
    .then((data) => {
      display(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

searchByButton.addEventListener("click", function () {
  fetch(`${bookURL}?q=${searchByInput.value}`)
    .then((res) => res.json())
    .then((data) => {
      display(data);
    })
    .catch((err) => {
      console.error(err);
    });
});
