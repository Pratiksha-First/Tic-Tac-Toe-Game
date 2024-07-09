let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let newbtn= document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let turn0= true;
// console.log(turn0);

//store winning pattern

let winPatterns= [[0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


const resetGame= ()=>{
    turn0= true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
//  console.log(box);
     box.addEventListener("click",()=>{
     console.log("box was clicked");
//  
      if(turn0===true){
        box.innerText="0";
        box.style.color="black";
        turn0= false;
        box.disabled=true;
      } else {
        box.innerText="X";
        box.style.color="white";
        turn0=true;
        box.disabled=true;
      }
      
    checkWinner();    
});
});

const disableBoxes= ()=>{
    for (let box of boxes){
        box.disabled= true;
    }}

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(Winner)=>{
     msg.innerText=`Congratulations! Winner is ${Winner}`;
     msgContainer.classList.remove("hide");
     
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText); 
            let post1Val = boxes[pattern[0]].innerText;
            let post2Val = boxes[pattern[1]].innerText;
            let post3Val = boxes[pattern[2]].innerText;

            if (post1Val != "" && post2Val != "" && post3Val != ""){
                if(post1Val === post2Val && post2Val === post3Val){
                   console.log("winner", post1Val);
                   showWinner(post1Val);
                   disableBoxes();
            }}
}}

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click",resetGame);
