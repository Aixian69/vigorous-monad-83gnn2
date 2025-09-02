import React, { useState } from "react";

function UseEvent() {
  const [inp, setInp] = useState("");
  const [name, setName] = useState("");

  const clk = () => {
    setName(inp);
    setInp("");
  };

  return (
    <div>
      <h1>GeekforGeeks</h1>
      {name ? <h2>Your Name: {name}</h2> : null}
      <input
        type="text"
        placeholder="Enter your name..."
        onChange={(e) => setInp(e.target.value)}
        value={inp}
      />
      <button onClick={clk}>Save</button>
    </div>
  );
}

export default UseEvent;
