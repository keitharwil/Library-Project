const myLibrary = [];
const addBookBtn = document.querySelector("#add-book");
const form = document.querySelector("#bookForm");
const bookAddDialog = document.querySelector("dialog");

function Book(id, bookName, genre, author, read) {
    this.id = id;
    this.bookName = bookName;
    this.author = author;
    this.genre = genre;
    this.read = read;
};

function addBookToLibrary(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = self.crypto.randomUUID();
    const formValues = Array.from(formData, ([key, value]) => (value));
    formValues.unshift(id);
    console.log(formValues);
    const book = new Book(...formValues);
    console.log(book);
    // bookAddDialog.close()
};


addBookBtn.addEventListener("click", () => {
    bookAddDialog.showModal();
});

form.addEventListener("submit", addBookToLibrary);