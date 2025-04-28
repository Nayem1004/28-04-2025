for(var i =0; i<3; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text = this.innerHTML
        audioPlay(text);
        playAnimation(text);
    })

}

function audioPlay(text){
    
    switch(text){
        case "a":
            var audio = new Audio("sounds/practice.mp3");
            audio.play();
            break;     
            
            case "b":
            var audio = new Audio("sounds/practice.mp3");
            audio.play();
            break; 

            case "c":
            var audio = new Audio("sounds/practice.mp3");
            audio.play();
            break; 
    }
}

function playAnimation(text){
    var selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("anim");

    setTimeout(function(){
        selectedButton.classList.remove("anim");
    },1000);
}
document.addEventListener("keypress", function(event){
    var text = event.key;
    audioPlay(text);
    playAnimation(text);
});

document.addEventListener("keypress", function(event){
    var text = event.key;
    document.querySelector("p").innerHTML = "you have pressed    " + text;
});

// var count = 0;
// document.querySelector("text").addEventListener("keypress", function(event){
//     count++;
//     var text = event.key;
//     document.querySelector("p").innerHTML = "you have pressed  " + count++
// });

// const input = document.querySelector("input[name=name");
// input.addEventListener("change", changeHandler);

// function changeHandler(e){
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.className);
//     console.log(e.target.className);
//     console.log(e.target.id);
//     console.log(e.target.value);

// }

const varName = document.querySelectorAll("input[name=program");

Array.from(program).map((program) => {
    program.addEventListener("change", programHandler);
});

function programHandler(e){
    if(e.target.checked){
        console.log(e.target.value);
    }
}

const department = document.querySelector("#department")
department.addEventListener('change', handelDepartment);
function handelDepartment(e){
    console.log(e.target.value);
}


// form submit
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");

form.addEventListener("submit", formHandler());

function formHandler(e) {
  e.preventDefault();

  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  console.log(userInfo);
  name.value = "";
  email.value = "";
  password.value = "";
}

