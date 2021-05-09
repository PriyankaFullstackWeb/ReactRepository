import React, { useReducer } from 'react'

function Reducer(state,action){
    switch(action){
        case "increment":
           return state + 1;
            case "decrement":
             return  state - 1;
                case "reset":
                    return 0;
    }
}
    

    


function PracticeCounter() {
    const[state,dispatch]=useReducer(Reducer,0)
    return (
        <div>
          <button onClick={()=>dispatch("increment")}></button>  
          <button onClick={()=>dispatch("decrement")}></button>
        </div>
    )
}

export default PracticeCounter
