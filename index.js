import BookList from './module/bookList.js';
import { DateTime } from './module/luxon.js';
import Navigation from './module/nav-page.js';

const bookObj = new BookList();
const nav = new Navigation();

const dateContainer = document.querySelector('.date-container');
const now = DateTime.now();
dateContainer.innerHTML = `${now.day}/${now.month}/${now.year} ${now.hour}:${now.minute}`;

bookObj.loadBooks();
window.onload(nav);