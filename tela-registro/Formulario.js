
function Registrar(){
let LoginUsuario = document.getElementById("Login").value
let GmailUsuario = document.getElementById("Gmail").value
let GeneroUsuario = document.querySelector("input[name='genero']:checked").value


alert(`Olá ${LoginUsuario}, Seu Email : ${GmailUsuario} foi cadastrado com sucesso !! `)

}