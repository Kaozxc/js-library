let myLibrary = [
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
  let userInputTitle = prompt("Please provide your favourite book title.");
  let userInputAuthor = prompt("Please provide your favourite book Author.");
  let userInputPages = prompt(
    "Please provide your favourite book number of pages."
  );
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

function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < myLibrary.length; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 4; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode(
        myLibrary[i].title +
          "," +
          myLibrary[i].author +
          "," +
          myLibrary[i].pages +
          "," +
          myLibrary[i].read
      );
      cell.appendChild(cellText);
      row.appendChild(cell);
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

// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
