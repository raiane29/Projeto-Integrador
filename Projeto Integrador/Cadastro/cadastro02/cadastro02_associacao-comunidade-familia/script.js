function validaFormulario() {

    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;
    const cpf = document.getElementById("CPF").value;
    const confiSenha = document.getElementById("senhaconfir").value;

    //Validação de campos vazios    
    
    if (nome == '' || email == '' || senha == '' || confiSenha == '' || cpf == '') {
        alert("Por favor, preencha os campos vazios!");
        return
    }

    //Validação do campo do email

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido")
        return
    }

    //Validação do CPF

    if (cpf.length < 12 || cpf.length > 12) {
        alert("Minimo e máximo de 12 caracteres!");
        return
    }

    //Validação do tamanho da senha

    if (senha.length < 8) {
        alert("Minimo de 8 caracteres!");
        return
    }

    //Confirmação de senha

    if (senha !== confiSenha || confiSenha !== senha) {
        alert("As senhas devem ser idênticas!")
        return
    }
    
    alert ("Cadastro concluido com sucesso!")
    
}