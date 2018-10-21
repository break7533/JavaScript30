//Items
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

//Functions
function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
    console.table(items);
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
}

function toogleDone(e) {
    const el = e.target;
    if (!el.matches('input')) {
        return;
    };
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function deleteAll(e) {
    localStorage.removeItem('items');
    items.length = 0;
    populateList(items,itemsList);
}

function checkAll(e) {
   items.forEach(element => {
       element.done = true;
   });
   localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function uncheckAll(e) {
    items.forEach(element => {
        element.done = false;
    });
    localStorage.setItem('items', JSON.stringify(items));
     populateList(items, itemsList);
 }

//Events
addItems.addEventListener('submit', addItem);
populateList(items, itemsList);
itemsList.addEventListener('click', toogleDone);
const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', deleteAll);
const checkButton = document.querySelector('#check');
checkButton.addEventListener('click', checkAll);
const uncheckButton = document.querySelector('#uncheck');
uncheckButton.addEventListener('click', uncheckAll);
