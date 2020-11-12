//----------------------------------------------------------------------------------
//Part 1,2 - Class definition
//----------------------------------------------------------------------------------
/*
TODO: Create a Book class;
Class Name: Book
Description: The parent class with 3 public instance fields

-------------------------------------------------------------------------------
Constructor 
- Params: title, author, pages
-------------------------------------------------------------------------------
Method: reading()
Description: Function that returns the following string:
"You chose <book_title>, here are are its details: 
Title: <book_title>
Author: <book_author>
Page #: <book_pages>
<BookType Data>: <BookType Data>"

- details() you will implement in the child classes below will be used for 
  the book details.
-------------------------------------------------------------------------------
Method: addToTable()
Description: Function that reads the input form data and adds a book to the 
table below the submit button

- Use querySelector() to obtain a reference to the book table
- Use createElement() in order to create a new table row.
- Populate the table row using innerHTML
- Assign text color based on type of object 
  (Textbook : Red, PictureBook : Blue, CookBook : Green) 
  Resource: https://www.w3schools.com/jsref/prop_html_style.asp
- Append the new row to the table
- Add an event listener to the row that listens for a 'click' event. When  
  clicked will use the return value of the reading() function to display an alert.
- Clear input fields after adding the book
*/

//
// Todo: 
// Book class here!
//


class Book {
  constructor(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;

  }

  reading(){
    let toReturn = `You chose ${this.title}, here are its details: \n` + this.details();

    return toReturn;
  }


  addToTable(){
    let table = document.querySelector("table")

    let newRow = document.createElement("tr");

    newRow.innerHTML = `<td>${this.title}</td> <td> ${this.author}</td> <td> ${this.pages} </td>`;

    if (this.constructor.name === "TextBook"){
    newRow.style.color = "red";
    }
    else if (this.constructor.name === "PictureBook"){
      newRow.style.color = "blue";
    }
    else {
      newRow.style.color = "green";
    }
    
    table.appendChild(newRow);

    newRow.addEventListener('click', () => {
      let result = this.reading();
      alert(result);

    });

    clearInputs();


  }

}



/*
TODO: Create a TextBook class that inherits from the Book class.
Class Name: TextBook
Description: Inherits from Book, should have a function called details().
Constructor Params: title, author, pages, subject;
  - title, author, and pages are should be initialized by calling super.

Method: details() returns a string:
Title: <book_title>
Author: <book_author>
Page #: <book_pages>
Subject: <book_subject>
*/

//
// Todo: 
// TextBook class here!
//


class TextBook extends Book{
  constructor(title, author, pages, subject){
    super(title, author, pages);
    this.subject = subject;
  }

  details(){

    let toReturn = `Title: ${this.title}\n` +
     `Author: ${this.author}\n` +
      `Page #: ${this.pages}\n` +
       `Subject: ${this.subject}`;

    return toReturn;


  }


}


/*
TODO: Create a PictureBook class that inherits from the Book class.
Class Name: PictureBook
Description: Inherits from Book, should have a function called details().
Constructor Params: title, author, pages, illustrator;
  - title, author, and pages are should be initialized by calling super.

Method: details() returns a string: 
Title: <book_title>
Author: <book_author>
Page #: <book_pages>
Illustrator: <book_illustrator>
*/

//
// Todo: 
// PictureBook class here!
//

class PictureBook extends Book{

  constructor(title, author, pages, illustrator){
    super(title, author, pages);
    this.illustrator = illustrator;
  }

  details(){

    let toReturn = `Title: ${this.title}\n` +
    `Author: ${this.author}\n` +
     `Page #: ${this.pages}\n` +
      `Illustrator: ${this.illustrator}`;

   return toReturn;


  }


}


/*
TODO: Create a CookBook class that inherits from the Book class.
Class Name: CookBook
Description: Inherits from Book, should have a function called details().
Constructor Params: title, author, pages, cuisine;
  - title, author, and pages are should be initialized by calling super.

Method: details() returns a string: 
Title: <book_title>
Author: <book_author>
Page #: <book_pages>
Cuisine: <book_cuisine>
*/

//
// Todo: 
// CookBook class here!
//

class CookBook extends Book{
  constructor(title, author, pages, cuisine){
    super(title, author, pages);
    this.cuisine = cuisine;
  }


  details(){
    let toReturn = `Title: ${this.title}\n` +
    `Author: ${this.author}\n` +
     `Page #: ${this.pages}\n` +
      `Cuisine: ${this.cuisine}`;

   return toReturn;


    
  }


}

//----------------------------------------------------------------------------------
//Part 3 - Putting it all together
//----------------------------------------------------------------------------------

// 
// Todo: 
// Declare variables of which values are the references to the HTML elements with 
// the id 'title', 'author', 'pages', 'bookType', and 'data'. 
// - use querySelector 

let titleElement = document.querySelector("#title");
let authorElement = document.querySelector("#author");
let pagesElement = document.querySelector("#pages");
let typeElement = document.querySelector("#bookType");
let dataElement = document.querySelector("#data");

// 
// Todo: 
// - save form data into variables
// - validate inputs
// - create an object based on the book type
// - add the book to the table by calling addToTable of the created object
//
function addBook() {
  
  
  let title = titleElement.value.trim();
  let author = authorElement.value.trim();
  let pages = pagesElement.value.trim();
  let type = typeElement.value;
  let data = dataElement.value.trim();


  let valid = validate(title, author, pages, data);

  if (valid === false){
    alert("Please fill in all fields properly. Make sure pages field is a number, and that all fields are filled.");
  }
  else{
    if (type === "TextBook"){
      let newBook = new TextBook(title, author, pages, data);
      newBook.addToTable();
    }

    else if (type === "PictureBook"){
      let newBook = new PictureBook(title, author, pages, data);
      newBook.addToTable();
    }
    else {
      let newBook = new CookBook(title, author, pages, data);
      newBook.addToTable();
    }


  }


}


function validate(title, author, pages, data){
let valid = true;

if (title === "" || author === "" || data === ""){//check if text fields are filled
  valid = false;
}


if (isNaN(pages)){
  valid = false;
}





return valid;

}





//
// Todo: 
// Clear input form elements
// Note that the default book type is "TextBook" and the default dataLabel is "Subject"
//
function clearInputs() {

  document.getElementById("book-form").reset();
  let toChange = document.getElementById("dataLabel");
  toChange.textContent = "Subject";



}






//
// Todo: 
// Register an event handler function (to the bookType) that switches the names of
// the last input's label based on book type chosen.
//


  
  typeElement.addEventListener('change', () => {
    let toChange = document.getElementById("dataLabel");
    //console.log(toChange.textContent);
    let type = typeElement.value;
    if (type === "TextBook"){
      toChange.textContent = "Subject";

    }
    else if (type === "PictureBook"){
      toChange.textContent = "Illustrator";
    }
    else if (type === "CookBook"){
      toChange.textContent = "Cuisine";
    }



  })








