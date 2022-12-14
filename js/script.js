document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
  if(document.getElementById("nome").value != "" && 
      document.getElementbyId("email").value != "" &&
      document.getElementbyid("telefone").value != ""){
      alert("Prontinho! você receberá as novidades por email.")    
  }else{
    alert("Por favor, preeencha os campos nome e email.")
  } 
}

