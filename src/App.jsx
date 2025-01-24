import "./App.css";

function App() {
  return (
    <div className="calculator">
      <div className="display">123456789</div>
      <div className="buttons">
        <button className="button">/</button>
        <button className="button">+/-</button>
        <button className="button">c</button>
        <button className="button">%</button>

        <button className="button">7</button>
        <button className="button">8</button>
        <button className="button">9</button>
        <button className="button">*</button>

        <button className="button">4</button>
        <button className="button">5</button>
        <button className="button">6</button>
        <button className="button">-</button>

        <button className="button">1</button>
        <button className="button">2</button>
        <button className="button">3</button>
        <button className="button">+</button>

        <button className="button span-2">0</button>
        <button className="button">.</button>
        <button className="button">=</button>
      </div>
    </div>
  );
}

export default App;
