function verifEmail(_email) {
  let isValide = true;
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
  var email = inputs.email;
  var password = inputs.password;
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
  // identifiants saisie par l'internaute
  const user_from_SignIn = getUserFromSignIn();
  const _email = user_from_SignIn.email;
  const _password = user_from_SignIn.password;

  // TODO3 à compléter

  for (let i=0;i<users.length;i++){
    if (_email ==users[i].email && _password==users[i].password) {
        return users[i];
    }

  }
}
/*
 * return: {email, password}, user  parmis les users
 * reçus du server qui match avec les inputs du formulaire
 */
// Fonction pour récupérer les données du formulaire de connexion
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
         }
       })
       .then((data) => {
         // TODO4
         for (let i = 0; i < data.length; i++) {
           if (user_email === data[i].email) {
             setUserImageProfil(data[i]);
           }
         }
       })
       .catch((error) => {
         // TODO4
         console.error("Fetch error:", error);
       });
   }

  function verifpre(pre) {
    if (pre.length < 1) {
      alert("Please enter a valid first name.");
      return false;
    }
    return true;
  }
  
  function verifnom(nom) {
    if (nom.length < 1) {
      alert("Please enter a valid last name.");
      return false;
    }
    return true;
  }
  
  function verifmes(mes) {
    if (mes.length < 1) {
      alert("Please enter a valid message.");
      return false;
    }
    return true;
  }
button = document.querySelector(".btn.btn-primary");
button.addEventListener("click", retrieveUsers);

async function retrieveUsers() {
  if (verifierFormulaire2()) { // Utilise verifierFormulaire2 au lieu de verifierFormulaire
    const port = "3003";
    const url = "http://localhost:3003/get/user";
    const data = getUserFromSignUp();
    const params = new URLSearchParams(Object.entries(data));

    const { writeFile, readFile } = require('fs');
    const path = './accounts.json';

// Route pour recevoir les données du client
    app.post('/createUser', (req, res) => {
  // Récupérer les données du corps de la requête
      const userData = req.body;

  // Vérifier si les données sont valides (ex: présence de champs obligatoires, validation d'email, etc.)
  // Ici, vous pouvez utiliser des fonctions de validation ou des bibliothèques de validation comme Joi.

  // Lire le contenu actuel du fichier accounts.json
  readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Internal Server Error');
    }
    
    // Analyser les données JSON
    const accounts = JSON.parse(data);
    
    // Ajouter le nouvel utilisateur aux données existantes
    accounts.push(userData);

    // Écrire les données mises à jour dans le fichier
    writeFile(path, JSON.stringify(accounts, null, 2), (err) => {
      if (err) {
        console.log('Failed to write updated data to file');
        return res.status(500).send('Internal Server Error');
      }
      console.log('Updated file successfully');
      // Envoyer une réponse réussie au client
      res.status(200).send('User created successfully');
    });
  });
});
  }
}

  function verifierFormulaire2() {
    inputs = getUserFromSignUp();
    var pre = inputs.prenom;
    var nom = inputs.name;
    var mes = inputs.message;
    var email = inputs.email;
    var password = inputs.password;
    return verifEmail(email) && verifPassword(password) && verifpre(pre) && verifnom(nom) && verifmes(mes);
   }
  function getUserFromSignUp() {
    // Access input elements
    const inputs = document.getElementsByTagName("input");
    
    // Store values of prenom, name, and message fields
    const pre = inputs[2].value;
    const nom = inputs[3].value;
    const mes = inputs[4].value;
  
    // Return the values as an object
    return {
      prenom: pre,
      name: nom,
      message: mes
    };
  }
  
  }