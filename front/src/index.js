const butLogin          = document.getElementById("butLogin");
const butRegistration   = document.getElementById("butRegistration");
const textArea          = document.getElementById("textArea");

butLogin.addEventListener("click", ()=>{
    let promise = fetch("http://localhost:3000/login");
    promise
    .then((answer)=>{
        return answer.text();
    })
    .then((answer)=>{
        //console.log(answer1);
        textArea.innerHTML = answer;
    })
    .catch((e)=>{
        textArea.innerHTML = "";
        console.log(e);        
    })
    
})

butRegistration.addEventListener("click", ()=>{
    let promise = fetch("http://localhost:3000/registration");
    promise
    .then((answer)=>{
        return answer.text();
    })
    .then((answer)=>{
        textArea.innerHTML = answer;
    })
    .catch((e)=>{
        textArea.innerHTML = "";
        console.log(e);        
    })
})