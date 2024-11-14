const openModal = document.querySelector("#open_modal")
const modal = document.querySelector("#modal")

function openClose() {
    modal.showModal()
}

function getName() {
    var n = document.getElementById("name").value
    localStorage.setItem("nome", n)
}

function mask_tel() {

    var maskTel = document.getElementById("telefone").value
    if (maskTel[0] != "(") {
        document.getElementById("telefone").value = "(" + maskTel[0];
    }
    
    if (maskTel[3] != ")"){
        if (maskTel[3] != undefined){
            document.getElementById("telefone").value = maskTel.slice(0,3) + ")" + maskTel[3];
        }
    }

    if (maskTel[4] != "9"){
        if (maskTel[4] != undefined){
            document.getElementById("telefone").value = maskTel.slice(0,4) + "9" + maskTel[4];
        }
    }

    if (maskTel[9] != "-"){
        if (maskTel[9] != undefined){
            document.getElementById("telefone").value = maskTel.slice(0,9) + "-" + maskTel[9];
        }
    }

    localStorage.setItem("telefone", maskTel)
}

function mask_cpf() {

    var maskCPF = document.getElementById("cpf").value
    if (maskCPF[3] != "."){
        if (maskCPF[3] != undefined){
            document.getElementById("cpf").value = maskCPF.slice(0,3) + "." + maskCPF[3];
        }
    }

    if (maskCPF[7] != "."){
        if (maskCPF[7] != undefined){
            document.getElementById("cpf").value = maskCPF.slice(0,7) + "." + maskCPF[7];
        }
    }

    if (maskCPF[11] != "-"){
        if (maskCPF[11] != undefined){
            document.getElementById("cpf").value = maskCPF.slice(0,11) + "-" + maskCPF[11];
        }
    }

    localStorage.setItem("cpf", maskCPF)
}

function getMail() {
    var m = document.getElementById("mail").value
    localStorage.setItem("email", m)
}

function getPassword() {
    var p = document.getElementById("pass").value
    localStorage.setItem("password", p)
}

function aviso() {
    window.alert("Cadastro/Login concluído com sucesso!")
}