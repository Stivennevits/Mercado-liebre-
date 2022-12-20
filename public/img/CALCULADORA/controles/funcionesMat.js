function sumar (a,b){
    return a + b 
}

module.exports.suma = sumar

function restar(a,b){
    return a - b 
}
module.exports.resta = restar

function multiplicar (a,b){
    if (a == 0 || b == 0 ){
        return 0
    }
    else {
        return a * b 
    }
}

module.exports.multiplicacion = multiplicar

function dividir(a,b){
    if (a == 0 || b == 0){
        return "No se puede dividir por cero "
    }
    else {
        return a / b
    }
}

module.exports.division = dividir

function modulo (a,b){
    return a % b
}

module.exports.residuo = modulo

function potenciacion(a,b){
    return Math.pow (a,b)

}
module.exports.potencia = potenciacion

function raiz(a,b){
    return Math.pow(a, 1/b)
}

module.exports.radicacion = raiz