import './style.css';
import Tasks from './task.js';

const myTasks = new Tasks();

myTasks.myTasksView();

const clickAdd = document.querySelector('#form-input');
clickAdd.addEventListener('submit', (el) => {
  el.preventDefault();
  const taskEdited = clickAdd.elements.text.value;
  myTasks.addTask(taskEdited);
  clickAdd.reset();
});
document.querySelector('body > main > section > div.footer-btn > button').addEventListener('click', (e) => {
  e.preventDefault();
  myTasks.clearAllCompleted();
});