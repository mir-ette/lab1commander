const fs = require('fs')

let todos = []
let todo = {}
let id = 0;


const add = (title) => {
    check(todos);
    for (id; id <= todos.length; id++) {
        todo = {
            id: String(id),
            title,
        }
    }
    let duplicate = todos.find(todo => {
        todo.title === title
    })
    if (!duplicate) {
        todos.push(todo)
        fs.writeFileSync(`${__dirname}/todos.json`, JSON.stringify(todos));
    }
}

const edit = (id, title) => {
    let todosEdit = check(todos)
    todosEdit.map(todo => {
        if (todo.id == id) {
            todo.title = title;
        }
        return todo
    })
    fs.writeFileSync(`${__dirname}/todos.json`, JSON.stringify(todosEdit));
}

const remove = id => {
    check(todos)
    let todoRemove = todos.filter(item => item.id !== id);
    fs.writeFileSync(`${__dirname}/todos.json`, JSON.stringify(todoRemove));
}

const list = ()=>{
    let listItems = check(todos)
    listItems.forEach(element => {
        
        console.log(`id is: ${element.id}`);
        console.log(`title is: ${element.title}`);
    });
}

const check = (todosList) => {
    if (!fs.existsSync(`${__dirname}/todos.json`)) {
        fs.writeFileSync(`${__dirname}/todos.json`, JSON.stringify(todos));
    }
    todosList = fs.readFileSync(`${__dirname}/todos.json`)
    todos = JSON.parse(todosList)
    return todos
}


module.exports = { add, edit, remove , list}