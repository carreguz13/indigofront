import "./App.css";

function App() {
  const array = [
    { id: 1, nombre: "lorena", edad: 20, grupo: "ballet" },
    { id: 2, nombre: "carla", edad: 14, grupo: "folclor" },
    { id: 3, nombre: "perla", edad: 17, grupo: "ballet" },
  ];

  return (
    <div className="main">
      <div>
        <div className="search-bar">
          <input type="search" />
          <button>registrar nuevo alumno</button>
        </div>
        <select name="select">
          <option value="value1" selected>
            Value 1
          </option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
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
            {array.map((lol) => (
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
