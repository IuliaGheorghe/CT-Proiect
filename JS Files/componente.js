let verifClick =[];

for(let i=0;i<7;i++)
    		verifClick[i]=0;
    
function wasClicked(x){
        verifClick[x]++;
        return verifClick[x];
}


function compoExpFun(x){
   
    	if(wasClicked(x)%2!=0)
    		{
    			document.getElementsByClassName("compoExp")[x].style.display="flex";
    			document.getElementsByTagName("li")[2*x].style.color="#fff";
    			document.getElementsByTagName("li")[2*x].style.backgroundColor="rgba(0,0,0,0.8)";
    		}

        else
    		{
    			document.getElementsByClassName("compoExp")[x].style.display="none";
    			document.getElementsByTagName("li")[2*x].style.color="#000";
    			document.getElementsByTagName("li")[2*x].style.backgroundColor="#ddd";
    		}


}