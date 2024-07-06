/*global variable declaration area here
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
let boxes=document.querySelectorAll(".box");
//console.log(boxes);
let resetBtn=document.querySelector(".reset-btn");
let winning_puttern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turn=true;
let count=0;
//  for (const patturn of winning_puttern) {
//      let pos1=patturn[0];
//      let pos2=patturn[1];
//      let pos3=patturn[2];
//      console.log(pos1,pos2,pos3);
    
//  }
/* end here globar declaration here */

/*add eventlisener in all button
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
resetBtn.addEventListener('click',()=>{
    document.querySelector("#winnershow").innerHTML="";
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
})
boxes.forEach((box)=>{   
box.addEventListener('click',()=>{
     if(turn){
        box.innerText='O';
        turn=false;
     }
     else{
        box.innerText='X';
        turn=true;
     }
       box.disabled=true;
       count++;
     let winner=findWinner();
     if(count===9 && winner){
        gameDrow();

     }
})
});
function findWinner(){
    for(let patturn of winning_puttern){
        let pos1=boxes[patturn[0]].innerHTML;
        let pos2=boxes[patturn[1]].innerHTML;
        let pos3=boxes[patturn[2]].innerHTML;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1==pos2 && pos2==pos3 && pos3 ==pos1){
                showWinner(pos1);
                // console.log(`winner is ${pos1}`);
                return true;
            }
        }

    }
}
function gameDrow(){
    let h2=document.createElement('h2');
     h2.innerHTML="game is draw play again press reset btn";
    document.querySelector('#winnershow').appendChild(h2);

}
function showWinner(value){
    let h2=document.createElement('h2');
    h2.innerHTML=`winner is ${value}`
    h2.style.color="red";
    // let text=document.createTextNode(`winner is ${value}`);
    // h2.appendChild(text);
    document.querySelector('#winnershow').appendChild(h2);
}