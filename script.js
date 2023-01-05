// MODAL - OPEN AND CLOSE THE MODAL
const modal = document.querySelector('#modal')
const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-modal')

openModal.addEventListener('click', () => {
    modal.showModal()
})
closeModal.addEventListener('click', () => {
    modal.close()
})

// LIBRAY CONTENT
const booksContainer = document.querySelector('.books-container')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const isRead = document.querySelector('#isRead')
const form = document.querySelector('.form')
let myLibrary = [];
let newBook;

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title.value;
        this.author = author.value;
        this.pages = pages.value;
        this.isRead = isRead.checked;
    }
    autoCapitalize() {
        // CAPITALIZE TITLE
        const titleFLttr = this.title.slice(0, 1).toUpperCase()
        const restTitleLttr = this.title.slice(1, this.title.length).toLowerCase()
        this.title = titleFLttr + restTitleLttr
        // CAPITALIZE AUTHOR
        const authorFLttr = this.author.slice(0, 1).toUpperCase()
        const restAuthorLttr = this.author.slice(1, this.author.length).toLowerCase()
        this.author = authorFLttr + restAuthorLttr
    }
    getIsRead() {
        if (this.isRead === true) {
            this.isRead = "Read"
        } else {
            this.isRead = "Not Read"
        }
    }
}

// CREATE THE BOOK OBJECT AND ADD IT TO THE ARRAY
function addBookToLibrary() {
    newBook = new Book(title, author, pages, isRead)
    newBook.autoCapitalize()
    newBook.getIsRead()
    myLibrary.push(newBook)
    // console.log(myLibrary)
}

// DISPLAY THE BOOKS ON SCREEN WHEN IT IS ADDED
function displayBook() {
    // CREATE NEW ELEMENTS TO GIVE IT CHILDS
    const bookBox = document.createElement('div')
    const bookInfo = document.createElement('div')
    const bookBtns = document.createElement('div')
    //BOOK INFO 
    bookInfo.insertAdjacentHTML('beforeend', `
        <span>"${newBook.title}"</span>
        <span>By: ${newBook.author}</span>
        <span>${newBook.pages} Pages</span>
        `)
    //BOOK BUTTONS
    bookBtns.insertAdjacentHTML('beforeend', `
        <button class="isRead">${newBook.isRead}</button>
        <button class="delete-btn">Delete</button>
    `)
    myLibrary.forEach(book => {
        // APPEND DIV CHILDS AND GIVE IT A CLASS
        bookBox.classList.add('book-box')
        booksContainer.append(bookBox)
        bookInfo.classList.add('book-info')
        bookBox.append(bookInfo)
        bookBtns.classList.add('book-btns')
        bookBox.append(bookBtns)
    })
}

// EVERYTIME FORM IS SUBMITTED IT WILL ADD A NEW BOOK AND RESET THE INPUT FIELDS
form.addEventListener('submit', () => {
    addBookToLibrary()
    displayBook()
    form.reset()
})

// HANDLE BUTTONS
const isReadBtn = document.querySelector('.isRead')
const deleteBtn = document.querySelector('.delete-btn')