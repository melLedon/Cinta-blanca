//EJERCICIO 7
//Crea una funcion llamada letter, ingresa cualquier letra del alfabeto y verifique si es vocal o consonante

function letter(letra) {

    if (typeof letra != 'number') {
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
            return "Vocal";
        } else {
            return "Consonante";
        }
    } else {
        return "Caracter inválido";
    }
}


//EJERCICIO 8
//Crea una funcion llamada multiple que reciba como parametro un número para evaluar si un numero es divisible
//entre 5 y 11. En caso de que si regresar true si no, false.

function multiple(num) {
    if (num % 5 == 0 && num % 11 == 0) {
        return True;
    } else {
        return False;
    }
}

//EJERCICIO 9
// Crea una funcion llamada largest que reciba como parametro un arreglo de numeros, esta funcion debe
// retornar el numero más grande del arreglo

function largest(num = []) {

    let mayor = 0;
    for (i = 0; i <= num.length; i++) {
        if (num[i] > mayor) {
            mayor = num[i];
        }
    } return mayor;
}


let num = [18, 3, 6, 20, 60, 15, 25]
function menores(num) {

    let menor = num[0];
    for (i = 0; i <= num.length; i++) {
        if (num[i] < menor) {
            menor = num[i];
        }
    } console.log (menor);
}

menores (num);

//EJERCICIO 10
//Crea una función llamada game que simule el juego "Piedra, papel y tijeras", la función recibirá como 
//parámetros como se muestra a continuación:
//game("Piedra", "Papel") Jugador 1 ha seleccionado "Piedra" y jugador 2 ha seleccionado "Papel", por lo tanto
// el ganador es el jugador 2.
//La función unicamente recibirá como parámetro "Piedra", "Papel" o "Tijeras", retornar lo siguiente:
//"J1" Si ha ganado el jugador 1.
//"J2" Si ha ganado el jugador 2.
//"Empate" Si hay un empate.


function game(j1, j2) {
    if (j1 === j2) return "Empate";


    //gana J1
    if(j1 == "Piedra" && j2 == "Tijeras") return "J1";
    if(j1 == "Papel" && j2 == "Piedra") return "J1";
    if(j1 == "Tijeras" && j2 == "Papel") return "J1";

    //gana J2
    if(j1 == "Piedra" && j2 == "Papel") return "J2";
    if(j1 == "Papel" && j2 == "Tijeras") return "J2";
    if(j1 == "Tijeras" && j2 == "Piedra") return "J2";
}


/*  if (j1 === "Piedra") {
        if (j2 === "Papel") {
            return "J2";
        } else {
            if (j2 === "Tijeras") {
                return "J1";
            }
        }
    }
    if (j1 === "Papel") {
        if (j2 === "Piedra") {
            return "J1";
        } else {
            if (j2 === "Tijeras") {
                return "J2";
            }
        }
    }
    if (j1 === "Tijeras") {
        if (j2 === "Piedra") {
            return "J2";
        } else {
            if (j2 === "Papel") {
                return "J1";
            }
        }
    } */
