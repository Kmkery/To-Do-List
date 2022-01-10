const addForm = document.querySelector('.add-form')
const todos = document.querySelector('.todos')
const searchForm = document.querySelector('.search-form')

const addTodo = event => {
    event.preventDefault()
    const newTodo = event.target.add.value.trim()
    
    if(newTodo.length) {
        todos.innerHTML +=`<li class="todo">
        <span class="text-todo">${newTodo}</span>
        <i class="delete bi bi-trash"></i>
        </li>`
        addForm.reset()
    }
}

const searchTodo = ({target:{value:inputValue}}) => {
    const todosArray = Array.from(todos.children)


    todosArray.forEach(todo => {
        const inputIsNotInTodos = !todo.textContent.toLowerCase().includes(inputValue.toLowerCase())

        if(inputIsNotInTodos) {
            todo.classList.add('hide')
        } else {
            todo.classList.remove('hide')
        }
    })
}

const removeTodo = ({target}) => {
    const classOfClickedElements = Array.from(target.classList)
    if(classOfClickedElements.includes('delete')) {
        target.parentNode.remove()
    }
}

addForm.addEventListener('submit', addTodo)

searchForm.addEventListener('input', searchTodo)

todos.addEventListener('click', removeTodo)
