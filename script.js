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

    console.log(readVal);
    addBookToLibrary(titleVal, authorVal, genreVal, readVal);
    
    // *MOVE TO DISPLAY LIBRARY*
    // let card = document.createElement('div');
    // card.setAttribute('class', 'card')
    // library.appendChild(card);

    title.value = "";
    author.value = "";
    genre.value = "";
    readStatus.value = "";

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
            <button>Delete Book</button>
        </div>
        `
        const toggleBtn = card.querySelector('.toggleRead');

        toggleBtn.addEventListener('click', () =>{
            book.toggleRead();
            displayLibrary();
        })


        library.appendChild(card);
    })
}


