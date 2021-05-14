
    function infoHov(x){
      document.getElementsByClassName("image")[x].style.width="50%";
      document.getElementsByClassName("image")[x].style.borderRadius="20px 0 0 20px";
      document.getElementsByClassName("info")[x].style.display="block";
      document.getElementsByTagName("li")[x].style.display="flex";
      document.getElementsByClassName("image")[x].style.flexShrink="0";


    }

    function infoHovOut(x){
      document.getElementsByClassName("image")[x].style.width="100%";
      document.getElementsByClassName("image")[x].style.borderRadius="20px";
      document.getElementsByClassName("info")[x].style.display="none";
    }
