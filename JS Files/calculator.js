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
},
]

let chosenValue;

function changeValues(x){
	for (let i=0;i<radiatii.length;i++)
		if(radiatii[i].regiune==x) 
		{
			document.getElementsByClassName("doza")[0].innerHTML=radiatii[i].radiatie + " mSv";
			document.getElementsByClassName("perioada")[0].innerHTML=radiatii[i].perioada;
			document.getElementsByClassName("risc")[0].innerHTML=(radiatii[i].radiatie/2000).toFixed(6) + " %";
			document.getElementsByClassName("numar")[0].innerHTML=Math.floor(100/(radiatii[i].radiatie/2000));
		}
}

function verify(){
chosenValue=document.getElementsByTagName("select")[0].value;
changeValues(chosenValue);
}




