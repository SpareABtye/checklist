// Variables -----

// ----- Create
const enter = document.querySelector('#enter-items');
const userInput = document.querySelector('#user-input');
const inputLength = () => userInput.value.length;

// ----- Delete
const ul = document.querySelector('ul');
const listOne = document.querySelector('list-one');
const checkbox = document.querySelectorAll('input[type=checkbox]');
const delButton = document.querySelector('#erase');
const active = document.getElementById('act-list')
const finished = document.getElementById('fin-list');

// Create list item ------

const addButton = () => {
    if (inputLength() > 0) { newItem() };
};

const addEnter = () => {
    if (inputLength() > 0 && event.keyCode === 13) { newItem() };
}

const newItem = () => {
    let li = document.createElement('li');
    let moveButt = document.createElement('button');
    li.classList.add('item');
    moveButt.innerHTML = 'DONE';
    moveButt.onclick = moveToDo;
    moveButt.classList.add('done-button');
    li.appendChild(moveButt);
    li.appendChild(document.createTextNode(userInput.value));
    active.appendChild(li);
    userInput.value = '';
}

// Move items ------

const moveToDo = (evt) => {
    let makeCheckbox = document.createElement('input');
    makeCheckbox.type = 'checkbox';
    evt.preventDefault();
    let btn = evt.target;
    let li = btn.closest('li');
    btn.remove();
    finished.appendChild(li).classList.add('marked');
    li.appendChild(makeCheckbox).classList.add('box');
}

// Undo function is still under work. 

// const moveToDo = (evt) => {
//     let makeCheckbox = document.createElement('input');
//     let undoButton = document.createElement('button');
//     makeCheckbox.type = 'checkbox';
//     evt.preventDefault();
//     let btn = evt.target;
//     let li = btn.closest('li');
//     btn.remove();
//     finished.appendChild(li).classList.add('marked');
//     undoButton.innerHTML = 'UNDO';
//     undoButton.onclick = undoToDo;
//     undoButton.classList.add('undo-button');
//     li.appendChild(makeCheckbox).classList.add('box');
//     li.appendChild(undoButton);
// }

// const undoToDo = (evt) => {
//     evt.preventDefault();
//     let box = document.querySelector('box');
//     let btn = evt.target;
//     let li = btn.closest('li');
//     btn.remove();
//     active.appendChild(li).classList.remove('marked');
// }

// Strike items ------

const lineThru = (event) => event.target.closest('input').checked ?
    event.target.closest('li').classList.add('marked') :
    event.target.closest('li').classList.remove('marked');



// Remove selected items -------

const remove = () => {
    let checked = document.querySelectorAll('.box:checked');
    checked.forEach((elem) => {
        elem.parentElement.remove();
    })
}


// Events ------

delButton.addEventListener('click', remove);
enter.addEventListener('click', addButton);
userInput.addEventListener('keypress', addEnter);