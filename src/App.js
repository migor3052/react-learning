import './App.css';
import React, {useState, useEffect} from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  console.log(emotion);
  useEffect(() => {
    console.log(`It's ${emotion} around here!`)
  }, [emotion]);
  useEffect(() => {
    console.log(`It's ${secondary} around here!`)
  }, [secondary]);

  return (
    <>
      <h1>Hello, emotion is {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("Frustrated")}>
        Frustrate
      </button>
      <button onClick={()=> setEmotion("Enthusiastic")}>Enthuse</button>
      <button onClick={() => setSecondary("Crabby")}>Make crabby</button>
    </>
  );
}

export default App;
