const number = document.getElementById("number")
const low = document.getElementsByClassName("low")
const add = document.getElementsByClassName("add")

function adder(){
    number.textContent = Number(number.textContent)+1
    if(number.textContent>0){
        number.style.color="Green"
    }
    if(number.textContent==0){
        number.style.color="white"
    }
}

function lower(){
    number.textContent = Number(number.textContent)-1
    if(number.textContent<0 ){
        number.style.color="Red"
    }
    if(number.textContent==0){
        number.style.color="white"
    }
}
function reseter(){
    number.textContent=0
    number.style.color="white"
}