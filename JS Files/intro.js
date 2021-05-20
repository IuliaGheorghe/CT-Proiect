// stocheaza restul impartirii la 2 al numarului de clickuri pe fiecare casuta de topografie

let clicksOnComponents=[0, 0]

function topografie(x){

   pe click par, in functie de parametrul x care sugereaza elementul pentru care se face descrierea, se afiseaza rezultatul
   se 

   if(clicksOnComponents[x]==0){

      if(x==0)
         document.getElementsByClassName("topo")[x].innerHTML="felie (secțiune)";
      else
         document.getElementsByClassName("topo")[x].innerHTML="scriere";

      //se schimba culoarea chenarului cu topografia 
      
      document.getElementsByClassName("topo")[x].style.backgroundColor="rgba(0,0,0,0.8)";
      clicksOnComponents[x]=1;
   }

   // pe numar par de clickuri pe elementul x se revine la textul initial in chenar
   // se revine din nou la culoarea setata in intro.css
   // re reseteaza in vectorul clicksOnComponents valoarea 0 (aferenta restului impartirii la 2 a clickului cu numar par)

   else{
      if(x==0){
         document.getElementsByClassName("topo")[x].innerHTML="tomos";
         document.getElementsByClassName("topo")[x].style.backgroundColor="rgb(252,122,153)";
      }
      else
         {
            document.getElementsByClassName("topo")[x].innerHTML="graphia";
            document.getElementsByClassName("topo")[x].style.backgroundColor="rgb(255, 80, 122)";
         }
      
      
      clicksOnComponents[x]=0;
   }
      
}
