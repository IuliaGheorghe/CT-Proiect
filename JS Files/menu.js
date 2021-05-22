    // pageNo=null la bibliografie unde nu trebuie evidentiata nicio casuta din meniu 

    if(pageNo!==null)
    {
      document.getElementsByClassName("menuElement")[pageNo].style.color="rgb(255, 62, 108)";
     
    document.getElementById("mobile-menu").getElementsByTagName("a")[pageNo].style.backgroundColor="rgb(255, 62, 108)";
    document.getElementById("mobile-menu").getElementsByTagName("a")[pageNo].style.color="#fff";
  }


    function menuHover(x){
      // pe hover se evidentiaza elementul asupra caruia se face hover si se face vizibil overlayul
      document.getElementsByClassName("menuElement")[x].style.color="rgb(255, 80, 122)";
      document.getElementsByClassName("menuElementExp")[x].style.display="flex";

      document.getElementById("contentOverlay").style.display="flex";
    }

    function menuHoverOut(x){
      // outofhover se revine la proprietatile initiale a casutelor din meniu si se ascunde overlay-ul
      document.getElementsByClassName("menuElement")[x].style.color="#fff";
      document.getElementsByClassName("menuElementExp")[x].style.display="none";
      if(pageNo!==null)
      document.getElementsByClassName("menuElement")[pageNo].style.color="rgb(255, 62, 108)";
      

      document.getElementById("contentOverlay").style.display="none";
    }

    
    // parametru ce ofera o proprietate de toggle pentru meniul de tip hamburger specific variantei de tableta/mobil
    let mobileMenu=0;


    function openMobileMenu(){
      if(mobileMenu==0){
        document.getElementById("mobile-menu").style.display="block";
        mobileMenu++;
        document.getElementById("contentOverlay").style.display="flex";
      }
      else{
        document.getElementById("mobile-menu").style.display="none";
         mobileMenu=0;
         document.getElementById("contentOverlay").style.display="none";
      }
    }




// Theme Changer Test - Useless


// function changeCol(){
//   console.log(index);
//   if(index==1){
//     document.documentElement.style.setProperty('--bgCol', '#000');
//     // document.getElementById('content').style.backgroundColor="#000";
//     // document.getElementById('content').style.color="#fff";
//   }
//   else{
//     document.documentElement.style.setProperty('--bgCol', '#fff');
//     // document.getElementById('content').style.backgroundColor="#fff";
//     // document.getElementById('content').style.color="#000";
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