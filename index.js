/*
  variable: var -> let, const
  - {}스코프로 변수참조가능
  - 중복 선언 금지
  - 상수, 변수를 분리
  - const, 가끔let사용하도록.
  데이터 타입(bool, string, number, float, 이거밖에 없나?이 언어에선)
  데이터 정렬(배열, Object)
*/

const Info = {
    name : "Joe",
    age: 25,
    gender: "male",
    height: "long",
    pet: [{
            name: "dog",
            age: 1,
            speed: "fast"
        },{
            name: "cat",
            age: 5,
            speed: "slow"
        }
    ],
    toRead: ["computer science", "grit", "cosmos", "skeptic"],
    school: {
        name: "chang",
        div: "university",
        grade: 4
    }
};

function print(str){
    console.log(str);
}
function add(left, right){
    try{
        return left + right;
    }catch{
        print("error");        
    }
}

function say(name, age){
    return `hello ${name} you are ${age} years`;
}

const greetMe = say('joe', 24);

console.log(greetMe);

const calculator ={
    plus:function(a, b){
        return a+ b;
    },
    minus:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    },
    power:function(a,b){
        return a**b;
    },
    show:function(result){
        console.log(`result:${result}`);
    }
};

calculator.show(calculator.plus(5,6));
calculator.show(calculator.minus(5,6));
calculator.show(calculator.mul(5,6));
calculator.show(calculator.power(3,4));


// title.innerHTML = "Hi!!!!!! Changed title";
// title.style.color = "red";
// title.style.background = "black";
// console.dir(title);

const title = document.querySelector("#title");

const CLIKED_CLASS = "clicked";
function handleClick(){
    title.classList.toggle(CLIKED_CLASS);
}
function handleMove(){
    const currentClass = title.className;
    if(currentClass !== MOVED_CLASS){
        title.className = MOVED_CLASS;
    }else{
        title.className = "";
    }

}
function init(){
    title.addEventListener("click", handleClick);
    //title.addEventListener("mousedown", handleClick);
    //title.addEventListener("mouseup", handleClick);
}

init();

const pay = document.querySelector(".pay");
console.log(pay);