/*
        const funcionesMatematicas = require("./controles/funcionesMat.js")

        console.log(funcionesMatematicas.suma(2,10))
        console.log(funcionesMatematicas.resta(2,10))
        console.log(funcionesMatematicas.multiplicacion(2,10))
        console.log(funcionesMatematicas.division(20,10))
        console.log(funcionesMatematicas.residuo(30,10))
        console.log(funcionesMatematicas.potencia(5,5))
        console.log(funcionesMatematicas.radicacion(8,4))
        */

/*
        let frase = 'digitalhouse.com.ar'
        function dominio(frase){
            
            return 'http://www.'+frase
        }  

        console.log(dominio(frase))
        console.log(frase)
        */

/*
        let texto = "es un asco este playgroundcode, en vscode si funciona"

        function reemplazoFastFast(texto){
            return texto.replace("asco", "maravilla")
        }

        let textoOk = reemplazoFastFast(texto)

        console.log(texto)
        console.log(textoOk)

        function reemplazoFastFast(viejo = "es un asco este playgroundcode, en vscode si funciona", bus = "asco", nuevo = "pésimo"){
            let nuevito = viejo.replace(bus, nuevo)
            return nuevito
        }
        */

/*
        function menciona (texto = "abra cadavra patas de cabra", palabra = "cadavra"){
            let nuevo = texto.indexOf(palabra)
            if (nuevo >= 0){
                return true
            }
            else {
                return false
            }
            
        }
        console.log(menciona())

        let frase = 'Hola!, soy Carli';

        let licenciada = frase.slice(10,16)
        console.log(licenciada)
        */

/*

        let deportista = {
            energia: 100,
            experiencia: 10,
            nombre: "Aimar",
            entrenarHoras: function (horas){
                this.energia = this.energia - (horas*5) 
                this.experiencia = this.experiencia + (horas * 2)
                
            }
        };

        console.log("==Antes de comenzar entrenamiento==");
        console.log("Deportista energia: "+deportista.energia);
        console.log("Deportista experiencia: "+deportista.experiencia);
        console.log("==ENTRENANDO==");
        deportista.entrenarHoras(18);
        console.log("==FIN ENTRENAMIENTO==");
        console.log("Deportista energia: "+ deportista.energia);
        console.log("Deportista experiencia: "+deportista.experiencia);

        */

/*

        let dameCinco = num => [1,2,3,4,5]

        console.log(dameCinco(3))

        let multiplicarPorDos = dato => dato *2

        console.log(multiplicarPorDos(9))

        let mostrarNombre = nombre => "Mi nombre es " +nombre
        console.log(mostrarNombre("stiven"))


        console.log(dameCinco(2))
        */

/*
        let dia = 'jueves'
        function finDeSemana (dia) {	
            if (dia == 'viernes') {
                console.log('buen finde')
            } else if (dia == 'lunes') {
                console.log('buena semana')
            } else {
                console.log('buen dia')
            }
        }
        */

/*
        let dia = "martes"
        switch (dia){
            case "jueves":
                console.log("buen finde")
                break;
            case "lunes":
                console.log("buena semana")
                break;
                default : 
                console.log("buen dia")   
        }

        */
/*
        let dia = 'jueves'
        function finDeSemana (dia) {	
            
        switch (dia){
            case "jueves":
                console.log("buen finde")
                break;
            case "lunes":
                console.log("buena semana")
                break;
                
                default : 
                console.log("buen dia")
                break;
        } return 
        }

        console.log(finDeSemana("lunes"))
        */
/*

        function tengoClases(dia) {
            switch (dia) {
                case  "lunes"  :
                    console.log("tenés clases")
                    
                case "miércoles" :
                    console.log("tenés clases") 
                    
                case "viernes" : 
                    console.log("tenés clases")  
                    break;
                default : 
                console.log( "no tenés clases")
                
            } 
        }

        console.log(tengoClases("lunes"))
        console.log(tengoClases("miércoles"))
        console.log(tengoClases("viernes"))

        */
/*
        let bicicletaA = {
            rodado: 18,
            marca: "Mountain Bike"
        }
        let bicicletaB = {
            rodado: 44,
            marca: "Aurora"
        }

        let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ?  bicicletaA :  bicicletaB

        console.log(bicicletaConRodadoGrande)
        console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );

        /*
        function bicicletaConRodadoGrande (bicicletaA , bicicletaB){
            if (bicicletaA.rodado > bicicletaB.rodado){
                
                return "La mas grande es: " + bicicletaA.marca
            }
            else{
                return "La mas grande es: " + bicicletaB.marca 
            }
        }

        console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande(bicicletaA , bicicletaB) );
        */

/*

        function loro (texto){
            for (let i = 1; i<=texto; i++){
                console.log("aqui es la vuelta " + i + " " +(texto*i))
            
            }
        }

        console.log(loro(8))
        */
/*
        function noParesDeContarImparesHasta(x){
            let numerosImpares = 0 
            for(let i = 1; i<=x; i++)
                if (i % 2 == !0){
                numerosImpares = numerosImpares+1
                }return numerosImpares
            }


        console.log(noParesDeContarImparesHasta(3))

        function numerosPrimos(a){
            let resultado = ""
            if (a == 2 || a == 3 || a == 5){
                resultado = "es primo"
            }
            else if (a % 2 == 0 || a % 3 == 0){
            resultado = "no es primo"
            } else {
                resultado ="es primo"
            } return resultado
        }

        console.log(numerosPrimos(12))
        */

/*
        function numerosPrimos(numeroInicial, numeroFinal){

            for (let i = numeroInicial; i <= numeroFinal; i++){{
                console.log(i)
                if (i == 2){
                console.log  (i + " Es Primo")
                }
            for (let conteo = 2; conteo <= numeroFinal; conteo ++){
                if (i % conteo  == 0){
                    console.log( i + " " +  "No es Primo")
                } 
                else {
                    console.log ( i + " es primo") }
            }
            } 

                /*
            if (i == 2){
                return i + " Es Primo"
            }
            else if (i < 1){
                return " se debe seleccionar numeros mayores a 1 "
            }
            for (let conteo = 2; conteo <= i; conteo ++){
                if (i % conteo  == 0){
                    return i + " " +  "No es Primo"
                }
            } return "Es Primo" 
        }
        }
        console.log(numerosPrimos(4,10))

        */
/*

        function esPrimo (numeroo){
            if (numeroo == 2){
                return numeroo + " es Primo"
            }
            else if (numeroo < 1){
                return "Deben ser numeros positivos y enteros"
            }
            for (let i = 2; i < numeroo ; i ++){
                if (numeroo % i == 0 ){
                    
                    return( numeroo + " No es Primo")
                }      
            }return (numeroo + " Es Primo")
        }

        console.log(esPrimo(17))
        console.log(esPrimo(7))
        console.log(esPrimo(11))
        console.log(esPrimo(98))

        */

/*
        function fibonacci(limite){
            let arrayfib = [0,1];
            for (let i = 2; i< limite; i ++){ 
            arrayfib.push (arrayfib[i - 1] + arrayfib [i - 2 ]);
        }
        return arrayfib
        }
        //0 1 1 2 3 5 8 13


        console.log(fibonacci(10))





function fibo(numero){
let a = 0
let b = 1
let c = null

for (i = 0; i < numero - 2; i++){
    c = a + b;
    a = b;
    b = c;
    
    console.log(c)
}
return "esta es la serie " + c


}

console.log(fibo(11))


function bisiesto (año){
    if ((año % 4 == 0) && (!año % 100 == 0 || año % 400 == 0) ){
        return "El año" + " " + año +  " Es bisiesto"
    }
    else {
        return "El año" + " " +  año + " No es bisiesto"
    }
}

console.log(bisiesto(2004))
console.log(bisiesto(2014))
console.log(bisiesto(2024))
console.log(bisiesto(2018))
console.log(bisiesto(1996))
console.log(bisiesto(2024))

*/

/*
function esPar (z){
    if (z % 2 == 0){
        return z + " " + "Es Par"
    } else {
        return z + " " + " Es impar"
    }
}

console.log(esPar(3))
console.log(esPar(32))

function doble (numero) {
   return numero * 2;
}


function triple (numero) {
 return numero * 3 ;
}
function aplicarCallback (numero, operacion ) {
    return operacion (numero , doble)
}

console.log(doble(2))
console.log(aplicarCallback(6, doble))
*/

/*
function suma ( a, b ){
    return a + b 
}

function restar (a,b){
    return a - b 
}

function multiplicar (a,b){
    return a * b
}
function dividir (a,b){
    return a / b 
}

function calculadora(a,b, funn){
    return  funn (a,b, suma || restar || multiplicar || dividir) 
}

console.log(calculadora(2,4,multiplicar))
console.log(calculadora(2,4,dividir))
console.log(calculadora(2,4,suma))

*/

/*

function agregarHttp(arrayD) {
    return "https://www." + arrayD;
}

function procesar(arrayD, agregarHttp){
    
    let sitioWeb = [];
    for (let i = 0; i< arrayD.length ; i++){
      sitioWeb.push(agregarHttp(arrayD[i]))
    }
    return sitioWeb 
    // escribí tu código aquí
    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
}

console.log(procesar(["google.com", "youtube.com"],agregarHttp))

let a = ["fb.com", "instagram.com", "linkeind.com", "fb.com.co"]

let aCompleto = a.map(function(dir){
    return "https://www." + dir
})

console.log(aCompleto)

let afiltrado = a.filter(function(parametro){
    return parametro == "fb.com"

})

console.log(afiltrado)


let b = [3.8,1,4.2,0.5,5,3.6]

let bCom = b.map(function(numero){
return numero*3
})

console.log(bCom)

let bfiltrado = b.filter(function(numero){
return numero >= 3
})

console.log(bfiltrado)

let bsumado = b.reduce(function(acumulador, numero){
 return (acumulador + numero)  
})
let nota = bsumado / b.length
console.log(bsumado)
console.log(nota)

b.forEach(function(valor, indice){
 console.log("en la posicion " + indice + " tengo el valor " + valor)
})

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]



let promedios = []
for (let i = 0; i < estudiantes.length; i++){
    promedios.push(estudiantes[i].promedio)
}

console.log(promedios)


let aprobados = estudiantes.filter(function(diplom){
    
    return diplom.aprobado == true

})

console.log(aprobados)

let desaprobados = estudiantes.filter(function(email){
    return email.aprobado == false

})

console.log(desaprobados)

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach(function(nombre, ind){
    console.log (nombre, ind)

})

let fecha = new Date( )

let fechaActual = new Date();
let dia = fechaActual.getDate()
let mes = fechaActual.getMonth()
let anio = fechaActual.getFullYear()




console.log('Hoy es el día '+(dia ) +' del mes '+(mes + 1)+' del año '+ (anio ))

*/
/*

let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [ ,bariloche, ,china] = destinosDelMundo

console.log(destinosDelMundo)
console.log(bariloche)
console.log(china)

*/

/*
let a = 3;
let b = 1;
let c = 2;

function numeros(a, b, c) {
  if (a > b && a > c && b < a && b < c && c > b && c < a) {
    return (
      "El mayor es: " +
      a +
      " * el menor es: " +
      b +
      " * el de el medio es: " +
      c
    );
  } else if (b > a && b > c && a < b && a < c && c > a && c < b) {
    return (
      "El mayor es: " +
      b +
      " * el menor es: " +
      a +
      " * el de el medio es: " +
      c
    );
  } else if (c > a && c > b && b < a && b < c && a < c && a > b) {
    return (
      "El mayor es: " +
      c +
      " * el menor es: " +
      b +
      " * el de el medio es: " +
      a
    );
  } else {
    return (
      "El mayor es: " +
      c +
      " * el menor es: " +
      a +
      " * el de el medio es: " +
      b
    );
  }
}

console.log(numeros(6, 4, 5));
console.log(numeros(1, 5, 2));
console.log(numeros(11, 5, 12));
console.log(numeros(1, 5, 12));
*/

function parasaber(nummm){
    if (nummm % 2 ==0){
        return "el numero " + nummm + " es par"
    }else{ 
        return "el numero " + nummm + " es impar"
    }

}

console.log(parasaber(0))