addEventListener("DOMContentLoaded", ()=>{
    var nameRecebido = localStorage.getItem("nome")
    document.getElementById("name").innerHTML = nameRecebido;

    var mailRecebido = localStorage.getItem("email")
    document.getElementById("mail").innerHTML = mailRecebido;

    var telRecebido = localStorage.getItem("telefone")
    document.getElementById("tel").innerHTML = telRecebido;

    var cpfRecebido = localStorage.getItem("cpf")
    document.getElementById("cpf").innerHTML = cpfRecebido;

    var passRecebido = localStorage.getItem("password")
    document.getElementById("code").innerHTML = passRecebido;
})