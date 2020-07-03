function calculoImc() {

    
    var peso = window.document.getElementById("peso")
    var altura = window.document.getElementById("altura1")
    var resultado = window.document.getElementById("resultado1")
    var peso1 = Number(peso.value)
    var altura1 = Number(altura.value)
    var imc = peso1 / (altura1 ** 2)
    var fsex = document.getElementsByName('tidoso')
    var genero = ''
    
    
    if (imc < 18.5) { 
        if (fsex[0].checked ) {
            genero = 'idoso'
            resultado.innerHTML = `detectamos ${genero} IMC = ${imc}, Baixo peso !`
            resultado.style.background = "green"
            resultado.style.padding = "30px"
            resultado.style.color = "white"
            resultado.style.borderRadius = "8px"
        } else if (fsex[1].checked) {
            genero = 'Adulto'
            resultado.innerHTML = `detectamos ${genero} IMC = ${imc}, Baixo peso !`
            resultado.style.background = "green"
            resultado.style.padding = "30px"
            resultado.style.color = "white"
            resultado.style.borderRadius = "8px"
        }
        
    } else if (imc >= 18.5 && imc < 24.9) {
        if (fsex[0].checked) {
            genero = 'idoso'
            resultado.innerText = `detectamos ${genero} IMC = ${imc}, Peso normal !`
            resultado.style.background = "green"
            resultado.style.padding = "30px"
            resultado.style.color = "white"
            resultado.style.borderRadius = "8px"
        } else if (fsex[1].checked) {
            genero = 'adulto'
            resultado.innerText = `detectamos ${genero} IMC = ${imc}, Peso normal !`
            resultado.style.background = "green"
            resultado.style.padding = "30px"
            resultado.style.color = "white"
            resultado.style.borderRadius = "8px"
        }
        
    } else if (imc >= 25.0 && imc < 29.9) {
        if (fsex[0].checked) {
            genero = 'idoso'
            resultado.innerText = `detectamos ${genero} IMC = ${imc}, Excesso de peso !`
            resultado.style.background = "green"
            resultado.style.padding = "30px"
            resultado.style.color = "white"
            resultado.style.borderRadius = "8px"
        } else if (fsex[1].checked) {
            genero = 'adulto'
            resultado.innerText = `detectamos ${genero} IMC = ${imc}, Excesso de peso !`
            resultado.style.background = "green"
            resultado.style.padding = "30px"
            resultado.style.color = "white"
            resultado.style.borderRadius = "8px"
        }
       
    } else if (imc >=30 && imc < 34.9) {
        if (fsex[0].checked) {
            genero = 'idoso'
            resultado.innerText = `detectamos ${genero} IMC = ${imc}, Obesidade classe 1 !`
            resultado.style.background = "green"
            resultado.style.padding = "30px"
            resultado.style.color = "white"
            resultado.style.borderRadius = "8px"
        } else if (fsex[1].checked) {
            genero = 'Adulto'
            resultado.innerText = `detectamos ${genero} IMC = ${imc}, Obesidade classe 1 !`
            resultado.style.background = "green"
            resultado.style.padding = "30px"
            resultado.style.color = "white"
            resultado.style.borderRadius = "8px"
        }
        
    } else if (imc >= 35.0 && imc < 39.9) {
        if (fsex[0].checked) {
            genero = 'idoso'
            resultado.innerText = `detectamos ${genero} IMC = ${imc}, Obesidade classe 2 !`
            resultado.style.background = "green"
            resultado.style.padding = "30px"
            resultado.style.color = "white"
            resultado.style.borderRadius = "8px"
        } else if (fsex[1].checked) {
            genero = 'adulto'
            resultado.innerText = `detectamos ${genero} IMC = ${imc}, Obesidade classe 2 !`
            resultado.style.background = "green"
            resultado.style.padding = "30px"
            resultado.style.color = "white"
            resultado.style.borderRadius = "8px"
        }
       
    } else if (imc > 40.0) {
        if (fsex[0].checked) {
            genero = 'idoso'
            resultado.innerText = `detectamos ${genero} IMC = ${imc}, Obesidade classe 3 !`
            resultado.style.background = "green"
            resultado.style.padding = "30px"
            resultado.style.color = "white"
            resultado.style.borderRadius = "8px"
        } else if (fsex[1].checked) {
            genero = 'adulto'
            resultado.innerText = `detectamos ${genero} IMC = ${imc}, Obesidade classe 3 !`
            resultado.style.background = "green"
            resultado.style.padding = "30px"
            resultado.style.color = "white"
            resultado.style.borderRadius = "8px"
        }
        
    }
}
