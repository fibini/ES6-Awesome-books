const booksSection = document.querySelector('.books');
const addSection = document.querySelector('.add-book');
const contactSection = document.querySelector('.contact-section');

export const showBooks = () => {
  booksSection.style.display = 'flex';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
};

export const showAdd = () => {
  booksSection.style.display = 'none';
  addSection.style.display = 'flex';
  contactSection.style.display = 'none';
};

export const showContact = () => {
  booksSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'flex';
};
