import { Storage, Books, bookList } from './modules/books.js';
import Render from './modules/render.js';
import { DateTime } from './modules/luxon.js';
import { showBooks, showAdd, showContact } from './modules/nav-links.js';

const add = document.getElementById('add');

add.addEventListener('click', () => {
  const newTitle = document.getElementById('title');
  const newAuthor = document.getElementById('author');
  const theTitle = newTitle.value;
  const theAuthor = newAuthor.value;
  const theId = Books.generateId();
  const myBook = new Books(theTitle, theAuthor, theId);
  const bookElement = Books.createBook(myBook);
  const bookListElement = document.querySelector('.box');
  bookListElement.append(bookElement);
  bookList.push(myBook);
  Storage.storeData();
});

Render.renderBooks();

const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');

const time = document.querySelector('.date');
const showTime = DateTime.local();
time.innerHTML = showTime.toLocaleString(DateTime.DATETIME_FULL);

list.addEventListener('click', showBooks);
addNew.addEventListener('click', showAdd);
contact.addEventListener('click', showContact);
