
function Registrar(){

        
        let LoginUsuario = document.getElementById("Nome").value;
        let EmailUsuario = document.getElementById("Email").value;
        let GeneroUsiario = document.querySelector("input[name='Genero']:checked").value;
        let Termos = document.getElementById("Termos")

        if(Termos.checked){
                
                if(EmailUsuario.includes("@")){
        
                        alert(`Olá ${LoginUsuario} !!!\nseu Email ${EmailUsuario} foi cadastrado com sucesso`)
                        
                        window.location.href='2Tela-Confimacao.html'
        
                }else{
        
                        alert("Porfavor inserir um email valido ! (ex : nome@email.com)")
        
                }

        }else{

                alert("Aceite os termos !")

        }


}
