export const createTable = () => {
  const divContainer = document.getElementById("table");
  divContainer.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = `cell ${i + 1}`;
    newDiv.innerHTML = "";
    divContainer.appendChild(newDiv);
  }
};

export const turn = () => {
  //Haremos que por cada click que se haga en un cuadro vacio cambie de turno, por lo tanto creamos dos constantes

  const cells = document.querySelectorAll(".cell");
  const turnA = "Jugador1";
  const turnB = "Jugador2";
  let turnPlayer = turnA;
  const jugadaA = [];
  const jugadaB = [];

  const jugadasGanadoras = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  cells.forEach((cell, index) => {
    cell.addEventListener("click", (e) => {
      e.preventDefault();

      if (cell.innerHTML === "") {
        if (turnPlayer === turnA) {
          cell.innerHTML = "O";

          jugadaA.push(index + 1);
          if (checkJugada(jugadaA, jugadasGanadoras)) {
            alert("Jugador A HAS GANADO");
            resetGame(cells);
          }
          turnPlayer = turnB;
        } else {
          cell.innerHTML = "X";
          jugadaB.push(index + 1);
          if (checkJugada(jugadaB, jugadasGanadoras)) {
            alert("Jugador B has ganado!!!");
            resetGame(cells);
          }
          turnPlayer = turnA;
        }
      }
    });
  });
};

const checkJugada = (jugada, jugadasGanadoras) => {
  let winner = false;

  jugadasGanadoras.forEach((combination) => {
    const allPositionMatch = combination.every((position) =>
      jugada.includes(position)
    );

    if (allPositionMatch) {
      winner = true;
    }
  });

  return winner;
};

const resetGame = (cells) => {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
};
