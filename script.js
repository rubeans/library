const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-modal')
const modal = document.querySelector('#modal')

openModal.addEventListener('click', () => {
    modal.showModal()
})
closeModal.addEventListener('click', () => {
    modal.close()
})

let myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

function addBookToLibrary() {
    // do stuff here
}