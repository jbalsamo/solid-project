import { Component } from "solid-js";
import MenuBar from "./components/MenuBar";

const App: Component = () => {
  return (
    <div class='h-screen bg-slate-800 text-white flex'>
      <div class='w-full'>
        <MenuBar />
      </div>
    </div>
  );
};

export default App;
