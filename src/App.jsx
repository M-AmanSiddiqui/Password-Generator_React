import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  const add = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const remove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h1>Hello</h1>

      <button onClick={add}>
        add {counter}
      </button>
      <br />

      <button onClick={remove}>
        remove {counter}
      </button>
    </div>
  );
}

export default App;
