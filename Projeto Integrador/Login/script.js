function validaCadastro() {
    const cpf = document.getElementById("CPF").value;
    const senha = document.getElementById("senha").value;
       
    if(cpf == ''|| senha == '' || 
    senhaconfir == ''){
        alert('Há campos vazios que necessitam ser preenchidos!')
        return
         }
    
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
         if(!emailRegex.test(email)){
        alert('Email inválido')
        return
         }

         if(cpf.length < 11){
        alert('O CPF tem que ter 12 caracteres!')
        return
         }
    
         if(senha.length < 9){
        alert('A senha tem que ter 7 caracteres!')
        return
         }
    
        if(senhaconfir.length < 9){
            alert('A senha tem que ter 7 caracteres!')
            return
    
            }else if(senhaconfir == senha){
            alert('Confirmação concluida!')
            return
    
            }else{
            alert('Confirmação da senha incorreta!')
            return
            }
    }