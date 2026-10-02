import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const callApi = async () => {
    try {
      const res = await fetch("/api/hello");
      setData(await res.json());
      setError("");
    } catch (e) {
      setError("Could not reach the backend");
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 40 }}>
      <h1>My First Full-Stack App</h1>
      <button onClick={callApi}>Call backend</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
