const obtenerValor = (jugador) => {

    let celdaSeleccionada = document.getElementById('seleccionado').value;

    if (jugador == 1) {
        document.getElementById('valor' + celdaSeleccionada).value = 'X';
    }

    if (jugador == 2) {
        document.getElementById('valor' + celdaSeleccionada).value = 'O';
    }

    document.getElementById('valor' + celdaSeleccionada).disabled = true;

    revisarFila(jugador);

    /*
        let valor1 = document.getElementById('valor1').value;
        let valor2 = document.getElementById('valor2').value;
        let valor3 = document.getElementById('valor3').value;
        let valor4 = document.getElementById('valor4').value;
        let valor5 = document.getElementById('valor5').value;
        let valor6 = document.getElementById('valor6').value;
        let valor7 = document.getElementById('valor7').value;
        let valor8 = document.getElementById('valor8').value;
        let valor9 = document.getElementById('valor9').value;
    */

    console.log('El valor es: ' + valor1);

    let cont = document.getElementById('cont').value;

    document.getElementById('cont').value = cont++;
}

const obtenerSeleccionado = (numCelda) => {

    document.getElementById('seleccionado').value = numCelda;

}


const mensajeGanador = jugador => {
    let tipo = (jugador == 1) ? 'X' : 'O'
    document.getElementById('mensaje').innerHTML = '<h1 style="color: green;">¡Juego terminado!</h1><p style="font-size: 1.5em;">Jugador '+ tipo +' ganó.</p>';

    for(let i = 1; i <=9; i++){
        document.getElementById('valor' + i).disabled = true;
    }
}



const reiniciar = () => {
    for(let i = 1; i<=9; i++){
        document.getElementById('valor' + i).value = '';
        document.getElementById('valor' + i).disabled = false;
        document.getElementById('valor' + i).removeAttribute('style');

    }
    document.getElementById('cont').value = 0;
    document.getElementById('seleccionado').disabled = 0;
    document.getElementById('mensaje').innerHTML = '';
}


const dibujarLineaGanador = (num1, num2, num3) =>{
    document.getElementById('valor' + num1).style.backgroundColor = '#C3E576';
    document.getElementById('valor' + num2).style.backgroundColor = '#C3E576';
    document.getElementById('valor' + num3).style.backgroundColor = '#C3E576';

}





const revisarFila = (jugador) => {

    //si es jugador 1 buscar X
    //si es jugador 2 buscar O

    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let valor3 = document.getElementById('valor3').value;
    let valor4 = document.getElementById('valor4').value;
    let valor5 = document.getElementById('valor5').value;
    let valor6 = document.getElementById('valor6').value;
    let valor7 = document.getElementById('valor7').value;
    let valor8 = document.getElementById('valor8').value;
    let valor9 = document.getElementById('valor9').value;

    let celdaSeleccionada = document.getElementById('seleccionado').value;

    if (jugador == 1) {

        if (celdaSeleccionada == 1) {
    
            if (valor1 == valor4 && valor1 == valor7) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,4,7)

            }
            if (valor1 == valor5 && valor1 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,5,9)
            }
            if (valor1 == valor2 && valor1 == valor3) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,2,3)
            }
        }
    
        // vertical 
        if (celdaSeleccionada == 2) {
            if (valor2 == valor5 && valor2 == valor8) {
                mensajeGanador(jugador);
                dibujarLineaGanador(2,5,8)
            }
            if (valor2 == valor1 && valor2 == valor3) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,2,3)
            }
        }
    
        // diagonal 
        if (celdaSeleccionada == 3) {
            if (valor3 == valor5 && valor3 == valor7) {
                mensajeGanador(jugador);
                dibujarLineaGanador(3,5,7)
            }
            if (valor3 == valor6 && valor3 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(3,6,9)
            }
            if (valor3 == valor2 && valor3 == valor1) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,2,3)
            }
        }
    
        // horizontal
        if (celdaSeleccionada == 4) {
            if (valor4 == valor5 && valor4 == valor6) {
                mensajeGanador(jugador);
                dibujarLineaGanador(5,4,6)
            }
            if (valor4 == valor1 && valor4 == valor7) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,4,7)
            }
        }
    
        //  vertical
        if (celdaSeleccionada == 5) {
            if (valor2 == valor5 && valor5 == valor8) {
                mensajeGanador(jugador);
                dibujarLineaGanador(2,5,8)
            }
            if (valor1 == valor5 && valor5 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,5,9)
            }
            if (valor3 == valor5 && valor5 == valor7) {
                mensajeGanador(jugador);
                dibujarLineaGanador(3,5,7)
            }
            if (valor4 == valor5 && valor5 == valor6) {
                mensajeGanador(jugador);
                dibujarLineaGanador(5,4,6)
            }
        }
    
        // horizontal 
        if (celdaSeleccionada == 6) {
            if (valor6 == valor5 && valor6 == valor4) {
                mensajeGanador(jugador);
                dibujarLineaGanador(6,4,5)
            }
            if (valor6 == valor3 && valor6 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(6,3,9)
            }
        }
    
        //  vertical
        if (celdaSeleccionada == 7) {
            if (valor7 == valor5 && valor7 == valor3) {
                mensajeGanador(jugador);
                dibujarLineaGanador(3,5,7)
            }
            if (valor7 == valor8 && valor7 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(8,9,7)
            }
            if (valor7 == valor4 && valor7 == valor1) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,4,7)
            }
        }



        //
        if (celdaSeleccionada == 8) {
            if (valor8 == valor2 && valor8 == valor5) {
                mensajeGanador(jugador);
                dibujarLineaGanador(8,2,5)
            }
            if (valor8 == valor7 && valor8 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(8,9,7)
            }
            if (valor8 == valor5 && valor8 == valor3) {
                mensajeGanador(jugador);
                dibujarLineaGanador(8,5,3)
            }
        }
    
        // diagonal 
        if (celdaSeleccionada == 9) {
            if (valor1 == valor5 && valor1 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,5,9)
            }
       
            
            if (valor9 == valor3 && valor9 == valor6) {
                mensajeGanador(jugador);
                dibujarLineaGanador(9,3,6)
            }
            if (valor9 == valor8 && valor9 == valor7) {
                mensajeGanador(jugador);
                dibujarLineaGanador(9,8,7)
            }

        }
    

        // 
        
    } else if (jugador == 2) {
    
        if (celdaSeleccionada == 1) {
    
            if (valor1 == valor4 && valor1 == valor7) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,4,7)
            }
            if (valor1 == valor5 && valor1 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,5,9)
            }
            if (valor1 == valor2 && valor1 == valor3) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,2,3)
            }
        }
    
        // vertical
        if (celdaSeleccionada == 2) {
            if (valor2 == valor5 && valor2 == valor8) {
                mensajeGanador(jugador);
                dibujarLineaGanador(2,5,8)
            }
            if (valor2 == valor1 && valor2 == valor3) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,2,3)
            }
        }
    
        // Check for diagonal win
        if (celdaSeleccionada == 3) {
            if (valor3 == valor5 && valor3 == valor7) {
                mensajeGanador(jugador);
                dibujarLineaGanador(3,5,7)
            }
            if (valor3 == valor6 && valor3 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(3,6,9)
            }
            if (valor3 == valor1 && valor3 == valor2) {
                mensajeGanador(jugador);
                dibujarLineaGanador(3,1,2)
            }
        }
        //  horizontal
        if (celdaSeleccionada == 4) {
            if (valor4 == valor5 && valor4 == valor6) {
                mensajeGanador(jugador);
                dibujarLineaGanador(4,5,6)
            }
            if (valor4 == valor1 && valor4 == valor7) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,4,7)
            }
        }

        // vertical 
        if (celdaSeleccionada == 5) {
            if (valor2 == valor5 && valor5 == valor8) {
                mensajeGanador(jugador);
                dibujarLineaGanador(2,5,8)
            }
            if (valor1 == valor5 && valor5 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,5,9)
            }
            // DIAGONAL
            if (valor5 == valor7 && valor5 == valor3) {
                mensajeGanador(jugador);
                dibujarLineaGanador(5,3,7)
            }

            // HORIZONTAL 2
                     
            if (valor5 == valor4 && valor5 == valor6) {
                mensajeGanador(jugador);
                dibujarLineaGanador(5,4,6)
            }

        }

        // horizontal
        if (celdaSeleccionada == 6) {
            if (valor6 == valor5 && valor6 == valor4) {
                mensajeGanador(jugador);
                dibujarLineaGanador(6,5,4)
            }
            if (valor6 == valor3 && valor6 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(6,3,9)
            }
        }

        // vertical
        if (celdaSeleccionada == 7) {
            if (valor7 == valor5 && valor7 == valor3) {
                mensajeGanador(jugador);
                dibujarLineaGanador(3,5,7)
            }
            if (valor7 == valor8 && valor7 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(8,9,7)
            }
            if (valor7 == valor4 && valor7 == valor1) {
                mensajeGanador(jugador);
                dibujarLineaGanador(7,4,1)
            }
        }


        // 
        
        //
        if (celdaSeleccionada == 8) {
            if (valor8 == valor2 && valor8 == valor5) {
                mensajeGanador(jugador);
                dibujarLineaGanador(8,2,5)
            }
            if (valor8 == valor7 && valor8 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(8,9,7)
            }
            if (valor8 == valor5 && valor8 == valor3) {
                mensajeGanador(jugador);
                dibujarLineaGanador(8,5,3)
            }
        }
    
        // diagonal
        if (celdaSeleccionada == 9) {
            if (valor1 == valor5 && valor1 == valor9) {
                mensajeGanador(jugador);
                dibujarLineaGanador(1,5,9)
            }
       
            
            if (valor9 == valor3 && valor9 == valor6) {
                mensajeGanador(jugador);
                dibujarLineaGanador(9,3,6)
            }
            if (valor9 == valor8 && valor9 == valor7) {
                mensajeGanador(jugador);
                dibujarLineaGanador(9,8,7)
            }

        }





        // 




    }
}

// crea una validacion de un correo
















