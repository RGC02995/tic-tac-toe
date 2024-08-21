import { createTable } from "./utils/utils";
import "./app.css";
function App() {
  //Lo primero será crear un tablero cuando le demos a jugar

  return (
    <>
      <h1 className="title">TIC TAC TOE</h1>
      <div id="table" className="table"></div>
      <button className="start__game-button" onClick={createTable}>
        Play
      </button>
    </>
  );
}

export default App;
