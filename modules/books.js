/* eslint-disable */

export class Storage {
  static storeData() {
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  static initiateBooksData() {
    const initialBooks = localStorage.getItem('bookList');
    if (initialBooks) {
      return JSON.parse(initialBooks);
    }
    return [];
  }
}

export let bookList = Storage.initiateBooksData();

export class Books {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static createBook({ title, author, id }) {
    const newBook = document.createElement('div');
    const titlePara = document.createElement('p');
    const authorPara = document.createElement('p');
    const remove = document.createElement('button');
    remove.setAttribute('id', this.id);
    titlePara.textContent = this.title;
    authorPara.textContent = this.author;
    const completeBook = `"${title}" by ${author}`;
    remove.textContent = 'Remove';
    newBook.classList.toggle('grey', id % 2 !== 0);
    newBook.classList.toggle('white', id % 2 === 0);
    newBook.classList.add('position');
    remove.classList.add('remove');

    newBook.append(completeBook);
    newBook.append(remove);

    remove.addEventListener('click', (e) => {
      e.preventDefault();
      bookList = bookList.filter((book) => book.id !== id);
      newBook.remove();
      Storage.storeData();
    });
    return newBook;
  }

  static generateId() {
    if (bookList.length > 0) {
      return bookList[bookList.length - 1].id + 1;
    }
    return -1;
  }
}
