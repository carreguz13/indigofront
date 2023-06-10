import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function EditForm() {
  return (
    <div className="main-newEditar">
      <form className="form-new">
        <div>
          <h1>
            <Link to={"/"}>X</Link>
          </h1>
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

export default EditForm;
