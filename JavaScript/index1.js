let listItem = [
    {
        id: 1,
        item: 'Read a book',
        complete: true
    },
    {
        id: 2,
        item: 'Learning C#',
        complete: false
    },
    {
        id: 3,
        item: 'Studying JavaScript',
        complete: false
    }
]
const addBox = document.querySelector('#addBox')
const addItem = document.getElementById('addItem')
const updateItem = document.getElementById('updateItem')
const deleteItem = document.getElementById('deleteItem')
const listOrder = document.querySelector('#listOrder')
const allComplete = document.getElementById('completeTask')
const searchBox = document.getElementById('searchBox')
searchBox.addEventListener('keyup', (word) =>{
    const valueItem = word.target.value.toLowerCase();
    const listItemNode = document.querySelectorAll('#listOrder li .form-check'); // Select all the span elements within list items

    listItemNode.forEach(item => {
        const listItem = item.parentNode;
        if (item.innerText.toLowerCase().includes(valueItem)) {
            item.classList.remove('hidden') // Show the item by removing the 'hidden' class
        } else {
            item.classList.add('hidden');  // Hide the item by adding the 'hidden' class
        }
    });
})


addItem.addEventListener("click", () => {
    const item = addBox.value;
    const id = listItem.length > 0 ? Math.max(listItem.length + 1) : 1
    listItem.push({ id, item, complete: false })
    getList();
})

deleteItem.addEventListener("click", () => {
    const txtDelete = prompt('Please type in here to delete.')
    listItem = listItem.filter(todelete => todelete.item !== txtDelete)
    if(listItem !== txtDelete)alert('try again!')
    getList();
})


function sort() {
    listItem.sort((a,b) => a.complete - b.complete)
    getList()
}

function getList(){
    listOrder.innerHTML = ''
    listItem.forEach(todo => {
        const liTag = document.createElement('li')
        liTag.innerHTML = `
        <div class="form-check">
            <input class="form-check-input liTagBox" type="checkbox" onchange="toggleDone(${todo.id})" ${todo.complete ? 'checked' : ''} id="flexCheckIndeterminate">
            <label class="form-check-label ${todo.complete ? 'todo-complete' : ''}" for="flexCheckIndeterminate">
            ${todo.item}
            </label>
        </div>`
        listOrder.appendChild(liTag)
    });
    completeTaskItem();
}
function toggleDone(id) {
    const todoIndex = listItem.findIndex(todo => todo.id === id);
    listItem[todoIndex].complete = !listItem[todoIndex].complete;
    getList();
}
function completeTaskItem() {
    let completeItem = true;
    for (let todo of listItem) {
        if (!todo.complete) {
            completeItem = false;
            break;
        }
    }
    if (completeItem) {
        allComplete.innerHTML = 'Complete mission! Keep it up!';
    } else {
        allComplete.innerHTML = 'Not enough to finish!';
    }
}
getList();