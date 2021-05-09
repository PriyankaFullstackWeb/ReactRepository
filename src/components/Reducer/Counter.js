import React, {useReducer} from 'react'

function reducer(state,action){
    switch(action){
        case "increment":
            return state +1;
            case "decrement":
                return state - 1;
                case "reset":
                return 0;
    }

}


function Counter() {
const [state, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <p>{state}</p>
          <button onClick={()=>dispatch("increment")}>+</button> 
           <button onClick={() => dispatch("decrement")}>-</button>
          <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    )
}

export default Counter
