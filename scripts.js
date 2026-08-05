const shelf = document.querySelector(".shelf");

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
    
    for (i = 0; i < array.length; i++) {

        let bookCard = document.createElement('div');
        bookCard.id = `${array[i].id}`;
        let titleContent = document.createElement('p');
        titleContent.classList = "title";
        let authorContent = document.createElement('p');
        authorContent.classList = document.createElement('p');
        let lengthContent = document.createElement('p');

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






addBookToLibrary("I Who Have Never Known Men", "Jacqueline Harpman", "188 pages")

addBookCard(myLibrary)

// console.log(myLibrary)