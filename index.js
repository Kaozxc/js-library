// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
let myLibrary = [
  {
    title: "Title",
    author: "Author",
    pages: "Pages",
    read: "Read",
  },
  {
    title: "The Hobbit",
    author: "Tolkien",
    pages: 503,
    read: true,
  },
  {
    title: "Harry Potter",
    author: "Rowling",
    pages: 403,
    read: false,
  },
  {
    title: "Narnia",
    author: "Lewis",
    pages: 303,
    read: true,
  },
  {
    title: "Diuna",
    author: "Herbert",
    pages: 400,
    read: false,
  },
  {
    title: "Tom Clancy",
    author: "Clancy",
    pages: 150,
    read: true,
  },
];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary() {
  let table = document.querySelector("table");
  table.innerHTML = "";

  let userInputTitle = prompt("Please provide your favourite book title.");
  let userInputAuthor = prompt("Please provide Author.");
  let userInputPages = prompt("Please provide number of pages.");
  let userInputRead = prompt("Please tell if you read the book.");
  let newBook = {
    title: userInputTitle,
    author: userInputAuthor,
    pages: userInputPages,
    read: userInputRead,
  };

  myLibrary.push(newBook);
  console.log(myLibrary);
  generate_table();
}

function displayBook() {
  myLibrary.forEach((item) => console.log(item));
}

function removeBook() {
  myLibrary.pop();
  generate_table();
}

let removeBtn = document.querySelector("#remove");
let removeBtn2 = document.querySelector("#remove2");
let removeBtn3 = document.querySelector("#remove3");
let removeBtn4 = document.querySelector("#remove4");
let removeBtn5 = document.querySelector("#remove5");
let removeBtn6 = document.querySelector("#remove6");

removeBtn.addEventListener("click", () => {
  myLibrary.pop();
  generate_table();
});
removeBtn2.addEventListener("click", () => {
  myLibrary.pop();
  generate_table();
});
removeBtn3.addEventListener("click", () => {
  myLibrary.pop();
  generate_table();
});
removeBtn4.addEventListener("click", () => {
  myLibrary.pop();
  generate_table();
});
removeBtn5.addEventListener("click", () => {
  myLibrary.pop();
  generate_table();
});
removeBtn6.addEventListener("click", () => {
  myLibrary.pop();
  generate_table();
});

function generate_table() {
  // get the reference for the body
  let body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < myLibrary.length; i++) {
    // creates a table row
    let row = document.createElement("tr");
    for (var j = 0; j < 5; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      let cell = document.createElement("td");
      let cellTextTitle = document.createTextNode(myLibrary[i].title);
      let cellTextAuthor = document.createTextNode(myLibrary[i].author);
      let cellTextPages = document.createTextNode(myLibrary[i].pages);
      let cellTextRead = document.createTextNode(myLibrary[i].read);
      let cellText = document.createTextNode(
        myLibrary[i].title +
          "," +
          myLibrary[i].author +
          "," +
          myLibrary[i].pages +
          "," +
          myLibrary[i].read
      );
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
      }
      if (i === 1) {
        row.appendChild(removeBtn);
      } else if (i === 2) {
        row.appendChild(removeBtn2);
      } else if (i === 3) {
        row.appendChild(removeBtn3);
      } else if (i === 4) {
        row.appendChild(removeBtn4);
      } else if (i === 5) {
        row.appendChild(removeBtn5);
      } else if (i === 0) {
      } else {
        row.appendChild(removeBtn6);
      }
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

generate_table();

// if (i === 0) {
//   row.appendChild(removeBtn);
// } else if (i === 1) {
//   row.appendChild(removeBtn);
// } else if (i === 2) {
//   row.appendChild(removeBtn);
// } else if (i === 3) {
//   row.appendChild(removeBtn);
// } else {
//   row.appendChild(removeBtn);
// }
