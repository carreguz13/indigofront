import React from "react";

function EditForm({ seteditar }) {
  function cerrarEditar() {
    seteditar(false);
  }

  return (
    <div className="main-newEditar">
      <form className="form-new">
        <div>
          <h1 onClick={cerrarEditar}>X</h1>
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
