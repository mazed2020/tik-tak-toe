/*global variable declaration area here
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
let boxes=document.querySelectorAll(".box");
//console.log(boxes);
let resetBtn=document.querySelector(".reset-btn");
let winning_puttern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turn=true;
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
    boxes.forEach((box)=>{
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
})
})