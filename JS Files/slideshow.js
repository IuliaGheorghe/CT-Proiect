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


function previousImage(){
	if (curentIndex==0) curentIndex=6;
	else
	curentIndex--;
	curentImage.src=imagesSources[curentIndex];
}

function nextImage(){
	if (curentIndex==6) curentIndex=0;
	else
	curentIndex++;
	curentImage.src=imagesSources[curentIndex];
}