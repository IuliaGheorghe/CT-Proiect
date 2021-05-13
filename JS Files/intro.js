let clicksOnComponents=[0, 0]

function topografie(x){

   if(clicksOnComponents[x]==0){

      if(x==0)
         document.getElementsByClassName("topo")[x].innerHTML="felie (secțiune)";
      else
         document.getElementsByClassName("topo")[x].innerHTML="scriere";
      
      document.getElementsByClassName("topo")[x].style.backgroundColor="rgba(0,0,0,0.8)";
      clicksOnComponents[x]=1;
   }

   else{
      if(x==0)
         document.getElementsByClassName("topo")[x].innerHTML="tomos";
      else
         document.getElementsByClassName("topo")[x].innerHTML="graphia";
      
      document.getElementsByClassName("topo")[x].style.backgroundColor="rgb(252,122,153)";
      clicksOnComponents[x]=0;
   }
      
}
