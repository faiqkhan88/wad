//============================================
//-----------  STEP - 1 ----------------------
//============================================

//
// var todos = [];
// function add() {
//     var task = document.getElementById("task").value;
//     todos.push(task);
//     document.getElementById('todos').innerText = todos;
// }

//in this only the tasks being entered are added to todos list.

//============================================
//-----------  STEP - 2 ----------------------
//============================================

//
// var todos = [];
// function add() {
//     var task = document.getElementById('task').value;
//     todos.push(task);
//     document.getElementById('task').value = '';
//     show();
// }
//
// function show() {
//     var ul = document.createElement('ul');
//     ul.classList.add("list-group");
//     for(var i=0; i<todos.length; i++){
//         var li = document.createElement('li');
//         li.innerHTML  = '<li>' + todos[i] + '</li>';
//         li.classList.add("list-group-item");
//         ul.appendChild(li);
//     }
//     document.getElementById('todos').appendChild(ul);
// }

//in this, tasks are being added but also being displayed but in repetition

//============================================
//-----------  STEP - 3 ----------------------
//============================================



// function getTodos() {
//     var todos = [];
//     var todos_str = localStorage.getItem('todo');
//     if(todos_str !== null)
//         todos = JSON.parse(todos_str);
//     return todos;
// }
//
// function add() {
//     var task = document.getElementById('task').value;
//     if(task.trim() == ''){
//         document.getElementById('message').style.display = 'block';
//         return false;
//     } else {
//         document.getElementById('message').style.display = 'none';
//     }
//     var todos = getTodos();
//     todos.push({task: task});
//     document.getElementById('task').value = '';
//     localStorage.setItem('todo',JSON.stringify(todos));
//     show();
// }
//
//
// function show() {
//     document.getElementById('todos').innerText = '';
//     var todos = getTodos();
//     var ul = document.createElement('ul');
//     ul.classList.add("list-group");
//     for(var i=0; i<todos.length; i++){
//         var li = document.createElement('li');
//         li.innerHTML  = '<li>' + todos[i].task + '</li>' +
//             '<button class="btn btn-danger">' +
//             '<i class="fas fa-trash-o"></i> ' +
//             '<span class="d-none d-sm-inline"> Delete </span> </button>';
//         li.classList.add("list-group-item");
//         ul.appendChild(li);
//     }
//     document.getElementById('todos').appendChild(ul);
// }
// show();

//it is displaying the tasks normally not in repeated


//============================================
//-----------  STEP - 4 ----------------------
//============================================

//
// function getTodos() {
//     var todos = [];
//     var todos_str = localStorage.getItem('todo');
//     if(todos_str !== null)
//         todos = JSON.parse(todos_str);
//     return todos;
// }
//
// function add() {
//     var task = document.getElementById('task').value;
//     if(task.trim() == ''){
//         document.getElementById('message').style.display = 'block';
//         return false;
//     } else {
//         document.getElementById('message').style.display = 'none';
//     }
//     var todos = getTodos();
//     todos.push({task: task, isDone: false});
//     document.getElementById('task').value = '';
//     localStorage.setItem('todo',JSON.stringify(todos));
//     show();
//     return false;
// }
//
// function remove() {
//     var id = this.getAttribute('id');
//     var todos = getTodos();
//     todos.splice(id,1);
//     localStorage.setItem('todo',JSON.stringify(todos));
//     show();
//     return false;
// }
//
// function show() {
//     document.getElementById('todos').innerText = '';
//     var todos = getTodos();
//     var ul = document.createElement('ul');
//     ul.classList.add("list-group");
//     for(var i=0; i<todos.length; i++){
//         var li = document.createElement('li');
//         li.innerHTML  = '<li>' + todos[i].task + '</li>' +
//             '<button class="btn btn-danger" id="' + i + '">' +
//             '<i class="fa fa-trash-o"></i> ' +
//             '<span class="d-none d-sm-inline"> Delete </span> </button>';
//         li.classList.add("list-group-item");
//         if(todos[i].isDone)
//             li.classList.add("done");
//         ul.appendChild(li);
//     }
//     document.getElementById('todos').appendChild(ul);
//     var buttons = document.getElementsByClassName('btn-danger');
//     for(var i=0; i<buttons.length; i++){
//         buttons[i].addEventListener('click',remove);
//     }
// }
//
// function isDone(e) {
//     var todos = getTodos();
//     if(todos[e.target.id].isDone) {
//         e.target.classList.add('done');
//         todos[e.target.id].isDone = false;
//     }
//     else{
//         e.target.classList.remove('done');
//         todos[e.target.id].isDone = true;
//     }
//     localStorage.setItem('todo',JSON.stringify(todos));
//     show();
// }
// show();

//in this the tasks are being saved on local storage and can be deleted on the click of "delete" button



//============================================
//-----------  STEP - 5 ----------------------
//============================================

/*

CLASS ACTIVITY (HOME WORK) :

1- Enable State of todos by clicking on the text completed, started etc
HINT: use text-decoration:line-through; property of CSS

2- Enable Editing todos in text field to update text

*/
function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' +'<p  id="\'+i+\'" onclick="striketext(this)">'+ todos[i].task +'</p>' +'</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>'+
             '<button class="btn btn-Edit" id1="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Edit </span> </button>';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    var buttons2 = document.getElementsByClassName('btn-Edit');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
        buttons2[i].addEventListener('click',editValue);
    }
}

function editValue(){
    var id = this.getAttribute('id1');
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.splice(id,1);
    todos.push({task: task, isDone: false});
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}


function striketext(obj)
{
         var a = obj.style.textDecoration ="line-through";
}


function isDone(e) {
    var todos = getTodos();
    if(todos[e.target.id].isDone) {
        e.target.classList.add('done');
        todos[e.target.id].isDone = false;
    }
    else{
        e.target.classList.remove('done');
        todos[e.target.id].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
show();




