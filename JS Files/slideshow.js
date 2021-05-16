let imagesSources=[

"../Resources/Images/SlideShow Images/1.jpg",
"../Resources/Images/SlideShow Images/2.jpg",
"../Resources/Images/SlideShow Images/3.jpg",
"../Resources/Images/SlideShow Images/4.jpg",
"../Resources/Images/SlideShow Images/5.jpg",
"../Resources/Images/SlideShow Images/6.jpg",
"../Resources/Images/SlideShow Images/7.jpg"

]

let curentIndex=0;
let curentImage=document.getElementById("slideshow").getElementsByTagName("img")[0];
let circlesArray=document.getElementById("circles").getElementsByTagName("i");
let lastIndex=0;


function checkCurentIndex(){

	for(let i=0;i<circlesArray.length;i++)

		// console.log(i);
		// console.log(circlesArray[i].className);
		// console.log(circlesArray[i].className.includes("active"));
			if(circlesArray[i].className.includes("active"))
				lastIndex=i;

			// console.log(lastIndex);

			return lastIndex;
}

function circlesMagic(x){

	// console.log(circlesArray);

	checkCurentIndex();

	circlesArray[x].className = circlesArray[x].className.replace("fa-circle-o", "fa-circle");
	circlesArray[x].className = circlesArray[x].className.replace("inactiv", "active");
	circlesArray[lastIndex].className = circlesArray[lastIndex].className.replace("fa-circle", "fa-circle-o");
	circlesArray[lastIndex].className = circlesArray[lastIndex].className.replace("active", "inactiv");
}

function showImage(x){
	curentImage.src=imagesSources[x];
	circlesMagic(x);
}

function previousImage(){

	curentIndex=checkCurentIndex();

	lastIndex=curentIndex;
	
	if (curentIndex==0) curentIndex=6;
	else
	curentIndex--;
	showImage(curentIndex);
}

function nextImage(){

	curentIndex=checkCurentIndex();

	lastIndex=curentIndex;
	
	if (curentIndex==6) curentIndex=0;
	else
	curentIndex++;
	showImage(curentIndex);
}