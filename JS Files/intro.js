 click1=0;

      function topografie(){
         if(click1%2==0){
      document.getElementsByClassName("topo")[0].innerHTML="felie (secțiune)";
      document.getElementsByClassName("topo")[0].style.backgroundColor="rgba(0,0,0,0.8)";
   }
      else{
      document.getElementsByClassName("topo")[0].innerHTML="tomos";
      document.getElementsByClassName("topo")[0].style.backgroundColor="rgb(252,122,153)";
   }
      click1++;
   }


      click2=0;

      function topografie2(){
         if(click2%2==0)
         {
      document.getElementsByClassName("topo")[1].innerHTML="scriere";
      document.getElementsByClassName("topo")[1].style.backgroundColor="rgba(0,0,0,0.8)";
   }
      else
      {
      document.getElementsByClassName("topo")[1].innerHTML="graphia";
      document.getElementsByClassName("topo")[1].style.backgroundColor="rgb(255, 80, 122)";
   }
   click2++;
   }