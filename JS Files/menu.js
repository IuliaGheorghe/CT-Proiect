    document.getElementsByClassName("menuElement")[pageNo].style.color="rgb(255, 62, 108)";

    function menuHover(x){
      document.getElementsByClassName("menuElement")[x].style.color="rgb(255, 80, 122)";
      document.getElementsByClassName("menuElementExp")[x].style.display="flex";

      if(pageNo!==0)
      document.getElementById("contentOverlay").style.display="flex";
    }

    function menuHoverOut(x){
      document.getElementsByClassName("menuElement")[x].style.color="#fff";
      document.getElementsByClassName("menuElementExp")[x].style.display="none";
      document.getElementsByClassName("menuElement")[pageNo].style.color="rgb(255, 62, 108)";
      
      if(pageNo!==0)
      document.getElementById("contentOverlay").style.display="none";
    }


// index=0;
// console.log(index);

// function changeCol(){
//   console.log(index);
//   if(index==1){
//     document.getElementById('content').style.backgroundColor="#000";
//     document.getElementById('content').style.color="#fff";
//   }
//   else{
//     document.getElementById('content').style.backgroundColor="#fff";
//     document.getElementById('content').style.color="#000";
//   }
// }



// function dark(){
//   index=1;
//   console.log(index);
//   changeCol();
// }

// function light(){
//    index=0;
//   changeCol();

// }

// changeCol();