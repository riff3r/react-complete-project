import React, { Fragment, useReducer } from 'react';

///////////////////////////////////////////////////////////////
// Counter Example - 1 : Easy

// const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);

// 1. Call initial State. Ex - const initialState = 5;
// 2. Call ReducerFn. Ex - const reducer = (state, action) => {switch(action)}
// 3. const [count, dispatch] = useReducer(reducer, initialState);
// 4. Declare dispatch to get / change state.
// 5. declare count to display result

// const initialState = 5;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <Fragment>
//       <h2>Let's get started!</h2>

//       <div>Count - ${count}</div>
//       <button type="button" onClick={() => dispatch("decrement")}>
//         -
//       </button>
//       <button type="button" onClick={() => dispatch("increment")}>
//         +
//       </button>
//     </Fragment>
//   );
// }

///////////////////////////////////////////////////////////////
// Counter Example - 2: Complex

// Initial State should be a object

// const initialState = {
//   counter: 0,
//   counter2: 0,
// };

// const reducer = (state, action) => {
//   // console.log(counter);
//   console.log(action);
//   console.log(state);
//   switch (action.type) {
//     case "increment":
//       return { ...state, counter: state.counter + action.value };
//     case "decrement":
//       return { ...state, counter: state.counter - action.value };
//     case "increment2":
//       return { ...state, counter2: state.counter2 + action.value };
//     case "decrement2":
//       return { ...state, counter2: state.counter2 - action.value };
//     default:
//       return state.counter;
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <Fragment>
//       <h2>Let's get started!</h2>
//       <div>
//         <div>Count - ${count.counter}</div>
//         <button
//           type="button"
//           onClick={() => dispatch({ type: "decrement", value: 1 })}
//         >
//           -
//         </button>

//         <button
//           type="button"
//           onClick={() => dispatch({ type: "increment", value: 1 })}
//         >
//           +
//         </button>
//       </div>

//       <div>
//         <div>Count - ${count.counter2}</div>
//         <button
//           type="button"
//           onClick={() => dispatch({ type: "decrement2", value: 1 })}
//         >
//           -
//         </button>

//         <button
//           type="button"
//           onClick={() => dispatch({ type: "increment2", value: 1 })}
//         >
//           +
//         </button>
//       </div>
//     </Fragment>
//   );
// }

///////////////////////////////////////////////////////////////
// Counter Example - 3 : Local State. Easy process

/*
### Don't Change in reducer function
1. Declare seperate initialState
2. Declare seperate useReducer
3. Chnage state in useReducer
3. Chnage dispatchFn
  

*/

const initialState = 0;
const initialState2 = 5;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState2);
  return (
    <Fragment>
      <h2>Let's get started!</h2>

      <div>
        <div>Count - ${count}</div>
        <button type="button" onClick={() => dispatch('decrement')}>
          -
        </button>
        <button type="button" onClick={() => dispatch('increment')}>
          +
        </button>
      </div>

      <div>
        <div>Count - ${count2}</div>
        <button type="button" onClick={() => dispatch2('decrement')}>
          -
        </button>
        <button type="button" onClick={() => dispatch2('increment')}>
          +
        </button>
      </div>
    </Fragment>
  );
}

export default App;
