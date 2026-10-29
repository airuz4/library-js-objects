const myLibrary = [];

function Book(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, genre){
    let book = new Book(name, author, genre);
    myLibrary.push(book);
}

function displayLibrary(library){
    for(let i = 0; i <= library.length - 1; i++){
        console.log(library[i].name)
        console.log(library[i].author)
        console.log(library[i].genre)
        console.log(library[i].id);
    }
}

let library = document.querySelector('.library');
let newBook = document.querySelector('.newBook');



let name = document.querySelector('.name')
let author = document.querySelector('.author')
let genre = document.querySelector('.genre')


let confirmButton = document.querySelector('.confirm');


const myDialog = document.querySelector('#myDialog')


newBook.addEventListener('click', (e) =>{
    e.preventDefault();
    myDialog.showModal();
})


confirmButton.addEventListener('click', (e) => {

    let nameVal = name.value;
    let authorVal = author.value;
    let genreVal = genre.value;

    

    let card = document.createElement('div');
    card.setAttribute('class', 'card')
    library.appendChild(card);


    name.value = "";
    author.value = "";
    genre.value = "";
})


addBookToLibrary('lebron', 'pikachu', 'horror')
addBookToLibrary('1lebron', '2pikachu', '1horror')

displayLibrary(myLibrary);

console.log(myLibrary.length)