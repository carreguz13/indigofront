import React from "react";
import "./App.css";

function AddForm({ setregistro }) {
  function cerrarRegistro() {
    setregistro(false);
  }

  return (
    <div className="main-newRegister">
      <form className="form-new">
        <div>
          <h1 onClick={cerrarRegistro}>X</h1>
        </div>
        <label>nombre</label>
        <input type="text" placeholder="nombre" />
        <label>edad</label>
        <input type="number" placeholder="edad" />
        <label>grupo</label>
        <select placeholder="grupo">
          <option value="">folklore</option>
          <option value="">bellyDance</option>
          <option value="">ballet</option>
        </select>
        <button>Registrar</button>
      </form>
    </div>
  );
}

export default AddForm;
