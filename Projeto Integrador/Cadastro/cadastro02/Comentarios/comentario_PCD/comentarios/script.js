function validaComentario(){

    const cep = document.getElementById("CEP").value;

    const comentario = document.getElementById("comentario").value;

    if(cep == ''|| comentario == ''){
        alert("Todos os campos precisam estar preenchidos.")
        return
    }
    if(cep < 8 || cep > 8){
        alert("O CEP precisa ter 8 digitos.")
        return
    }
    if(isNaN(cep)){
       alert("Digite um CEP válido.")
       return
    }
    }
