let surseImagini=[
"../Resources/Images/CT Components - Images/tunel.png",
"../Resources/Images/CT Components - Images/detectoare.png",
"../Resources/Images/CT Components - Images/masa.png",
"../Resources/Images/CT Components - Images/sursa.png",
"../Resources/Images/CT Components - Images/monitor.png",
"../Resources/Images/CT Components - Images/computer.png",
"../Resources/Images/CT Components - Images/stocare.png"


]

let verifClick =[];
let clickIndex=[];

for(let i=0;i<7;i++)
        verifClick[i]=0;

    
function wasClicked(x){
        verifClick[x]++;
        clickIndex.push(x);
        console.log("Initial " + clickIndex);
        return verifClick[x];
}


function compoExpFun(x){
   
    	if(wasClicked(x)==1)
    		{
    			document.getElementsByClassName("compoExp")[x].style.display="flex";
                document.getElementsByTagName("img")[0].src=surseImagini[x];
    			document.getElementsByTagName("li")[2*x].style.color="#fff";
    			document.getElementsByTagName("li")[2*x].style.backgroundColor="rgba(0,0,0,0.8)";
    		}

        else
    		{
    			document.getElementsByClassName("compoExp")[x].style.display="none";

                console.log(clickIndex.length);
                console.log("Here" + clickIndex)
                // clickIndex.splice(clickIndex.length-2,2);

                clickIndex.splice(clickIndex.length-1,1);

                for(let i=0;i<clickIndex.length;i++)
                    if(clickIndex[i]===x) clickIndex.splice(i,1);

                console.log("Return " + clickIndex);

                if(clickIndex.length!==0)
                    {
                        document.getElementsByTagName("img")[0].src=surseImagini[clickIndex[clickIndex.length-1]];
                    }
                else
                document.getElementsByTagName("img")[0].src="../Resources/Images/CT Components - Images/default.png";
    			document.getElementsByTagName("li")[2*x].style.color="#000";
    			document.getElementsByTagName("li")[2*x].style.backgroundColor="#ddd";
                verifClick[x]=0;
    		}


}