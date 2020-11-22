

var mybutton = document.getElementById("myBtn");



var topFunction = function() {
  if (window.scrollY != 0) {
  
      window.scrollTo(0, 0 );
    
    }
  
};

window.onscroll = function() {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header2");
    mybutton.style.display = "block";
  } else {
    header.classList.remove("sticky-header2");
    mybutton.style.display = "none";
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var Ano = 1;
function about(x){

  Ano= Ano + x;

  if(Ano >2 ){
    Ano=2;

  }
  if(Ano < 1 ){
    Ano=1;
  }
  var A = 'A'+ Ano;

  

  document.getElementById("A1").style.display="none";
  document.getElementById("A2").style.display="none";

  
  
  document.getElementById(A).style.display="block";

}



function ScrollFunction(elementId){
  var ElementId = document.getElementById(elementId);
  window.scrollTo(0,ElementId.offsetTop-90);
}


var OurSlide = 1
function OurTour(x){
  OurSlide += x;
  if(OurSlide>3){OurSlide=3}
  if(OurSlide<1){OurSlide=1}
  var name = 'O'+ OurSlide;
  document.getElementById("O1").style.display="none";
  document.getElementById("O2").style.display="none";
  document.getElementById("O3").style.display="none";


  document.getElementById(name).style.display="block";
}