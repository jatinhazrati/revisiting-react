import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [clickCount, setClickedCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);
    setClickedCount((prev) => prev + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="app">
      <h1>{advice}</h1>
      <button
        onClick={() => {
          getAdvice();
        }}
      >
        Get advice
      </button>
      <Message count={clickCount} />
    </div>
  );
}

function Message({ count }) {
  return (
    <p>
      You have read <strong>{count}</strong> pieces of advice
    </p>
  );
}

export default App;
