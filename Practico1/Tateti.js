var bandera = false;
var turno = 0;
var tablero = new Array();
var contador = 0;

function comenzar(){
    contador=0;
    bandera = true;
    var jugador1 = document.getElementById("jugador1");
    var jugador2 = document.getElementById("jugador2");
    if(jugador1.value == ""){
        alert("Completar nombre");
        jugador1.focus();
    }else{
        if(jugador2.value==""){
            alert("Completar nombre");
            jugador2.focus();
        }else{
            tablero[0]=document.getElementById("p0");
            tablero[1]=document.getElementById("p1");
            tablero[2]=document.getElementById("p2");
            tablero[3]=document.getElementById("p3");
            tablero[4]=document.getElementById("p4");
            tablero[5]=document.getElementById("p5");
            tablero[6]=document.getElementById("p6");
            tablero[7]=document.getElementById("p7");
            tablero[8]=document.getElementById("p8");
            for(var i=0;i<9;i++){
                tablero[i].className = "botonInicial";
                tablero[i].value = " ";

            }
            turno=1;
            document.getElementById("turnoJugador").innerHTML = "Jugador " + jugador1.value;
        }
    }
}
function colocar(boton){
    if(bandera==true){
        if(turno==1 && boton.value==" "){
            turno=2;
            document.getElementById("turnoJugador").innerHTML= "Jugador " + jugador2.value;
            boton.value="X";
            boton.className="botonJugador1";
        }else{
            if(turno==2 && boton.value==" "){
                turno=1;
                document.getElementById("turnoJugador").innerHTML= "Jugador " + jugador1.value;
                boton.value="O";
                boton.className="botonJugador2";
            }
        }
    }
verificar();
}
function verificar(){

    contador++;

    if((tablero[0].value == "X" && tablero[1].value == "X" && tablero[2].value == "X")
        ||(tablero[3].value == "X" && tablero[4].value == "X" && tablero[5].value == "X")
        ||(tablero[6].value == "X" && tablero[7].value == "X" && tablero[8].value == "X")
        ||(tablero[0].value == "X" && tablero[3].value == "X" && tablero[6].value == "X")
        ||(tablero[1].value == "X" && tablero[4].value == "X" && tablero[7].value == "X")
        ||(tablero[2].value == "X" && tablero[5].value == "X" && tablero[8].value == "X")
        ||(tablero[0].value == "X" && tablero[4].value == "X" && tablero[8].value == "X")
        ||(tablero[2].value == "X" && tablero[4].value == "X" && tablero[6].value == "X")
    ){
        swal("Gana " + jugador1.value);
        bandera = false;
        contador=0;
    }
    
    if((tablero[0].value == "O" && tablero[1].value == "O" && tablero[2].value == "O")
        ||(tablero[3].value == "O" && tablero[4].value == "O" && tablero[5].value == "O")
        ||(tablero[6].value == "O" && tablero[7].value == "O" && tablero[8].value == "O")
        ||(tablero[0].value == "O" && tablero[3].value == "O" && tablero[6].value == "O")
        ||(tablero[1].value == "O" && tablero[4].value == "O" && tablero[7].value == "O")
        ||(tablero[2].value == "O" && tablero[5].value == "O" && tablero[8].value == "O")
        ||(tablero[0].value == "O" && tablero[4].value == "O" && tablero[8].value == "O")
        ||(tablero[2].value == "O" && tablero[4].value == "O" && tablero[6].value == "O")
    ){
        swal("Gana " + jugador2.value);
        bandera = false;
        contador=0;
    }
    
    
    if(contador==9 && bandera==true){
        bandera=false;
        swal("Empate");
        contador=0;
    }
    
}