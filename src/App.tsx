import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { version } from '../package.json';

function App() {
  const [ greetMsg, setGreetMsg ] = useState("");
  const [ name, setName ] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>
      <p>current version: v{ version }</p>

      <div className="row">
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo"/>
        </a>
      </div>

      <form
        className="row"
        onSubmit={ (e) => {
          e.preventDefault();
          greet();
        } }
      >
        <input
          id="greet-input"
          onChange={ (e) => setName(e.currentTarget.value) }
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{ greetMsg }</p>
    </div>
  );
}

export default App;
