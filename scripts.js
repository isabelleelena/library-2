const shelf = document.querySelector(".shelf");
const formContainer = document.querySelector('.form-section');
const addButton = document.querySelector(".add-book");
const clearButton = document.querySelector(".clear-bookshelf");
const interactionPanel = document.querySelector(".interaction-panel");
interactionPanel.dataset.status = "inactive";

const myLibrary = [];

function Book(title, author, length, comment, id) {
  this.title = title;
  this.author = author;
  this.length = length;
  this.comment = comment;
  this.id = id;
}

function addBookToLibrary(title, author, length, comment) {

  let titleInput = title;
  let authorInput = author;
  let lengthInput = length;
  let commentInput = comment;

  let newBook = new Book(titleInput, authorInput, lengthInput, comment, crypto.randomUUID())

  myLibrary.push(newBook)
}

function addBookCard(array) {

    shelf.replaceChildren()
    
    for (i = 0; i < array.length; i++) {

        let bookCard = document.createElement('div');
        bookCard.classList = "book-card";
        bookCard.id = `${array[i].id}`;
        bookCard.dataset.id = bookCard.id

        let bookCardContent = document.createElement('div');
        bookCardContent.classList = "book-information";
        let bookCardButtons = document.createElement('div');
        bookCardButtons.classList = "book-buttons";

        let titleContent = document.createElement('p');
        titleContent.classList = "title";
        let authorContent = document.createElement('p');
        authorContent.classList = "author";
        let lengthContent = document.createElement('p');
        lengthContent.classList = "length";
        let commentContent = document.createElement('p');
        commentContent.classList = "comment";
        let deleteBook = document.createElement('button');
        deleteBook.classList = "delete-button";
        deleteBook.textContent = "Remove book"; 
        let readButton = document.createElement('button');
        readButton.classList = "read";
        readButton.textContent = "Unread";

        bookCardContent.appendChild(titleContent);
        bookCardContent.appendChild(authorContent);
        bookCardContent.appendChild(lengthContent);
        bookCardContent.appendChild(commentContent);
        bookCardButtons.appendChild(readButton);
        bookCardButtons.appendChild(deleteBook);

        bookCard.appendChild(bookCardContent);
        bookCard.appendChild(bookCardButtons);

        shelf.appendChild(bookCard);

        let title = array[i].title;
        let author = array[i].author;
        let length = array[i].length;
        let comment = array[i].comment;

        titleContent.textContent = `${title}`; 
        authorContent.textContent = `${author}`;
        lengthContent.textContent = `${length} pages`;
        commentContent.textContent = `Thoughts: ${comment}`;

        deleteBook.addEventListener('click', () => {
            document.querySelector(`[data-id="${bookCard.id}"]`).remove();
        });

        readButton.addEventListener('click', () => {
            if (readButton.textContent === "Unread") {
                readButton.textContent = "";
                readButton.textContent = "Read";
                readButton.style.backgroundColor = "purple";
                readButton.style.color = "white";
            }

            else {
                readButton.textContent = "";
                readButton.textContent = "Unread";
                readButton.style.backgroundColor = "white";
                readButton.style.color = "purple";
            }
        })
    }
}

function generateForm() {
    let form = document.createElement('form');
    form.action = "example.com/path";
    form.method = "post" 
    formContainer.appendChild(form);
    interactionPanel.dataset.status = "active"

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
    titleInput.required = true;
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
    authorInput.required = true;
    authorSection.appendChild(authorInput)

    // Length part of form

    let lengthSection = document.createElement('div');
    lengthSection.classList = "length-section";
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
    lengthInput.placeholder = "265";
    lengthInput.required = true;
    lengthSection.appendChild(lengthInput)

    // Comment part of form

    let commentSection = document.createElement('div');
    commentSection.classList = "comment-section";
    form.appendChild(commentSection);

    let commentLabel = document.createElement("label");
    commentLabel.htmlFor = "user_thoughts";
    commentLabel.classList = "comment-label";
    commentLabel.textContent = "Thoughts:";
    commentSection.appendChild(commentLabel);

    let commentInput = document.createElement("textarea");
    commentInput.id = "user_thoughts";
    commentInput.name = "user_thoughts";
    commentInput.placeholder = `I loved The Hunger Games because... (max 100 char)`;
    commentInput.rows = "5";
    commentInput.cols = "50"
    commentInput.maxLength = "100";
    commentInput.required = true;
    commentSection.appendChild(commentInput);

    // Button section

    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.class = "submit-button";
    submitButton.textContent = "Add Book";
    form.appendChild(submitButton);

    function submitButtonClick(event) {

        event.preventDefault();

        // We need to check both if the error message has fired and if the form is complete
        // If the error message has fired and the form is complete, submit data
        // if the error message has fire and the form is incomplete, delete previous error message and make a new one
        // if the error message has not fired and the form is incomplete, fire error message
        // if the error message has not fired and the form is complete, submit data 

        if (titleInput.value === "" || authorInput.value === "" || lengthInput.value === "" || commentInput.value === "") {

            let errorDiv = document.createElement("div");
            errorDiv.classList = "error-div";

            if (document.querySelector(".error-div") === null) {

                interactionPanel.appendChild(errorDiv);
                interactionPanel.style.gridTemplateRows = "250px 40px 40px";
                let errorMessage = document.createElement('p');
                errorMessage.textContent = "Please fill in all text fields before submitting!";
                errorMessage.classList = "error-message";
                errorDiv.appendChild(errorMessage);

            }

            else {
                let errorMessage = document.querySelector(".error-message");
                errorMessage.textContent = "PRETTY Please fill in all text fields before submitting!!!";
            }

        }

        else {
            let titleInfo = titleInput.value;
            let authorInfo = authorInput.value;
            let lengthInfo = lengthInput.value;
            let commentInfo = commentInput.value
            addBookToLibrary(titleInfo, authorInfo, lengthInfo, commentInfo);
            addBookCard(myLibrary);
            titleInput.value = "";
            authorInput.value = "";
            lengthInput.value = "";
            commentInput.value = "";
        }

    }

    submitButton.addEventListener('click', submitButtonClick)

}

addButton.addEventListener('click', () => {
    if (interactionPanel.dataset.status === "inactive") {
        generateForm()
    }
});

clearButton.addEventListener('click', () => {
    shelf.replaceChildren();
})






 addBookToLibrary("I Who Have Never Known Men", "Jacqueline Harpman", "188 pages", "Hated it")
 addBookToLibrary("David Copperfield", "Charles Dickens", "1083 pages", "What a romp!")
 addBookToLibrary("Piranesi", "Susanna Clarke", "265 pages", "Took me to another world")
 addBookToLibrary("A Tale for the Time Being", "Ruth Ozeki", "543 pages", "Got me to meditate")

 addBookCard(myLibrary)

// console.log(myLibrary)