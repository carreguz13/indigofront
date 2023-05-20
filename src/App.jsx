import { useState } from "react";
import "./App.css";
import AddForm from "./AddForm";
import EditForm from "./EditForm,";

function App() {
  const [registro, setregistro] = useState(false);
  const [select, setselect] = useState("folklore");
  const [editar, seteditar] = useState(false);

  const folklore = [
    { nombre: "lorena", edad: 20, grupo: "folklore" },
    { nombre: "carla", edad: 14, grupo: "folklore" },
    { nombre: "perla", edad: 17, grupo: "folklore" },
  ];

  const bellyDance = [
    { nombre: "aranza", edad: 20, grupo: "bellyDance" },
    { nombre: "carla", edad: 45, grupo: "bellyDance" },
    { nombre: "señora", edad: 34, grupo: "bellyDance" },
    { nombre: "raziel", edad: 23, grupo: "bellyDance" },
  ];

  const ballet = [
    { nombre: "diana", edad: 45, grupo: "ballet" },
    { nombre: "leslie", edad: 34, grupo: "ballet" },
    { nombre: "sofia", edad: 23, grupo: "ballet" },
    { nombre: "jimena", edad: 25, grupo: "ballet" },
    { nombre: "rosario", edad: 15, grupo: "ballet" },
  ];

  function abrirRegistro() {
    setregistro(true);
  }

  function EditarRegistro() {
    seteditar(true);
  }

  return (
    <div className="main">
      <div>
        <div className="search-bar">
          <input type="search" placeholder="Buscar" />
          <button onClick={abrirRegistro}>registrar nuevo alumno</button>
        </div>
        <select
          value={select}
          onChange={(e) => {
            setselect(e.target.value);
          }}
        >
          <option value="folklore" selected>
            folklore
          </option>
          <option value="bellyDance">bellyDance</option>
          <option value="ballet">ballet</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Grupo</th>
              <th>Pago</th>
            </tr>
          </thead>
          <tbody>
            {select === "folklore" && (
              <>
                {folklore.map((lol, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{lol.nombre}</td>
                    <td>{lol.edad}</td>
                    <td>{lol.grupo}</td>
                    <td>
                      <button>Enviar link de pago</button>
                    </td>
                    <td>
                      <button onClick={EditarRegistro}>editar</button>
                      <button>eliminar</button>
                    </td>
                  </tr>
                ))}
              </>
            )}
            {select === "bellyDance" && (
              <>
                {bellyDance.map((lol, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{lol.nombre}</td>
                    <td>{lol.edad}</td>
                    <td>{lol.grupo}</td>
                    <td>
                      <button>Enviar link de pago</button>
                    </td>
                    <td>
                      <button onClick={EditarRegistro}>editar</button>
                      <button>eliminar</button>
                    </td>
                  </tr>
                ))}
              </>
            )}

            {select === "ballet" && (
              <>
                {ballet.map((lol, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{lol.nombre}</td>
                    <td>{lol.edad}</td>
                    <td>{lol.grupo}</td>
                    <td>
                      <button>Enviar link de pago</button>
                    </td>
                    <td>
                      <button onClick={EditarRegistro}>editar</button>
                      <button>eliminar</button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      {registro && <AddForm setregistro={setregistro} />}
      {editar && <EditForm seteditar={seteditar} />}
    </div>
  );
}

export default App;
