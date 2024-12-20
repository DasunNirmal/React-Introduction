import './App.css'
import {useReducer} from "react";
import {CountReducer, initialState} from "./reducers/CountReducer.ts";

function App() {
    const [count,dispatch] = useReducer(CountReducer,initialState);
  return (
      <>
          {count}
          <button onClick={() => dispatch({type: 'ADD',payload:1})}>ADD</button>
          <button onClick={() => dispatch({type: 'REMOVE',payload:1})}>REMOVE</button>
      </>
  )
}
export default App
