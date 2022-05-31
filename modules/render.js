import { Books } from "./books.js";
import { bookList } from "./books.js";

export class Render {
  static renderBooks() {
    let bookSection = document.querySelector(".box");
    let bookListElement = document.createElement("div");
    bookListElement.id = "bookList";
    bookList.forEach((book) => {
      let bookElem = new Books(book.title, book.author, book.id);
      let bookElement = Books.createBook(bookElem);
      bookSection.append(bookElement);
    });
  }
}
