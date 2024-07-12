//CAROUSEL
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 20,
    loop: true,
    dots: true,
    autoplayTimeOut: 5000,
    autoplayHoverPause: true,
    autoplay: true,
    items: 3,
  });
});

//MENU-HAMBURGER
const menuHamburger = document.querySelector(".fa-bars");
const linkchild = document.querySelector(".linkchild");

menuHamburger.addEventListener("click", () => {
  linkchild.classList.toggle("mobile-menu");
  document.body.classList.toggle("hideoverflow");
});
document.querySelector(".menu-btn").addEventListener("click", function () {
  document.querySelector(".menu-btn i").classList.toggle("active");
});
//DARK-TOGGLE
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  //changement de theme
  document.body.classList.toggle("dark");
});

//SCROLLREVEAL ANIMATION
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1500,
  delay: 400,
});

ScrollReveal().reveal(
  ".titlePar, .titleParComp, .titleParProj, .titleParCont",
  {
    delay: 500,
    origin: "left",
  }
);

ScrollReveal().reveal(".image", {
  delay: 500,
  origin: "top",
});

ScrollReveal().reveal(".descri", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".lorem", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".circle-wrap", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".ratio p", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".icons .row", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".icons .row", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".text .txt", {
  delay: 500,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".barsContainer .bars", {
  delay: 500,
  origin: "left",
  interval: 200,
});

//LANGUAGE
let lang_eng;

lang_eng = document
  .getElementById("eng")
  .addEventListener("click", function () {
    document.querySelector(".router-link1").innerText = "Home";
    document.querySelector(".router-link2").innerText = "About";
    document.querySelector(".router-link3").innerText = "Skills";
    document.querySelector(".router-link4").innerText = "Contact";
    document.querySelector(".text1").innerHTML = "Wellcome, I'm";
    document.querySelector(".text3").innerHTML =
      "Passionate web developer with 4 years of experience creating high-performance websites and applications";
    document.querySelector(".descri").innerHTML =
      'My name is Rakotondravao Andriniaina, I am 23 years old. Being technology and electronic gadgets since I was a child, I started to code when I was 18. In a computer, I am interested in everything, whether it\'s hardware or software. It\'s in Euro Truck Simulator that my passion took off to know a little more about the world of codes and developpement. With this game I started to initiate myself in 3D modeling and graphic tools by building mods on the game. This experience led me today to application developpement. I deepened my knwoledge at <a href="https://esti.mg/" id="link">Ecole supérieur des Technologies de l’information </a> in 2019 and where and where I obtained my Bachelor\'s degree.';
    document.querySelector(".boutn a").innerHTML = "Want my resume ?";
    document.querySelector(".titlePar").innerText = "About me";
    document.querySelector(".titleParComp").innerText = "What I can";
    document.querySelector(".titleParProj").innerText = "Realised project";
    document.querySelector(".titleParIdea").innerText = "An idea for a project";
    document.querySelector(".lorem").innerHTML =
      "Since 2018, I started coding with the C language, When I started studying at ESTI, we started with Python on which I did a mini-game while still a beginner in the language. With Python, I know some frameworks like Django, Flask, Socket.IO. I used these frameworks in constious projects like a realtime chat app, payment management, You can also see my other web developpement skills.";
    document.querySelector(".stacktitle").innerHTML = "Stack Skills";
    document.querySelector(".bdd").innerHTML = "Database[MySql]";
    document.getElementById("paiement").innerText = "Payment management";
    document.getElementById("vente").innerText =
      "Sales management for TV equipment";
    document.getElementById("discu").innerText = "Discussion platform";
    document.getElementById("ticket").innerText = "Ticket management";
    document.getElementById("ecole").innerText = "School absence management";
    document.getElementById("cours").innerText = "Course booking website";
    document.getElementById("label_email").innerText = "Your email";
    document.getElementById("label_message").innerText = "Your message";
    document.getElementById("btnSend").innerText = "Send";
  });


if (document.querySelector(".text1").innerHTML == "") {
  document.querySelector(".router-link1").innerText = "Accueil";
  document.querySelector(".router-link2").innerText = "A propos";
  document.querySelector(".router-link3").innerText = "Compétences";
  document.querySelector(".router-link4").innerText = "Contact";
  document.querySelector(".text1").innerHTML = "Bonjour, je suis";
  document.querySelector(".text3").innerHTML =
    "Développeur web passionné avec 4 années d'expérience dans la création de sites web et d'applications performants.";
  document.querySelector(".descri").innerHTML =
    "Mon nom est Rakotondravao Andriniaina, j'ai 23 ans. En étant passionné de technologie et des gadgets électronique depuis petit, j’ai commencé à coder à mes 18 ans. Dans un ordinateur, je suis intéressé par tout que ce soit en hardware ou en software. C'est dans Euro Truck Simulator que ma passion à pris d'avantage de connaître un peu plus sur l'univers des codes et du développement. Avec ce jeu j'ai commencé à m'initier dans la modélisation 3D et les outils graphiques en construisant des mods sur le jeu. Cette expérience m'a amené aujourd'hui au développement d'application. J’ai approfondi mes connaissances à l'<a href=\"https://esti.mg/\" id=\"link\">Ecole supérieur des Technologies de l’information </a> en 2019 et où j'ai passé mon diplôme de Licence.";
  document.querySelector(".boutn a").innerHTML = "Tu veux mon CV ?";
  document.querySelector(".titlePar").innerText = "A propos de moi";
  document.querySelector(".titleParComp").innerText = "Ce que je peux";
  document.querySelector(".titleParProj").innerText = "Projet réalisés";
  document.querySelector(".titleParIdea").innerText = "Une idée de projet ?";
  document.querySelector(".lorem").innerHTML =
    "Depuis 2018, j’ai débuté à coder avec le langage C. Quand j’ai commencé à étudier à l’ESTI, on a commencé avec Python sur laquelle j’ai fait un mini-jeu en étant encore débutant dans le langage. Avec Python, je connais quelque Framework comme Django, Flask, Socket.IO; j’ai utilisé ces Framework dans divers projets comme un Tchat en temps réel, gestion de paiement. Vous pouvez aussi voir mes autres compétences en développement Web.";
  document.querySelector(".bdd").innerHTML = "Base de donnée [MySql]";
  document.querySelector(".stacktitle").innerHTML = "Compétence stack";
  document.getElementById("paiement").innerText = "Gestionnaire de paiemenent"
  document.getElementById(
    "vente"
  ).innerText = "Gestion de vente matériel tv";
  document.getElementById("discu").innerText = "Plateforme de discussion";
  document.getElementById("ticket").innerText = "Gestion de ticket";
  document.getElementById("ecole").innerText = "Gestion d'absence d'une école";
  document.getElementById("cours").innerText = "Site de réservation de cours";
  document.getElementById("label_email").innerText = "Votre email";
  document.getElementById("label_message").innerText = "Votre message";
  document.getElementById("btnSend").innerText = "Envoyer";
}
document.getElementById("french").addEventListener("click", function () {
  document.querySelector(".router-link1").innerText = "Accueil";
  document.querySelector(".router-link2").innerText = "A propos";
  document.querySelector(".router-link3").innerText = "Compétences";
  document.querySelector(".router-link4").innerText = "Contact";
  document.querySelector(".text1").innerHTML = "Bonjour, je suis";
  document.querySelector(".text3").innerHTML ="Etudiant en informatique à l'Ecole Supérieur des Technologies de l'information";
  document.querySelector(".descri").innerHTML ="Mon nom est Rakotondravao Andriniaina, j'ai 22 ans. En étant passionné de technologie et des gadgets électronique depuis petit, j’ai commencé à coder à mes 18 ans. Dans un ordinateur, je suis intéressé par tout que ce soit en hardware ou en software. C'est dans Euro Truck Simulator que ma passion à pris d'avantage de connaître un peu plus sur l'univers des codes et du développement. Avec ce jeu j'ai commencé à m'initier dans la modélisation 3D et les outils graphiques en construisant des mods sur le jeu. Cette expérience m'a amené aujourd'hui au développement d'application. J’ai approfondi mes connaissances à l'<a href=\"https://esti.mg/\" id=\"link\">Ecole supérieur des Technologies de l’information </a> en 2019 et j’y suis actuellement en Licence III dans la branche Intégration et développement.";
  document.querySelector(".boutn a").innerHTML = "Tu veux mon CV ?";
  document.querySelector(".titlePar").innerText = "A propos de moi";
  document.querySelector(".titleParComp").innerText = "Ce que je peux";
  document.querySelector(".titleParProj").innerText = "Projet réalisés";
  document.querySelector(".titleParIdea").innerText = "Une idée de projet ?";
  document.querySelector(".lorem").innerHTML ="Depuis 2018, j’ai débuté à coder avec le langage C. Quand j’ai commencé à étudier à l’ESTI, on a commencé avec Python sur laquelle j’ai fait un mini-jeu en étant encore débutant dans le langage. Avec Python, je connais quelque Framework comme Django, Flask, Socket.IO. J’ai utilisé ces Framework dans divers projets comme un Tchat en temps réel, gestion de paiement. Vous pouvez aussi voir mes autres compétences en développement Web.";
  document.querySelector(".bdd").innerHTML = "Base de donnée [MySql]";
  document.querySelector(".stacktitle").innerHTML = "Compétence stack";
  document.getElementById("paiement").innerText = "Gestionnaire de paiement"
  document.getElementById("vente").innerText = "Gestion de vente matériel tv";
  document.getElementById("discu").innerText = "Plateforme de discussion";
  document.getElementById("ticket").innerText = "Gestion de ticket";
  document.getElementById("ecole").innerText = "Gestion d'absence d'une école";
  document.getElementById("cours").innerText = "Site de réservation de cours";
  document.getElementById("label_email").innerText = "Votre email";
  document.getElementById("label_message").innerText = "Votre message";
  document.getElementById("btnSend").innerText = "Envoyer";
});
const down_option = document.querySelector(".down_option");
const lang = document.getElementById("lang");

down_option.classList.add("hide");

lang.addEventListener("click", (e) => {
  e.stopPropagation();
  down_option.classList.toggle("hide");
});

document.addEventListener("click", (e) => {
  if (!down_option.contains(e.target)) {
    down_option.classList.add("hide");
  }
});

down_option.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  if (down_option.classList.contains("hide") && e.target === lang) {
    down_option.classList.remove("hide");
  }
});

//Radial progressBar

let number1 = document.getElementById('number1')
let number2 = document.getElementById('number2')
let counter1 = 0
let counter2 = 0

setInterval(() => {
  if(counter1 == 60){
    clearInterval
  }else{
    counter1 += 1
    number1.innerHTML = `${counter1}%` 
  }  
  if(counter2 == 40){
    clearInterval
  }else{
    counter2 += 1
    number2.innerHTML = `${counter2}%` 
  }

}, 30)

const observer = new IntersectionObserver(entries  => {
  entries.forEach(entry =>{
    const progressRadial = entry.target.querySelectorAll('#number1')
    if(entry.isIntersecting){
      progressRadial.classList.add('anim');
      return
    }

    progressRadial.classList.remove('anim')

  })
})

observer.observe(document.querySelectorAll('.circle-wrap'))