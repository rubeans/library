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

// LIBRAY CONTENT - DECLARING VARIABLES
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
        const restTitleLttr = this.title.slice(1, this.title.length)
        this.title = titleFLttr + restTitleLttr
        // CAPITALIZE AUTHOR
        const authorFLttr = this.author.slice(0, 1).toUpperCase()
        const restAuthorLttr = this.author.slice(1, this.author.length)
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
}

// DISPLAY THE BOOKS ON SCREEN WHEN IT IS ADDED
function displayBook() {
    // CREATE NEW ELEMENTS AND GIVE IT PARENTS AND CHILDS
    // BOOK BOX
    const bookBox = document.createElement('div')
    booksContainer.append(bookBox)
    bookBox.classList.add('book-box')
    //BOOK INFO 
    const bookInfo = document.createElement('div')
    bookBox.append(bookInfo)
    bookInfo.classList.add('book-info')
    bookInfo.insertAdjacentHTML('beforeend', `
    <span>"${newBook.title}"</span>
    <span>By: ${newBook.author}</span>
    <span>${newBook.pages} Pages</span>
    `)
    //BOOK BUTTONS
    const bookBtns = document.createElement('div')
    bookBox.append(bookBtns)
    bookBtns.classList.add('book-btns')
    bookBtns.insertAdjacentHTML('beforeend', `
        <button class="isRead-btn">${newBook.isRead}</button>
        <button class="delete-btn">Delete</button>
    `)
}

// EVERYTIME FORM IS SUBMITTED IT WILL ADD A NEW BOOK AND RESET THE INPUT FIELDS
form.addEventListener('submit', () => {
    addBookToLibrary()
    displayBook()
    handleBtns()
    form.reset()
})

function handleBtns() {
    const book = document.querySelectorAll('.book-box')
    let isReadBtn;
    let deleteBtn;
    let bookToBeDeleted;
    // GIVE DIFFERENTS ID TO EACH BOOK-BOX DIV
    for (let i = 0; i < book.length; i++) {
        book[i].setAttribute('id', `book-${i}`)
        isReadBtn = book[i].querySelector('.isRead-btn')
        deleteBtn = book[i].querySelector('.delete-btn')
        bookToBeDeleted = book[i]
    }
    // TOOGLE 'Read' TO 'Not Read' BUTTON AND SO ON
    isReadBtn.addEventListener('click', () => {
        if (isReadBtn.textContent === "Read") {
            newBook.isRead = "Not Read"
            isReadBtn.textContent = newBook.isRead
        } else {
            newBook.isRead = "Read"
            isReadBtn.textContent = newBook.isRead
        }
    })
    // WILL DELETE A BOOK
    deleteBtn.addEventListener('click', () => {
        bookToBeDeleted.remove()
    })
}