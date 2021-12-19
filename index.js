let myLibrary = [
  {
    id: uuidv4(),
    title: "TheHobbit",
    author: "Tolkien",
    pages: 503,
    read: true,
  },
  {
    id: uuidv4(),
    title: "HarryPotter",
    author: "Rowling",
    pages: 403,
    read: false,
  },
  {
    id: uuidv4(),
    title: "Narnia",
    author: "Lewis",
    pages: 303,
    read: true,
  },
  {
    id: uuidv4(),
    title: "Diuna",
    author: "Herbert",
    pages: 400,
    read: false,
  },
  {
    id: uuidv4(),
    title: "TomClancy",
    author: "Clancy",
    pages: 150,
    read: true,
  },
];

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, readOptions) {
  myLibrary.push(
    new Book(uuidv4(), bookTitle, bookAuthor, bookPages, readOptions == "true")
  );
  generateTable();
}

function removeBook(id) {
  myLibrary = myLibrary.filter((book) => book.id != id);
  //bug here
  generateTable();
}

function changeRead(id) {
  let book = myLibrary.filter((book) => book.id == id)[0];
  book.read = !book.read;
  removeBook(id);
  addBookToLibrary(book.title, book.author, book.pages, book.read);
}

let submitBtn = document.querySelector("#submit");
let bookTitleField = document.querySelector("#bookTitle");
let bookAuthorField = document.querySelector("#bookAuthor");
let bookPagesField = document.querySelector("#bookPages");
let readOptionsField = document.querySelector("#bookRead");
let input2 = document.querySelector("#submit");

submitBtn.addEventListener("click", (e) => {
  addBookToLibrary(
    bookTitleField.value,
    bookAuthorField.value,
    bookPagesField.value,
    readOptionsField.value
  );
});

function generateTable() {
  let table = document.querySelector("table");
  if (table) {
    table.remove();
  }
  myLibrary = myLibrary.sort((bookA, bookB) =>
    bookA.title.replace(" ", "").toLowerCase() >
    bookB.title.replace(" ", "").toLowerCase()
      ? 1
      : 0
  );
  let body = document.getElementsByTagName("body")[0];

  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");
  let thead = document.createElement("thead");
  thead.innerHTML =
    "<tr><th>title</th><th>author</th><th>pages</th><th>read</th><th>opts</th></tr>";

  tbl.appendChild(thead);

  for (var i = 0; i < myLibrary.length; i++) {
    let row = document.createElement("tr");
    for (var j = 0; j < 5; j++) {
      let bookId = myLibrary[i].id;
      let cell = document.createElement("td");
      let cellTextTitle = document.createTextNode(myLibrary[i].title);
      let cellTextAuthor = document.createTextNode(myLibrary[i].author);
      let cellTextPages = document.createTextNode(myLibrary[i].pages);
      let cellTextRead = document.createTextNode(myLibrary[i].read);
      if (j === 0) {
        cell.appendChild(cellTextTitle);
        row.appendChild(cell);
      } else if (j === 1) {
        cell.appendChild(cellTextAuthor);
        row.appendChild(cell);
      } else if (j === 2) {
        cell.appendChild(cellTextPages);
        row.appendChild(cell);
      } else if (j === 3) {
        cell.appendChild(cellTextRead);
        row.appendChild(cell);
      } else if (j == 4) {
        let removeBtn = document.createElement("button");
        let changeBtn = document.createElement("button");
        removeBtn.addEventListener("click", () => {
          removeBook(bookId);
        });
        changeBtn.addEventListener("click", () => {
          changeRead(bookId);
        });
        removeBtn.textContent = "x";
        changeBtn.textContent = "change";
        cell.appendChild(removeBtn);
        cell.appendChild(changeBtn);
        row.appendChild(cell);
      }
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}

generateTable();
