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