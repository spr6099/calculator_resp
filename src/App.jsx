import { useState } from "react";
import "./App.css";

function App() {
  const [displayvalue, setdisplayvalue] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(displayvalue);
        setdisplayvalue(result.toString());
      } catch (error) {
        setdisplayvalue("Error");
      }
    } else if (value === "c") {
      setdisplayvalue("");
    } else if (value === "+/-") {
      if (displayvalue) {
        setdisplayvalue((prev) =>
          prev.startsWith("-") ? prev.slice(1) : `${prev}`
        );
      }
    } else {
      setdisplayvalue((prev) => prev + value);
    }
  };

  return (
    <div className="main">
      <div className="calculator">
        <div className="display">{displayvalue}</div>
        <div className="buttons">
          <button className="button gray" onClick={() => handleClick("/")}>
            /
          </button>
          <button className="button gray" onClick={() => handleClick("c")}>
            c
          </button>
          <button className="button gray" onClick={() => handleClick("+/-")}>
            +/-
          </button>
          <button className="button gray" onClick={() => handleClick("%")}>
            %
          </button>

          <button className="button dark" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="button dark" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="button dark" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="button orrange" onClick={() => handleClick("*")}>
            *
          </button>

          <button className="button dark" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="button dark" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="button dark" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="button orrange" onClick={() => handleClick("-")}>
            -
          </button>

          <button className="button dark" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="button dark" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="button dark" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="button orrange" onClick={() => handleClick("+")}>
            +
          </button>

          <button
            className="button span-2 dark"
            onClick={() => handleClick("0")}
          >
            0
          </button>
          <button className="button dark" onClick={() => handleClick(".")}>
            .
          </button>
          <button className="button orrange" onClick={() => handleClick("=")}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
