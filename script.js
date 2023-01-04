// MODAL
const modal = document.querySelector('#modal')
const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-modal')

openModal.addEventListener('click', () => {
    modal.showModal()
})
closeModal.addEventListener('click', () => {
    modal.close()
})

// BOOK CONTENT
const booksContainer = document.querySelector('.books-container')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const isRead = document.querySelector('#isRead')
const addBookBtn = document.querySelector('.add-book')
const form = document.querySelector('.form')
let myLibrary = [];
let addBook;


form.addEventListener('submit', () => {
    addBookToLibrary()
    form.reset()
})

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

function addBookToLibrary() {
    addBook = new Book(title.value, author.value, pages.value, isRead.checked)
    myLibrary.push(addBook)
    myLibrary.forEach(book => {
        const bookBox = document.createElement('div')
        bookBox.classList.add('book-box')
        booksContainer.appendChild(bookBox)
    })
}