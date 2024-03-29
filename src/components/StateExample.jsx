import { useEffect, useState } from "react";

export default function StateExample() {
  const [count, setCount] = useState(1);

  useEffect(()=>{
    if (count > 3) {
      console.log('over 3')
    }
  },[count])

  return (
    <div className="card">
      <h1>State</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
