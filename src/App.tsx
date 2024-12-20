import './App.css'
import {useReducer} from "react";

const initialState = 0;

function CountReducer (state = initialState, action: {type: string, payload: number}) {
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        case 'REMOVE':
            return state - action.payload;
        default:
            return state;
    }
}

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
