const openModal = document.querySelector('.open-modal')
const modal = document.querySelector('#modal')

openModal.addEventListener('click', () => {
    modal.showModal()
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