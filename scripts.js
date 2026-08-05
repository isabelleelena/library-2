const shelf = document.querySelector(".shelf");
const formContainer = document.querySelector('.form-section');
const addButton = document.querySelector(".add-book");
const clearButton = document.querySelector(".clear-bookshelf");

const myLibrary = [];

function Book(title, author, length, id) {
  this.title = title;
  this.author = author;
  this.length = length;
  this.id = id;
}

function addBookToLibrary(title, author, length) {

  let titleInput = title;
  let authorInput = author;
  let lengthInput = length;

  let newBook = new Book(titleInput, authorInput, lengthInput, crypto.randomUUID())

  myLibrary.push(newBook)
}

function addBookCard(array) {

    shelf.replaceChildren()
    
    for (i = 0; i < array.length; i++) {

        let bookCard = document.createElement('div');
        bookCard.id = `${array[i].id}`;
        let titleContent = document.createElement('p');
        titleContent.classList = "title";
        let authorContent = document.createElement('p');
        authorContent.classList = "author";
        let lengthContent = document.createElement('p');
        lengthContent.classList = "length";

        bookCard.appendChild(titleContent);
        bookCard.appendChild(authorContent);
        bookCard.appendChild(lengthContent);
        shelf.appendChild(bookCard);

        let title = array[i].title;
        let author = array[i].author;
        let length = array[i].length;

        titleContent.textContent = `Title: ${title}`; 
        authorContent.textContent = `Author: ${author}`;
        lengthContent.textContent = `Length: ${length}`;
    }
}

function generateForm() {
    let form = document.createElement('form');
    form.action = "example.com/path";
    form.method = "post" 
    formContainer.appendChild(form);

    // Title part of form

    let titleSection = document.createElement('div');
    titleSection.classList = "title-section";
    form.appendChild(titleSection);

    let titleLabel = document.createElement("label");
    titleLabel.htmlFor = "book_title";
    titleLabel.classList = "title-label";
    titleLabel.textContent = "Title:";
    titleSection.appendChild(titleLabel);

    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "book_title";
    titleInput.name = "book_title";
    titleInput.placeholder = "The Hunger Games";
    titleSection.appendChild(titleInput)

    // Author part of form

    let authorSection = document.createElement('div');
    authorSection.classList = "author-section";
    form.appendChild(authorSection);

    let authorLabel = document.createElement("label");
    authorLabel.htmlFor = "author_name";
    authorLabel.classList = "author-label";
    authorLabel.textContent = "Author:";
    authorSection.appendChild(authorLabel);

    let authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.id = "author_name";
    authorInput.name = "author_name";
    authorInput.placeholder = "Suzanne Collins";
    authorSection.appendChild(authorInput)

    // Length part of form

    let lengthSection = document.createElement('div');
    lengthSection.classList = "title-section";
    form.appendChild(lengthSection);

    let lengthLabel = document.createElement("label");
    lengthLabel.htmlFor = "book_length";
    lengthLabel.classList = "length-label";
    lengthLabel.textContent = "Length:";
    lengthSection.appendChild(lengthLabel);

    let lengthInput = document.createElement("input");
    lengthInput.type = "text";
    lengthInput.id = "book_length";
    lengthInput.name = "book_length";
    lengthInput.placeholder = "265 Pages";
    lengthSection.appendChild(lengthInput)

    // Button section

    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.class = "submit-button";
    submitButton.textContent = "Add Book";
    form.appendChild(submitButton);

    function submitButtonClick(event) {
        event.preventDefault();
        let titleInfo = titleInput.value;
        let authorInfo = authorInput.value;
        let lengthInfo = lengthInput.value;
        addBookToLibrary(titleInfo, authorInfo, lengthInfo);
        addBookCard(myLibrary);
        titleInput.value = "";
        authorInput.value = "";
        lengthInput.value = "";

    }

    submitButton.addEventListener('click', submitButtonClick)

}

addButton.addEventListener('click', () => {
    generateForm();
});






addBookToLibrary("I Who Have Never Known Men", "Jacqueline Harpman", "188 pages")
addBookToLibrary("David Copperfield", "Charles Dickens", "1083 pages")
addBookToLibrary("Piranesi", "Susanna Clarke", "265 pages")
addBookToLibrary("A Tale for the Time Being", "Ruth Ozeki", "543 pages")

addBookCard(myLibrary)

// console.log(myLibrary)