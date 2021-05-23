let radiatii=[
{
	regiune:"CT Abdomen și Pelvis",
	radiatie:7.7,
	perioada:"2.6 ani"
},
{
	regiune:"CT Colonografie",
	radiatie:6,
	perioada:"2 ani"
},
{
	regiune:"CT Creier",
	radiatie:1.6,
	perioada:"7 luni"
},
{
	regiune:"CT Cap și Gât",
	radiatie:1.2,
	perioada:"5 luni"
},
{
	regiune:"CT Coloana Vertebrală",
	radiatie:8.8,
	perioada: "3 ani"
},
{
	regiune:"CT Torace",
	radiatie:6.1,
	perioada: "2 ani"
},
{
	regiune:"CT Examinare Cancer Pulmonar",
	radiatie:1.5,
	perioada: "6 luni"
},
{
	regiune:"CT Fascicul Con Dentar",
	radiatie:0.18,
	perioada: "22 zile"
},
{
	regiune:"Angiografie - CT Coronarian",
	radiatie: 8.7,
	perioada: "3 ani"
},
{
	regiune:"CT Cardiac (Calcium Scoring)",
	radiatie:1.7,
	perioada: "6 luni"
},
{
	regiune:"Angiografie - CT Non-cardiac",
	radiatie:5.1,
	perioada: "2 ani"
},
{
	regiune:"CT Emisie Pozitroni",
	radiatie:22.7,
	perioada:"3.3 ani"
}
]

let chosenValue;

function writeValues(i){
	document.getElementsByClassName("doza")[0].innerHTML=radiatii[i].radiatie + " mSv";
	document.getElementsByClassName("perioada")[0].innerHTML=radiatii[i].perioada;
	document.getElementsByClassName("risc")[0].innerHTML=(radiatii[i].radiatie*100/2000).toFixed(6) + " %";
	document.getElementsByClassName("numar")[0].innerHTML=Math.floor(100/(radiatii[i].radiatie*100/2000));
}

function changeValues(chosen){
	for (let i=0;i<radiatii.length;i++)
		if(radiatii[i].regiune==chosen) 
			return i;
			
}

function verify(x){
   chosenValue=document.getElementsByTagName("select")[x].value;
   writeValues(changeValues(chosenValue));
}


// for (let i=0; i<document.getElementsByClassName("chebx").length;i++)
// 	if(document.getElementsByClassName("chebx")[i].checked=="true") 

// console.log(document.getElementsByClassName("chebx").length);

let checkboxValues=[];

for(let i=0;i<document.getElementsByClassName("chebx").length;i++)
    checkboxValues[i]=0;
// for (let i=0;i<=document.getElementsByClassName("chebx").length-1;i++)
// 	// console.log(i);
//  //    console.log(document.getElementsByClassName("chebx")[i]);
//    if(document.getElementsByClassName("chebx")[i].checked==false) checkboxValues[i]=0;
// else 
// 	checkboxValues[i]=Number(document.getElementsByClassName("chenb")[i].value);

function recalculareDoza(){
	let totalDose=0;
	for(let i=0;i<document.getElementsByClassName("chebx").length;i++)
		totalDose+=checkboxValues[i]*Number(radiatii[i].radiatie);

	document.getElementsByClassName("composed")[0].innerHTML=totalDose.toFixed(3) + "mSv";
	document.getElementsByClassName("composed")[1].innerHTML=(totalDose*100/2000).toFixed(6) + "%";

	console.log(totalDose);

}

function changedCheck(n){
	if(document.getElementsByClassName("chebx")[n].checked==false) {
		checkboxValues[n]=0;
		document.getElementsByClassName("chenb")[n].disabled=true;
	}
else 
	{
		document.getElementsByClassName("chenb")[n].disabled=false;
		checkboxValues[n]=Number(document.getElementsByClassName("chenb")[n].value);
	}
	console.log(checkboxValues);

	recalculareDoza();
}

function changedNb(n){
	checkboxValues[n]=Number(document.getElementsByClassName("chenb")[n].value);
	console.log(checkboxValues);

	recalculareDoza();
}

// console.log(checkboxValues);
// console.log(typeof document.getElementsByClassName("chenb")[0].value);


// let totalDose=0;
// function verifyCompo(x){

// 	let el=document.getElementsByTagName("label")[x];
// 	let multiple=;
// 	if(document.getElementsByClassName("chebx")[x].checked==true) 
//        {
//        	multiple.disabled = false;
//        	// console.log(el);
//        	// console.log(el.textContent);
//        	console.log(multiple);
//        	console.log(multiple.textContent);
//         totalDose+=Number(radiatii[changeValues(el.textContent)].radiatie)*Number(multiple.value);
//         console.log(totalDose);

//        }
//    else
//    	   multiple.disabled = true;

//     console.log(totalDose);
//    	document.getElementsByClassName("composed")[0].innerHTML=totalDose.toFixed(3) + "mSv";
//    	document.getElementsByClassName("composed")[1].innerHTML=(totalDose/2000).toFixed(6) + "%";
// }



// ****************************
// Doze Cumulate
// ****************************

// let doseVal;
// let choices=[0];

// let cName;

// function verifyComposed(){
// 	console.log(activ);
//   console.log("entered");
//   chosenValue= document.getElementsByTagName("select")[document.getElementsByTagName("select").length-1].value;
//   i = changeValues(chosenValue);



  // ind=Number(cName.substring(1));
//   console.log(cI);
//   choices[cI]=i;

//   console.log(choices);
//   let el=document.getElementsByClassName("composed")[0].innerHTML;
  
//   doseVal=Number(el)+ Number(radiatii[i].radiatie);

//   document.getElementsByClassName("composed")[0].innerHTML=doseVal.toFixed(2);
//   document.getElementsByClassName("composed")[1].innerHTML=(doseVal/2000).toFixed(6) + " %";

// }

// let cI=0;

// function deleteOption(){
// 	let x = document.getElementById("selects").childElementCount;
// 	if(x!=1)
// 	{
// 		document.getElementById("selects").removeChild(document.getElementById("selects").lastChild);
// 		cI--;
// 	}
//     else 
//     	alert("Pentru a actiona acest buton trebuie sa existe cel putin doua liste de optiuni!");
//     verifyComposed();
// }


// function addOption(){

// 	let form = document.getElementById("selects").getElementsByTagName("select")[0];
// 	let clona = form.cloneNode(true);

// 	document.getElementById("selects").appendChild(clona);
// 	cI++;
// 	// cName="s"+cI;
// 	// clona.className = clona.className.replace("s0", cName);
// 	// console.log(cName);
// 	verifyComposed();
// }




