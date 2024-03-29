import { useState } from "react";

export default function StateExample() {
  const [myState, setMyState] = useState("Hello World!");

  setMyState("Bob is your uncle");

  return <div>{myState}</div>;
}

// returns "Bob is your uncle"

