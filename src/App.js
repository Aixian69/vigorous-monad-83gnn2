import React, { useEffect, useState } from "react";
interface AppProps {
  userId: number;
}
function App({ userId }: AppProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Effect ran because count or userId changed!`);
    console.log(`Count: ${count}, User ID: ${userId}`);

    // Example: Fetch data when count or userId changes
    // fetchData(count, userId);
  }, [count, userId]); // Runs whenever count or userId changes

  return (
    <div>
      <h1>useEffect on Specific Value Change</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
export default App;
