const myLibrary = [];
const addBookBtn = document.querySelector("#add-book");
const closeBtn = document.querySelector("#close");
const bookAddDialog = document.querySelector("dialog");

function Book(id, name, genre, author, read) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.read = read;
};

function addBookToLibrary(name,author,genre){
    const id = self.crypto.randomUUID();
    const book = new Book(
        id, 
        name,
        author,
        genre,
        read
    );
    myLibrary.push(book);
    console.log(myLibrary);
};

addBookBtn.addEventListener("click", () => {
    bookAddDialog.showModal();
});

closeBtn.addEventListener("click", () => {
    bookAddDialog.close();
});
