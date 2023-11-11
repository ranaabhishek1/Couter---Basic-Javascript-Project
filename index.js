
let counter=document.querySelector("#counter")
let resetbtn=document.querySelector("#resetbtn")
let addbtn=document.querySelector("#addbtn")


let counterValue=0

addbtn.addEventListener("click",function(){ 
    counter.textContent=++counterValue

}
)

resetbtn.addEventListener("click",function(){ 
if( counter.textContent=++counterValue){
    counter.textContent=counterValue=0
}
   
}
)