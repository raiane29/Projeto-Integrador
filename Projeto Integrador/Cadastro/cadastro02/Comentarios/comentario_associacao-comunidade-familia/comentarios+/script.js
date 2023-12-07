function validaComentario(){

    const cep = document.getElementById("cep").value;
    const pcd = document.getElementById("PCDs").value;
    const comentario = document.getElementById("relato").value;

    if(isNaN(pcd)){
        alert("Digite as informações corretas.")
        return
    }
    if(cep == '' || pcd == '' || comentario == ''){
        alert("Todos os campos precisam estar preenchidos.")
    }
        return
    if(cep < 8 || cep > 8){
        alert("O CEP precisa ter 8 digitos.")
        return
    }
    if(isNaN(cep)){
       alert("Digite um CEP válido.")
       return
    }
    }

