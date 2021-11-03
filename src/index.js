import './style.css';

const myTasks = [
  {
    description: 'Complete my TO-DO-List project',
    completed: false,
    index: 0,
  },
  {
    description: 'cook my food for tonight',
    completed: false,
    index: 1,
  },
  {
    description: 'Read OOP in Java for preparation of tuesday Quiz',
    completed: false,
    index: 2,
  },
  {
    description: 'Relax with a Netflix movie THE HATE WE GIVE',
    completed: false,
    index: 3,
  },
];

myTasks.forEach((element) => {
  const myTodoView = document.createElement('todo-view');
  myTodoView.innerHTML = `<li>
  <span class="material-icons show-default">check_box_outline_blank</span>
  <p contenteditable="true">${element.description}</p>
  <span class="material-icons more-info">more_vert</span>
</li>`;
document.querySelector('body > main > section > div.input-container > div > ul').appendChild(myTodoView);
});
