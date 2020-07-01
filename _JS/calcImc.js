function calculoImc() {

    
    var peso = window.document.getElementById("peso")
    var altura = window.document.getElementById("altura1")
    var resultado = window.document.getElementById("resultado1")
    var peso1 = Number(peso.value)
    var altura1 = Number(altura.value)
    var imc = peso1 / (altura1 ** 2)

    if (imc < 18.5) {
        resultado.innerHTML = `IMC = ${imc}, Baixo peso `
        resultado.style.background = "green"
        resultado.style.padding = "30px"
        resultado.style.color = "white"
        resultado.style.borderRadius = "8px"
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerText = `IMC = ${imc}, Peso normal`
        resultado.style.background = "green"
        resultado.style.padding = "30px"
        resultado.style.color = "white"
        resultado.style.borderRadius = "8px"
    } else if (imc >= 25.0 && imc < 29.9) {
        resultado.innerText = `IMC = ${imc}, Excesso de peso`
        resultado.style.background = "green"
        resultado.style.padding = "30px"
        resultado.style.color = "white"
        resultado.style.borderRadius = "8px"
    } else if (imc >=30 && imc < 34.9) {
        resultado.innerText = `IMC = ${imc}, Obesidade de classe 1`
        resultado.style.background = "green"
        resultado.style.padding = "30px"
        resultado.style.color = "white"
        resultado.style.borderRadius = "8px"
    } else if (imc >= 35.0 && imc < 39.9) {
        resultado.innerText = `IMC = ${imc}, Obesidaade de classe 2`
        resultado.style.background = "green"
        resultado.style.padding = "30px"
        resultado.style.color = "white"
        resultado.style.borderRadius = "8px"
    } else if (imc > 40.0) {
        resultado.innerText = `IMC = ${imc}, Obesidade de classe 3`
        resultado.style.background = "green"
        resultado.style.padding = "30px"
        resultado.style.color = "white"
        resultado.style.borderRadius = "8px"
    }
}