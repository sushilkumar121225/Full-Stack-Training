// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   function decrease() {
//      if (count > 0){
//     setCount(count - 1);
//   }}

//   function increase() {
//     if (count < 100){
//     setCount(count + 1);
//   }
// }

//   function reset() {
//     setCount(0);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>

//       <button onClick={decrease}>Decrease</button>
//       <button onClick={increase}>Increase</button>
//       <button onClick={reset}>Reset</button>
//     </div>
    
//   );
// }

// export default App;
import React from "react";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;