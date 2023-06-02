import { useState } from "react";
import React from "react";
import "./App.css";
import axios from "axios";

function AddForm({ setregistro }) {
  const [inputs, setinputs] = useState({
    nombre: "",
    edad: "",
    grupo: "",
  });

  function cerrarRegistro() {
    setregistro(false);
  }

  function change(e) {
    setinputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  console.log(inputs);

  async function registrar(e) {
    e.preventDefault();
    try {
      if (inputs.grupo === "bellyDance") {
        await axios.post("http://localhost:3001/bellydance", inputs);
        setregistro(false);
        window.location.reload();
      }
      if (inputs.grupo === "folklore") {
        await axios.post("http://localhost:3001/folklore", inputs);
        setregistro(false);
        window.location.reload();
      }
      if (inputs.grupo === "ballet") {
        await axios.post("http://localhost:3001/ballet", inputs);
        setregistro(false);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="main-newRegister">
      <form className="form-new">
        <div>
          <h1 onClick={cerrarRegistro}>X</h1>
        </div>
        <label>nombre</label>
        <input
          type="text"
          placeholder="nombre"
          onChange={change}
          name="nombre"
        />

        <label>edad</label>
        <input type="number" placeholder="edad" onChange={change} name="edad" />
        <label>grupo</label>
        <select placeholder="grupo" onChange={change} name="grupo">
          <option value="bellyDance">bellyDance</option>
          <option value="folklore">folklore</option>
          <option value="ballet">ballet</option>
        </select>
        <button onClick={registrar}>Registrar</button>
      </form>
    </div>
  );
}

export default AddForm;
