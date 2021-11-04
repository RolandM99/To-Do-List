export default class Tasks {
  constructor() {
    const myTask = JSON.parse(localStorage.getItem('list'));
    if (myTask) {
      this.items = myTask;
    } else {
      this.items = [
        {
          description: 'Complete my TO-DO-List project',
          completed: false,
          index: 1,
        },
        {
          description: 'cook my food for tonight',
          completed: false,
          index: 2,
        },
        {
          description: 'Read OOP in Java for preparation of tuesday Quiz',
          completed: false,
          index: 3,
        },
        {
          description: 'Relax with a Netflix movie THE HATE WE GIVE',
          completed: false,
          index: 4,
        },
      ];
    }
  }

  myTasksView() {
    this.serveItems();
    const listTask = document.querySelector('body > main > section > div.input-container > div > ul');
    listTask.innerHTML = '';
    this.items.forEach((element) => {
      let listElement = '<li>';
      if (element.completed === true) {
        listElement += `<span class="material-icons update-status done" data-id="${element.index}">done</span>
    <p class="line-through activity" data-id="${element.index}"  contenteditable="true">${element.description}</p>`;
      } else {
        listElement += `<span class="material-icons update-status" data-id="${element.index}">check_box_outline_blank</span>
    <p  class="activity" data-id="${element.index}" contenteditable="true">${element.description}</p>`;
      }
      listElement += `<span class="material-icons more-info">more_vert</span>
    </li>`;
      listTask.innerHTML += listElement;
    });
    this.eventStatus();
  }

  updateEvent(index) {
    const currentArray = index - 1;
    const actStatus = this.items[currentArray].completed;
    if (actStatus === true) {
      actStatus.completed = false;
    } else {
      actStatus.completed = true;
    }
    this.myTasksView();
  }

  serveItems() {
    this.items.forEach((element, index) => {
      this.items[index].index = index + 1;
    });
    // sorted list
    this.items.sort((alpha, beta) => {
      if (alpha.index < beta.index) return -1;
      if (alpha.index > beta.index) return 1;
      return 0;
    });
    localStorage.setItem('list', JSON.stringify(this.items));
  }

  eventStatus() {
    const status = document.querySelectorAll('.update-status');
    status.forEach((element) => {
      element.addEventListener('click', (el) => {
        const lineState = el.target.getAttribute('data-id');
        const lineObj = this.items[lineState - 1];
        if (lineObj.completed === true) {
          this.items[lineState - 1].completed = false;
          el.target.innerHTML = 'check_box_outline_blank';
          el.target.classList.remove('done');
        } else {
          this.items[lineState - 1].completed = true;
          el.target.innerHTML = 'done';
          el.target.classList.add('done');
        }
        this.myTasksView();
      });
    });
  }
}