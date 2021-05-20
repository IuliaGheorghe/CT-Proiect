// surse imagini slideshow

let imagesSources=[

"../Resources/Optimised Images/SlideShow/1-min.jpg",
"../Resources/Optimised Images/SlideShow/2-min.jpg",
"../Resources/Optimised Images/SlideShow/3-min.jpg",
"../Resources/Optimised Images/SlideShow/4-min.jpg",
"../Resources/Optimised Images/SlideShow/5-min.jpg",
"../Resources/Optimised Images/SlideShow/6-min.jpg",
"../Resources/Optimised Images/SlideShow/7-min.jpg"

]

// da indexul curent din vectorul de surse al imaginii pe care ne aflam
let curentIndex=0;
let curentImage=document.getElementById("slideshow").getElementsByTagName("img")[0];
let circlesArray=document.getElementById("circles").getElementsByTagName("i");

// pastreaza indexul ultimei imagini pe care am vazut-o; util in special in cazul folosirii cerculetelor pentur navigare
let lastIndex=0;


function checkCurentIndex(){

	//tinand cont de faptul ca ultimei imagini observata i-a fost atribuita clasa .active, cautarea acestei clase in stringul returnat de metoda .className ne va ajuta sa-i indetificam indexul din pozitia in vectorul circlesArray 

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

	//se inlocuiesc clasele in asa fel incat imaginea curenta sa corespunda unui cerculet plin, iar imaginea precedent selectata sa reprimeasca un cerculet gol

	circlesArray[x].className = circlesArray[x].className.replace("fa-circle-o", "fa-circle");
	circlesArray[x].className = circlesArray[x].className.replace("inactiv", "active");
	circlesArray[lastIndex].className = circlesArray[lastIndex].className.replace("fa-circle", "fa-circle-o");
	circlesArray[lastIndex].className = circlesArray[lastIndex].className.replace("active", "inactiv");
}

function showImage(x){

	// face vizibila imaginea cu indexul x din vectorul de surse si apeleaza functia de evidentiere a cerculetelor
	curentImage.src=imagesSources[x];
	circlesMagic(x);
}

function previousImage(){

	//indexul curent va fi dependent de optiunea cu care alegem sa facem navigarea (sageti, cerculete), fapt ce va fi determinat in functia checkCurentIndex()    

	curentIndex=checkCurentIndex();

	// inainte de a modifica indexul curent, ii stocam valoarea in variabila ultimului index accesat

	lastIndex=curentIndex;

	// daca suntem pe index 0 si nu mai putem da inapoi repornim algoritmul de la ultimul element din vectorul de surse, altfel doar scadem o unitate din indexul curent si intram in functia de afisare
	
	if (curentIndex==0) curentIndex=6;
	else
	curentIndex--;
	showImage(curentIndex);
}

function nextImage(){

    //indexul curent va fi dependent de optiunea cu care alegem sa facem navigarea (sageti, cerculete), fapt ce va fi determinat in functia checkCurentIndex()

	curentIndex=checkCurentIndex();

	// inainte de a modifica indexul curent, ii stocam valoarea in variabila ultimului index accesat

	lastIndex=curentIndex;

	// daca suntem pe index 6 si nu mai putem merge inainte repornim algoritmul de la primul element din vectorul de surse (index=0), altfel doar crestem cu o unitate  indexul curent si intram in functia de afisare
	
	if (curentIndex==6) curentIndex=0;
	else
	curentIndex++;
	showImage(curentIndex);
}


