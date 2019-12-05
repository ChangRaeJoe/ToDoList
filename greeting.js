const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

 const USER_LS = "currentUser",
    SHOW_CN = "showing";

function patinting(text){
    form.classList.remove(SHOW_CN);
    greeting.classList.add(SHOW_CN);
    greeting.innerHTML = `hello~ ${text}`;
}

function saveName(name){
   localStorage.setItem(USER_LS, name);
}
function handleSubmit(event){
   //전달금지
   event.preventDefault();
   const currentValue = input.value;
   //그리기
   patinting(currentValue);
   //유저추가
   saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOW_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        patinting(currentUser);        
    }

}

function init(){
    loadName();
}

init();