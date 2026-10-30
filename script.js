const myLibrary = [];


const library = document.querySelector('.library');
const newBook = document.querySelector('.newBook');
const title = document.querySelector('.title')
const author = document.querySelector('.author')
const genre = document.querySelector('.genre');
const confirmButton = document.querySelector('.confirm');
const myDialog = document.querySelector('#myDialog')
const readStatus = document.querySelector('.readStatus');

function Book(title, author, genre, readStatus) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function () {
    this.readStatus = !this.readStatus;
}


function addBookToLibrary(title, author, genre, readStatus){
    let book = new Book(title, author, genre, readStatus);
    myLibrary.push(book);
}




newBook.addEventListener('click', (e) =>{
    e.preventDefault();
    myDialog.showModal();
})


confirmButton.addEventListener('click', (e) => {

    let titleVal = title.value;
    let authorVal = author.value;
    let genreVal = genre.value;
    let readVal = readStatus.checked;

    addBookToLibrary(titleVal, authorVal, genreVal, readVal);
    

    title.value = "";
    author.value = "";
    genre.value = "";
    readStatus.checked = false;

    displayLibrary();
})

function displayLibrary(){

    library.innerHTML = "";

    myLibrary.forEach((book) => {
        let card = document.createElement('div');
        card.setAttribute('class', 'card')
        card.innerHTML = `
        <div class='book-content'>
            <h2>Title: ${book.title}</h2>
            <h3>Author: ${book.author}</h3>
            <h3>Genre: ${book.genre}</h3>
            <h4>Status: ${book.readStatus}</h4>
            <p>Book ID: ${book.id}</p>
        </div>
        <div>
            <button class="toggleRead">Toggle Read Status</button>
            <button class="delButton">Delete Book</button>
        </div>
        `
        const toggleBtn = card.querySelector('.toggleRead');

        toggleBtn.addEventListener('click', () =>{
            book.toggleRead();
            displayLibrary();
        })


        const delButton = card.querySelector('.delButton');

        delButton.addEventListener('click', () => {
            const index = myLibrary.findIndex(item => item.id === book.id);
            if (index !== -1) {
                myLibrary.splice(index, 1);
            }
            displayLibrary();
        })

        library.appendChild(card);
    })
}



addBookToLibrary('Atomic Habits', 'James Clear', 'Self-help', 'false')
displayLibrary();