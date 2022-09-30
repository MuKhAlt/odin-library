let myLibrary = []

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = false
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`
}

/**
 * Stores user's input as a new Book object into myLibrary,
 * @param {string} title    Book's title.
 * @param {string} author   Book's author name.
 * @param {number} pages    Book's number of pages.
 */
function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages)

  myLibrary.push(newBook)
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

  title.innerHTML = 'Title: ' + book.title
  author.innerHTML = 'Author: ' + book.author
  pages.innerHTML = 'Pages: ' + book.pages
  read.innerHTML = 'Status: ' + book.read ? 'Read' : 'Not read'
  // add li's to ul
  ul.appendChild(title)
  ul.appendChild(author)
  ul.appendChild(pages)
  ul.appendChild(read)
}