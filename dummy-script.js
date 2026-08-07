// We need to check both if the error message has fired and if the form is complete
        

        // if the error message has not fired and the form is incomplete, fire error message
        if (document.querySelector(".error-div") === null && titleInput.value === "" || authorInput.value === "" || lengthInput.value === "" || commentInput.value === "") {
            let errorDiv = document.createElement("div");
            errorDiv.classList = "error-div";
            interactionPanel.appendChild(errorDiv);

            interactionPanel.style.gridTemplateRows = "250px 40px 40px";

            let errorMessage = document.createElement('p');
            errorMessage.textContent = "Please fill in all text fields before submitting!";
            errorMessage.classList = "error-message";
            errorDiv.appendChild(errorMessage);
        }
        // If the error message has fired and the form is complete, submit data

        else if (document.querySelector(".error-div") === true && titleInput.value !== "" && authorInput.value !== "" && lengthInput.value !== "" && commentInput.value !== "") {
            titleInfo = titleInput.value;
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

        // if the error message has fired and the form is incomplete, delete previous error message and make a new one 

        else if (document.querySelector(".error-div") === true && titleInput.value === "" || authorInput.value === "" || lengthInput.value === "" || commentInput.value === "") {
            let errorMessage = document.querySelector(".error-message");
            errorMessage.textContent = "PRETTY Please fill in all text fields before submitting!!!";
        }
        
        // if the error message has not fired and the form is complete, submit data 

        else if (document.querySelector(".error-div") === null && titleInput.value !== "" && authorInput.value !== "" && lengthInput.value !== "" && commentInput.value !== "") {

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