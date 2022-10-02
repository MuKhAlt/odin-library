document.getElementById('new-entry-add').addEventListener('click', function(e) {
  console.log(e);
  addNewEntry()
})

let id = 0

let myLibrary = []

function Book(title, author, pages, id) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = false
  this.id = id
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`
}

/**
 * Stores user's input as a new Book object into myLibrary and adds a new Book Card to the DOM,
 * @param {string} title    Book's title.
 * @param {string} author   Book's author name.
 * @param {number} pages    Book's number of pages.
 * @param {number} id       Book's id
 */
function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages, id)
  id++

  myLibrary.push(newBook)
  addBookCard(newBook)
}

/**
 * Displays a 'Book Card' for every book object in myLibrary,
 */
function displayBooks() {
  myLibrary.forEach(function(book) {
      addBookCard(book)
  })
}

/**
 * Creates a 'Book card' and adds it to the DOM
 * 
 * @param {Book} book    The book object to be added
 */
function addBookCard(book) {
  // create div
  const div = document.createElement('div')
  // set id
  div.id = book.id
  // set class to book
  div.className = 'book'
  // add div to bc
  document.getElementById('books-container').appendChild(div)

  // create ul
  const ul = document.createElement('ul')
  // add ul to div
  div.appendChild(ul)

  // create li's
  const title = document.createElement('li')
  const author = document.createElement('li')
  const pages = document.createElement('li')
  const read = document.createElement('li')
  const remove = document.createElement('button')
  // populate li's
  title.innerHTML = 'Title: ' + book.title
  author.innerHTML = 'Author: ' + book.author
  pages.innerHTML = 'Pages: ' + book.pages
  read.innerHTML = 'Status: ' + (book.read ? 'Read' : 'Not read')
  remove.innerHTML = 'Remove'
  remove.className = 'remove-button'
  remove.addEventListener('click', function(e) {
    myLibrary = myLibrary.filter((book) => (
      book.id === e.path[2].id
    ))
    e.path[2].remove()
  })
  // add li's to ul
  ul.appendChild(title)
  ul.appendChild(author)
  ul.appendChild(pages)
  ul.appendChild(read)
  ul.appendChild(remove)
}


/**
 * Adds a new book card to the screen,
 */
function addNewEntry() {
  const title = document.getElementById('new-entry-title')
  const author = document.getElementById('new-entry-author')
  const pages = document.getElementById('new-entry-pages')

  if (title.value) {
    addBookToLibrary(title.value, author.value, pages.value)
    title.value = ''
    author.value = ''
    pages.value = ''
  } else {
  title.placeholder = "Title can't be empty"
  }
}