export const createTable = () => {
  const divContainer = document.getElementById("table");
  divContainer.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "cell";
    newDiv.innerHTML = ` ${i + 1}`;
    divContainer.appendChild(newDiv);
  }
};

export const turn = () => {
  //Haremos que por cada click que se haga en un cuadro vacio cambie de turno, por lo tanto creamos dos constantes
  const turnA = "Jugador1";
  const turnB = "Jugador2";

  //Una vez hagamos click empezará por el turnoA, es decir, el jugador1, y llamaremos a la funcion addposition que añadirá en un array la posicion clickada.

  //Para saber si es una posición ganadora, crearemos un array de arrays con jugadas ganadoras, si algun jugador llega a 3 clicks en celdas vacias se valorará y llamará a la funcion jugadas ganadoras, donde compararemos las posiciones de aquel que tenga 3 clicks con dichas jugadas, si es igual saldrá un mensaje diciendo jugador ganador es X
};
