import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  const [inputs, setinputs] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    fecha_de_nacimiento: "",
    direccion: "",
    grupo: "",
    fecha_de_registro: "",
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
        <label>apellido</label>
        <input
          type="text"
          placeholder="apellido"
          onChange={change}
          name="apellido"
        />

        <label>edad</label>
        <input type="number" placeholder="edad" onChange={change} name="edad" />
        <label>fecha de nacimiento</label>
        <input
          type="date"
          placeholder="fecha de nacimiento"
          onChange={change}
          name="fecha_de_nacimiento"
        />
        <label>direccion</label>
        <input
          type="text"
          placeholder="direccion"
          onChange={change}
          name="direccion"
        />
        <label>grupo</label>
        <select onChange={change} name="grupo">
          <option>Selecciona grupo</option>
          <option value="bellyDance">bellyDance</option>
          <option value="folklore">folklore</option>
        </select>
        <label>fecha de registro</label>
        <input
          type="date"
          placeholder="fecha de registro"
          onChange={change}
          name="fecha_de_registro"
        />
        <button onClick={registrar}>Registrar</button>
      </form>
    </div>
  );
}

export default Add;
