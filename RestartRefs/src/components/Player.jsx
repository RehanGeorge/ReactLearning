import { useRef, useState } from "react";

export default function Player() {
  const [userName, setUserName] = useState("unknown entity");
  const nameInput = useRef();
  
  function setNameHandler() {
    setUserName(nameInput.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {userName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={nameInput} />
        <button onClick={setNameHandler}>Set Name</button>
      </p>
    </section>
  );
}
