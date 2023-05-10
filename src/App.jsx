import { useState } from "react";
import "./App.css";

function App() {
  const [select, setselect] = useState("folklore");

  const folklore = [
    { id: 1, nombre: "lorena", edad: 20, grupo: "folklore" },
    { id: 2, nombre: "carla", edad: 14, grupo: "folklore" },
    { id: 3, nombre: "perla", edad: 17, grupo: "folklore" },
  ];

  const bellyDance = [
    { id: 1, nombre: "aranza", edad: 20, grupo: "bellyDance" },
    { id: 2, nombre: "carla", edad: 45, grupo: "bellyDance" },
    { id: 3, nombre: "señora", edad: 34, grupo: "bellyDance" },
    { id: 4, nombre: "raziel", edad: 23, grupo: "bellyDance" },
  ];

  const ballet = [
    { id: 1, nombre: "diana", edad: 45, grupo: "ballet" },
    { id: 2, nombre: "leslie", edad: 34, grupo: "ballet" },
    { id: 3, nombre: "sofia", edad: 23, grupo: "ballet" },
    { id: 4, nombre: "jimena", edad: 25, grupo: "ballet" },
    { id: 5, nombre: "rosario", edad: 15, grupo: "ballet" },
  ];

  return (
    <div className="main">
      <div>
        <div className="search-bar">
          <input type="search" placeholder="Buscar" />
          <button>registrar nuevo alumno</button>
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
                {folklore.map((lol) => (
                  <tr>
                    <td>{lol.id}</td>
                    <td>{lol.nombre}</td>
                    <td>{lol.edad}</td>
                    <td>{lol.grupo}</td>
                    <td>
                      <button>Enviar link de pago</button>
                    </td>
                    <td>
                      <button>editar</button>
                      <button>eliminar</button>
                    </td>
                  </tr>
                ))}
              </>
            )}
            {select === "bellyDance" && (
              <>
                {bellyDance.map((lol) => (
                  <tr>
                    <td>{lol.id}</td>
                    <td>{lol.nombre}</td>
                    <td>{lol.edad}</td>
                    <td>{lol.grupo}</td>
                    <td>
                      <button>Enviar link de pago</button>
                    </td>
                    <td>
                      <button>editar</button>
                      <button>eliminar</button>
                    </td>
                  </tr>
                ))}
              </>
            )}

            {select === "ballet" && (
              <>
                {ballet.map((lol) => (
                  <tr>
                    <td>{lol.id}</td>
                    <td>{lol.nombre}</td>
                    <td>{lol.edad}</td>
                    <td>{lol.grupo}</td>
                    <td>
                      <button>Enviar link de pago</button>
                    </td>
                    <td>
                      <button>editar</button>
                      <button>eliminar</button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
