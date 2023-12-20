const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;
let anh = document.querySelector(".btn.btn-primary")
btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}


//let nom = document.querySelector("#name")

//function verifname(){
//  if(nom.value.length < 2){
//    nom.style.borderBlockColor = "red"
//  }else{
//    nom.style.borderBlockColor = "green"
//  }
//}

let nom = document.querySelector("#name")


function verifname(){
  if(nom.value.length < 2){
    nom.classList.add("bordur-red")
    nom.classList.remove("bordur-vert")
  }else{
    nom.classList.remove("bordur-red")
    nom.classList.add("bordur-vert")
  }
}


let alrt1 = document.querySelector("#alrt")
let pwd = document.querySelector("#mdp")

function verifmdp() {
  if(pwd.value.length < 8){
//    pwd.style.borderBlockColor = "red"
    alrt1.classList.remove("invisible")
    pwd.classList.add("bordur-red")
    pwd.classList.remove("bordur-vert")
  }else{
//    pwd.style.borderBlockColor = "green"
    alrt1.classList.add("invisible")
    pwd.classList.remove("bordur-red")
    pwd.classList.add("bordur-vert")
  }
}

let pwd2= document.querySelector("#modp")

function verifmdp2() {
  if(pwd2.value.length < 8){
    pwd2.classList.add("bordur-red")
    pwd2.classList.remove("bordur-vert")
  }else{
    pwd2.classList.remove("bordur-red")
    pwd2.classList.add("bordur-vert")
  }
}

let pre = document.querySelector("#pre")

function verifpre(){
    if(pre.value.length < 1){
    //pre.style.borderBlockColor = "red"
    pre.classList.add("bordur-red")
    pre.classList.remove("bordur-vert")
    }else{
    //pre.style.borderBlockColor = "green"
    pre.classList.remove("bordur-red")
    pre.classList.add("bordur-vert")
  }
}

let alrt2 = document.querySelector("#alrt2")
let email = document.querySelector("#email")

function verifemail(){
    if(email.value.length < 1 || !email.value.includes("@")){
    //email.style.borderBlockColor = "red"
    alrt2.classList.remove("invisible")
    email.classList.add("bordur-red")
    email.classList.remove("bordur-vert")
    }else{
    //email.style.borderBlockColor = "green"
    alrt2.classList.add("invisible")
    email.classList.remove("bordur-red")
    email.classList.add("bordur-vert")
  }
}

let msg1 = document.querySelector("#msg")

function verifmsg(){
    if(msg1.value.length < 1){
    //msg1.style.borderBlockColor = "red"
    msg1.classList.add("bordur-red")
    msg1.classList.remove("bordur-vert")
    }else{
    //msg1.style.borderBlockColor = "green"
    msg1.classList.remove("bordur-red")
    msg1.classList.add("bordur-vert")
  }
}

let age3 = document.querySelector("#formCheck-1")
let age4 = document.querySelector("#age2")

function verifage(){
  if(age3.checked){
    //age4.style.color = "green"
    age4.classList.add("text-vert")
    age4.classList.remove("text-danger")
    }else{
    //age4.style.color = "red"
    age4.classList.remove("text-vert")
    age4.classList.add("text-danger")
  }
}

  anh.addEventListener("click", verifierFormulaire)
function verifierFormulaire() {
  verifname()
  verifmdp()
  verifpre()
  verifemail()
  verifmsg()
  verifage()
}
anh.addEventListener("click", verifierFormulaire2)
function verifierFormulaire2() {
  verifemail()
  verifmdp2()
}
let bouton = document.getElementById("menu-btn")
let bod = document.getElementsByTagName("body")
let over = document.getElementById("overlay")
let mobile = document.getElementById("mobile-menu")
let anh3 = document.querySelector(button)
anh3.addEventListener("click", openclose)
function openclose() {
    if(bouton.classList.contains("open")){
      bouton.classList.remove("open")
      bod.classList.remove("stop-scrolling")
      over.classList.remove("overlay-show")
      mobile.classList.remove("show-menu")
    }else{
      bouton.classList.add("open")
      bod.classList.add("stop-scrolling")
      over.classList.add("overlay-show")
      mobile.classList.add("show-menu")
    }

}