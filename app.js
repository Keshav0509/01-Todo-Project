const todoBtn= document.querySelector('.todo-btn');


todoBtn.addEventListener('click', async () => {
  try {
    await  addTodo();
    await  renderTodoList();

  } catch (error) {
    alert('somthing worng');
  }
})

const todoList = [];
function renderTodoList(){
  let todoHtml ='';
  for(i=0; i<todoList.length; i++){
    const todoObj = todoList[i];
    const {name, date} = todoObj;
    
    const html = `
      <section class="todo">
        <div class="todo-name">
          ${name} 
        </div>
        <div class="todo-date">
          ${date}
        </div>
        <div class="todo-edit" onclick="editTodoItem(${i})">
          <i class="fa fa-edit"></i>
        </div>
        <div class="todo-delete" onclick="deleteTodoItem(${i})")>
          <i class="fa fa-trash"></i>
        </div>
      </section>
    `;
    todoHtml += html;
  }
  document.querySelector('.todo-list').innerHTML = todoHtml;
  localStorage.setItem('todoList', JSON.stringify(todoHtml));
}

function addTodo(){
  const todoName = document.querySelector('.todo-input');
  const todoDate = document.querySelector('.todo-date');
  
  const name = todoName.value;
  const date = todoDate.value;
  todoList.push({name, date});
  
  todoDate.value = '';
  todoName.value = '';
}

function deleteTodoItem(index){
  todoList.splice(index, 1);
  renderTodoList();
}

const editBtn = document.querySelector('.todo-edit');
function editTodoItem(index){
  console.log("hello", index)
  renderTodoList();
}