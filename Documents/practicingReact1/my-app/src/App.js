import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);






  function handleNumberClick(value) {
    inputRef.current.value = (inputRef.current.value || "") + value;
  }

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);

    if (result > 0) {
      resultRef.current.style.color = "green";
    } else if (result < 0) {
      resultRef.current.style.color = "red";
    } else {
      resultRef.current.style.color = "white";
    }
  }


  

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <form>
        <p ref={resultRef} className="result-display">{result}</p>
        <input ref={inputRef} type="number" placeholder="Type a number" className="input-field" />
        <div className="number-buttons">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} type="button" onClick={() => handleNumberClick(num)} className="number-button">
              {num}
            </button>
          ))}
        </div>
        <div className="operation-buttons">
          <button onClick={plus} className="operation-button">+</button>
          <button onClick={minus} className="operation-button">-</button>
          <button onClick={times} className="operation-button">*</button>
          <button onClick={divide} className="operation-button">/</button>
        </div>
        <div className="reset-buttons">
          <button onClick={resetInput} className="reset-button">Reset Input</button>
          <button onClick={resetResult} className="reset-button">Reset Result</button>
        </div>
      </form>
    </div>
  );
}

export default App;