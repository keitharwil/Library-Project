const myLibrary = [];
const addBookBtn = document.querySelector("#addBook");

function Book(id, name, genre, author) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.genre = genre;
};

function addBookToLibrary(){
    const id = self.crypto.randomUUID();

    const book = new Book(
        id, 

    );
};

addBookBtn.addEventListener("Click", () => {
    addBookToLibrary();
});