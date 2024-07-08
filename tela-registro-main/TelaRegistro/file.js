
function Registrar(){

        let LoginUsuario = document.getElementById("Nome").value
        let EmailUsuario = document.getElementById("Email").value
        let GeneroUsiario = document.querySelector("input[name='Genero']:checked").value
    
        alert(`Olá ${LoginUsuario} !!!\nseu Email ${EmailUsuario} foi cadastrado com sucesso`)
    
    window.location.href = '/Confirmação/confimacao.html'
}