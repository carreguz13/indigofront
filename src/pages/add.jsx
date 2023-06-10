import { useState } from "react";
import React from "react";
import "../App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  const [inputs, setinputs] = useState({
    nombre: "",
    edad: "",
    grupo: "",
  });

  function change(e) {
    setinputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function registrar(e) {
    e.preventDefault();
    try {
      if (inputs.grupo === "bellyDance") {
        await axios.post("http://localhost:3001/bellydance", inputs);
        navigate("/");
      } else if (inputs.grupo === "folklore") {
        await axios.post("http://localhost:3001/folklore", inputs);
        navigate("/");
      } else if (inputs.grupo === "ballet") {
        await axios.post("http://localhost:3001/ballet", inputs);
        navigate("/");
      } else {
        alert("seleciona");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="main-newRegister">
      <form className="form-new">
        <div>
          <h1>
            <Link to={"/"}>X</Link>
          </h1>
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
        <select onChange={change} name="grupo">
          <option>Selecciona grupo</option>
          <option value="bellyDance">bellyDance</option>
          <option value="folklore">folklore</option>
          <option value="ballet">ballet</option>
        </select>
        <button onClick={registrar}>Registrar</button>
      </form>
    </div>
  );
}

export default Add;
