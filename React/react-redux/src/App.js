import React from "react";
// import Counter from "./features/counter/Counter";
import Todolist from "./features/Todolist/Todolist";
import Addtodo from "./features/Todolist/Addtodo";

function App() {
  return (
   <>
    <h1>hello this App Component</h1>
    {/* <Counter /> */}
    <Addtodo />
    <Todolist />
   </>
  );
}

export default App;
