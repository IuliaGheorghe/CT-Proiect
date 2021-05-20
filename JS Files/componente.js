// vector de surse pentru imaginile cu componentele

let surseImagini=[
"../Resources/Images/CT Components - Images/tunel.png",
"../Resources/Images/CT Components - Images/detectoare.png",
"../Resources/Images/CT Components - Images/masa.png",
"../Resources/Images/CT Components - Images/sursa.png",
"../Resources/Images/CT Components - Images/monitor.png",
"../Resources/Images/CT Components - Images/computer.png",
"../Resources/Images/CT Components - Images/stocare.png"


]

 // --permite verificarea paritatii clickurilor pe fiecare element
 // --contine valori de 0, 1 si 2 
 // --pe click impar deschide descrierea si imaginea corespunzatoare
 // --pe click par inchide descrierea si imaginea corespunzatoare
let verifClick =[];

// mentine evidenta elementelor accesate stocand fiecare index 
let clickIndex=[];


// initial numarul de click-uri este 0, deci vectorul de verificare va fi initializat cu valoarea 0 de 7 ori (avem 7 componente)
for(let i=0;i<7;i++)
        verifClick[i]=0; 

    
function wasClicked(x){
        
        // In urma click-ului pe elementul x, functia mareste valoarea pentru x in vectorul verifClick, si adauga indexul x la coada vectorului clickIndex

        // Functia returneaza valoarea lui x din verifClick pentru ca aceasta sa fie prelucrata in functiile ulterioare


        verifClick[x]++;
        clickIndex.push(x);
        // console.log("Initial " + clickIndex);
        return verifClick[x];
}


function compoExpFun(x){
   
    	if(wasClicked(x)==1)

                // pentru click impar se fac afisarile
    		{
    			document.getElementsByClassName("compoExp")[x].style.display="flex";
                document.getElementsByTagName("img")[0].src=surseImagini[x];

                // numele componentelor vor fi mereu stocata sub index par in vectorul de elemente din lista, motiv pentru care aici se vor face modificarile pentru a obtine un bg si o culoare diferita pe elementul de tip toggle bar
    			document.getElementsByTagName("li")[2*x].style.color="#fff";
    			document.getElementsByTagName("li")[2*x].style.backgroundColor="rgba(0,0,0,0.8)";
    		}

        else
    		{   

                // pentru click par se ascunde descrierea si se reinitializeaza numarul de click-uri la 0, continuandu-se cu paritatea
    			document.getElementsByClassName("compoExp")[x].style.display="none";

                // console.log(clickIndex.length);
                // console.log("Here" + clickIndex)


                // Pentru a pastra imaginea asa cum am prezentat in componente.html (../HTML Files/componente.html) se taie din vectorului care contine secventa de indecsi ultimul element si elementul ce contine indexul de click, indiferent de pozitia lui in vector

                clickIndex.splice(clickIndex.length-1,1);

                for(let i=0;i<clickIndex.length;i++)
                    if(clickIndex[i]===x) clickIndex.splice(i,1);

                // console.log("Return " + clickIndex);

                if(clickIndex.length!==0)
                    {
                        document.getElementsByTagName("img")[0].src=surseImagini[clickIndex[clickIndex.length-1]];
                    }

                // Daca nu mai extista niciun element in vectorul de indecsi se revine la imaginea default cu tonuri de gri
                else
                document.getElementsByTagName("img")[0].src="../Resources/Images/CT Components - Images/default.png";


                // la inchiderea explicatiei toggle bar-ul cu numele componente revine la stilizarea implicita (text negru, fundal gri)
    			document.getElementsByTagName("li")[2*x].style.color="#000";
    			document.getElementsByTagName("li")[2*x].style.backgroundColor="#ddd";
                verifClick[x]=0;
    		}


}