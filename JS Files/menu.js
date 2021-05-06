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
