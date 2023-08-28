import userEvent from '@testing-library/user-event';
import { func } from 'prop-types';
import {useEffect, useState} from "react";

function Hello(){
  useEffect(() => {
    console.log("hi");
    return() => console.log("bye");
  }, []);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(0); 
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
