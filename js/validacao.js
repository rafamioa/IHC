
$(document).ready(function(){
	$("#formCadastro").validate({
		rules: {       
			nome: {
				required: true,
				minlength: 5,
				maxlength: 75, 
				minWords: 2
			},
			cpf: {
				required: true
			},
			email:{
				required: true,
				email: true
			},
			dataNascimento:{
				required: true
			},
			sexo:{
				required: true
			},
			senha:{
				required: true,
				minlength: 8,
				maxlength: 23
			},
			senha_repetida:{
				required: true,
				equalTo: "#senha"
			},
			telefone:{
				required: true,
				minlength: 10
			}
		},
		messages: {          
			nome: {
				required: "Preencha o campo com seu nome",
				minlength: "Mínimo de caracteres é 5",
				maxlength: "Forneça menos de 75 caracteres",
				minWords: "Informar nome e sobrenome"
			},
			cpf: {
				required: "Preencha o campo com o número do cpf"
			},
			email:{
				required: "Preencha o campo com seu email",
				email: "Informe um e-mail válido"
			},
			dataNascimento:{
				required: "Escolha a sua data de nascimento"
			},
			senha:{
				required: "Informe uma senha",
				minlength: "A senha tem que ter de 8 a 23 caracteres",
				maxlength: "A senha tem que ter de 8 a 23 caracteres"
			},
			senha_repetida:{
				required: "Preencha o campo",
				equalTo: "Repita a mesma senha"
			},
			telefone:{
				required: "Informe o número de telefone",
				minlength: "Informe os 10 números"
			}
		}
	});

	$("#btnCadastrar").on("click", function (e) {
		if (!$("#formCadastro").valid()) {
			e.preventDefault();
		}
	});
});

/* Validação do login */
$(document).ready(function(){
	$("#formLogin").validate({
		rules: {       
			email:{
				required: true,
				email: true
			},
			senha:{
				required: true,
				minlength: 8,
				maxlength: 23
			}
		},
		messages: {          
			email:{
				required: "Preencha o campo com seu email",
				email: "Informe um e-mail válido"
			},
			senha:{
				required: "Informe uma senha",
				minlength: "A senha tem que ter de 8 a 23 caracteres",
				maxlength: "A senha tem que ter de 8 a 23 caracteres"
			}
		}
	});

	$("#btnLogar").on("click", function (e) {
		if (!$("#formLogin").valid()) {
			e.preventDefault();
		}
	});
});

