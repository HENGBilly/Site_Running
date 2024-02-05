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
  verifemail2()
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

function verifEmail(_email) {
  isValide = true;
  if (_email.length < 7) {
    alert("please enter email with min 8 caractere");
    return !isValide;
  }
  for (let i = 0; i < _email.length; i++) {
    if (_email[i] == "@") return isValide;
  }
  alert("please enter email with  @ caractere");
  return !isValide;
}

function verifPassword(_password) {
  let isValide = true;
  let uppercase_in_password = false;
  let lowercase_in_password = false;
  let special_char_in_password = false;

  // longueur pass
  if (_password.length < 8) {
    alert("Please enter a password with min  8 caractere...");
    return !isValide;
  }

  // majuscule dans le password
  for (i in _password) {
    // Not a Number
    if (
      isNaN(parseInt(_password[i])) &&
      _password[i].toUpperCase() === _password[i]
    ) {
      uppercase_in_password = !uppercase_in_password;
      break;
    }
  }
  // CSS pour pas de majuscule dans le password
  if (!uppercase_in_password) alert("no masjuscule in password...");

  // minuscule dans le password
  for (i in _password) {
    if (
      isNaN(parseInt(_password[i])) &&
      _password[i].toLowerCase() === _password[i]
    ) {
      lowercase_in_password = !lowercase_in_password;
      break;
    }
  }
  if (!lowercase_in_password) alert("no minuscule in password...");

  // caractere specialdans le password
  for (i in _password) {
    // correspondance ds la table ASCII
    // [32, 47], [58, 64], [91, 96] or [123, 126]
    let ASCII = _password[i].charCodeAt(0);
    if (
      (32 < ASCII && ASCII < 47) ||
      (58 < ASCII && ASCII < 64) ||
      (91 < ASCII && ASCII < 96) ||
      (123 < ASCII && ASCII < 126)
    ) {
      special_char_in_password = !special_char_in_password;
      break;
    }
  }
  if (!special_char_in_password) alert("no special caractere in password...");

  return (
    lowercase_in_password && uppercase_in_password && special_char_in_password
  );
}
/*
 * The verifierFormulaire function checks the results
 * of both the email and password validation. If there are any errors,
 * it concatenates the error messages and displays them in an alert.
 * If there are no errors, it returns true.
 */
function verifierFormulaire() {
  inputs = getUserFromSignIn();
  const email = inputs.email;
  const password = inputs.password;
  return verifEmail(email) && verifPassword(password);
}

button = document.querySelector(".btn.btn-primary");
button.addEventListener("click", retrieveUsers);

async function retrieveUsers() {
  if (verifierFormulaire()) {
    const port = "3003";
    const url = "http://localhost:3003/get/user";
    const data = getUserFromSignIn();
    const params = new URLSearchParams(Object.entries(data));

    // requête asynchrone pour recuperer les users
    fetch(`${url}?${params}`)
      .then((response) => {
        if (response.ok) {
          // Response status code is in the 200-299 range
          return response.json();
        } else {
          // Handle non-successful response
          console.error("Request failed with status: " + response.status);
        }
      })
      .then((users) => {
        // Handle the successful response data here

        // TODO1
        console.debug(users);

        // TODO2
        for (let i = 0; i < users.length; i++) {
          let user = users[i];
          console.log(`Identifiants[${i}]: ${user.email} et ${user.password}`);
        }
        // TODO3 fonction getUser à compléter
        let myUser = getUser(users);

        // TODO4 fonction processDataUserAccount  à compléter
        if (myUser != null) processDataUserAccount(myUser.email);
      })
      .catch((error) => {
        // Handle network errors and exceptions
        console.error("Fetch error:", error);
      });
  }
}

function getUser(users) {
  const user_from_SignIn = getUserFromSignIn();
  const _email = user_from_SignIn.email;
  const _password = user_from_SignIn.password;
  for (let j = 0; j < users.length; j++) {
    if (_email === users[j].email && _password === users[j].password) {
      console.log(users[j]);
      return users[j];
    }
  }
  return null;
}


/*
 * return: {email, password}, user  parmis les users
 * reçus du server qui match avec les inputs du formulaire
 */
function getUserFromSignIn() {
  // Access input elements
  inputs = document.getElementsByTagName("input");

  // Store email and password values
  email = inputs[0].value;
  password = inputs[1].value;

  // Return email and password values as an object
  return {
    email: inputs[0].value,
    password: inputs[1].value,
  };
}

function setUserImageProfil(data_of_the_user) {
  //window.location.href = '/';
  // Get the <ul> element inside the navigation
  const ulElement = document.querySelector(".desktop-main-menu ul");

  // Image profil
  // Get the last child <li> element of <ul>
  var lastChild = ulElement.lastElementChild;
  // Create a new list item
  var newListItem = document.createElement("li");
  newListItem.innerHTML = `<a href="#" title="${data_of_the_user.email}"><img src="${data_of_the_user.profil_image}"></a>`;
  // Replace the last <li> with the new <li>
  ulElement.replaceChild(newListItem, lastChild);
  //Append the new <li> element to the <ul>
  ulElement.appendChild(newListItem);

  //Banner Welcome
  const contacClean = document.querySelector(".contact-clean");
  contacClean.innerHTML = `<h2>Welcome ${data_of_the_user.nom}</h2>`;
  //contacClean.style.top='0px';
  const sectionInner_A = document.querySelector(".section-a .section-inner");
  sectionInner_A.style.bottom = "600px";
}

// fonction permettant de requeter les data du fichier
// dataUsers.json et modofier l'image du profil si
// l'email du user est trouvé ds les data.
async function processDataUserAccount(user_email) {
  if (verifierFormulaire()) {
    const port = "3003";
    const url = `http://localhost:${port}/get/user/data/profil`;
    const data = getUserFromSignIn();
    const params = new URLSearchParams(Object.entries(data));

    // requête asynchrone pour recuperer dataUsers.json
    fetch(`${url}?${params}`)
      .then((response) => {
        // TODO4
        if (response.ok) {
          return response.json();
        } else {
          console.error("Request failed with status: " + response.status);
          return Promise.reject("Request failed");
        }
      })
      .then((data) => {
        // TODO4
        for (let i = 0; i < data.length; i++) {
          if (user_email === data[i].email) {
            setUserImageProfil(data[i]);
            break;
          }
        }
      })
      .catch((error) => {
        // TODO4
        console.error("Fetch error:", error);
      });
  }
}