
// function register() {
//   let validUsername = localStorage.getItem('username');
//   let validPassword = localStorage.getItem('password');
//   if(!(validUsername && validPassword)) {
//     let username = '';
//     let password = '';
//     while(username === '' && username !== null && password === '' && password !== null) {
//       username = prompt("Enter your username");
//       password = prompt("Enter your password");
//       if(!(username === '' && username === null && password === '' && password === null)) {
//         localStorage.setItem('username', username);
//         localStorage.setItem('password', password);
//         alert("Succesful registration");
//         break;
//       }
//       else {
//         alert("Try again, please.")
//       }
//     }
//   }
//   else {
//     alert("Welcome, you're already registered.")
//     window.location.href = "http://127.0.0.1:5500/pages/index.html";
//     return window.location.href;
//   }
// }
// document.getElementById("register").addEventListener('onclick', register());

// function login() {
//   let usuarioIngresado = document.getElementById("username").value;
//   let passwordIngresado = document.getElementById("password").value;

//   let username = localStorage.getItem('username');
//   let password = localStorage.getItem('password');
//   if(usuarioIngresado === username && passwordIngresado === password) {
//     alert("Welcome.");
//     window.location.href
//   }
// }

function login() {
  return window.location.replace("http://127.0.0.1:5500/pages/index.html");
}

document.getElementById("login").addEventListener("onclick", login());