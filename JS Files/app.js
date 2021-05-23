
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDE9RYfYHty2oPA48oHKgzYVa6YwRoRqzQ",
    authDomain: "analize-medicale-d33a4.firebaseapp.com",
    projectId: "analize-medicale-d33a4",
    storageBucket: "analize-medicale-d33a4.appspot.com",
    messagingSenderId: "245758526987",
    appId: "1:245758526987:web:1aac918fc906cdc579a90e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference Collection

  let datePacient = firebase.database().ref("People");



let nume=document.getElementById("nume");
let cnp=document.getElementById("CNP");
let code=document.getElementById("code");

let clinica=document.getElementsByTagName("select")[0];

document.querySelector("form").addEventListener("submit", submitData);

let identif;

function checkValability(db, dbLength, cnp, code, clinica){
   
   for(let i=1;i<=dbLength;i++)
   	{
   		identif="P"+i;

   		if(db[identif].CNP==cnp) 
   		  if(db[identif].Code==code)
   		  	if(db[identif].Clinica==clinica)
   		  		return 1;
   		else
   		return 0;
   	}
}

function checkData(nume, cnp, code, clinica){
   


   firebase.database().ref("People").once('value', (snapshot) => {
   let db=snapshot.val();
   let dbLength =Object.keys(db).length;

   if(checkValability(db, dbLength, cnp, code, clinica)) {

   	document.querySelector("#rezultat").querySelector("h1").innerText="Bună, "+nume+ "!";
    document.querySelector("#rezultat").querySelector("h2").innerText="Mai jos poți găsi rezultatele analizelor tale!";
   	// alert("Hello!");

   	if(db[identif].CT==" ") {
   		document.querySelector("#rezultat").querySelector("h2").innerText="Ne pare rău! Rezultatele tale încă nu au sosit. Revino mai tarziu!";
   		document.querySelector("#bttns").style.display="none";
   	}
   	document.querySelector("form").style.display="none";
   	document.querySelector("#rezultat").style.display="flex";

   	document.querySelector("#rezultat").getElementsByTagName("a")[0].href=db[identif].CT;
   	document.querySelector("#rezultat").getElementsByTagName("a")[1].href=db[identif].Interpretare;

   }
   	else {
   		alert("Ne pare rău! Nu te-am găsit în baza de date.");
   		location.reload();
   	}

   });
}



function submitData(e){

e.preventDefault();

nume=nume.value;
cnp=cnp.value;
code=code.value;
clinica=clinica.value;

if(cnp.length!=13) {
  alert("CNP invalid!");
  location.reload();
}

if(code.length<6) {
  alert("Cod invalid!");
  location.reload();
}

checkData(nume, cnp, code, clinica);

return 0;
}

