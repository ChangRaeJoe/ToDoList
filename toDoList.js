const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');


const TODO_LS = "todos",
    TODOID_LS = "todoid";

let toDos = [];

function loadList(){
    const currentList = localStorage.getItem(TODO_LS);
    if(currentList !== null){
        const paredToDos = JSON.parse(currentList);

        //배열의 원소당 함수적용
        paredToDos.forEach(function(toDo){
            //text만 걸러내고 드로우
            PaintDraw(toDo);
        });
        
    }

    const currentId = localStorage.getItem(TODOID_LS);
    if(currentId === null){
        localStorage.setItem(TODOID_LS, 0);
    }
}

function saveToDos(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos) );
}

function deleteToDo(event){
   event.preventDefault();
   const deleteTarget = event.target.parentNode;
   deleteTarget.remove();

   const cleanToDos = toDos.filter(function(toDo){
    return deleteTarget.id != parseInt(toDo.id);
   });
   
   //ID renew! -> no -> ID add(arr.length가 아닌)

   toDos = cleanToDos;
   saveToDos();
}
function getToDoId(){
    const loadId = parseInt( localStorage.getItem(TODOID_LS) ) + 1;
    localStorage.setItem(TODOID_LS, loadId);
    return loadId;
}

function PaintDraw(data){
    //ID값을 length가 아닌 다른 방식
    const li = document.createElement('li');
    li.id = data.id;

    const btn = document.createElement('button');
    btn.innerHTML = "&#x274C;";
    btn.classList.add("cs-button");

    btn.addEventListener("click", deleteToDo);

    const span = document.createElement('span');
    span.innerHTML = data.text;

    li.appendChild(btn);
    li.appendChild(span);
    li.classList.add('cs-textList');
    toDoList.appendChild(li);

    const toDoObj = {
        text: data.text,
        id: data.id
    };
    toDos.push(toDoObj);
    saveToDos();
}

function init(){
    /*
    input�Է� �ޱ�
    list�� �߰��ϱ�
    list���� �����ϱ�
    */
   loadList();
   toDoForm.addEventListener("submit", function(event){
        event.preventDefault();
        const currentValue = {
            text: toDoInput.value,
            id: getToDoId()
        };
        PaintDraw(currentValue);
        //createToDo();
        toDoInput.value = "";
    });

}

init();

//console.log(toDoForm, toDoInput, toDoList);

function createToDo(){
    const ul = document.createElement('ul');
    const newId = toDoList.length + 1;
    ul.id = newId;

    const btn = document.createElement('button');
    btn.innerHTML = "X";

    const span = document.createElement('span');
    span.innerHTML = toDoInput.value;
    span.appendChild(btn);

    const content ={
        id: newId,
        text: toDoInput.value
    };
    //
    ul.appendChild(span);
    toDoDiv.appendChild(ul);
    toDoInput.value = "";

    saveToDo(content);
}

