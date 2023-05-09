import "./App.css";

function App() {
  const array = [
    { id: 1, nombre: "lorena", edad: 20, grupo: "ballet" },
    { id: 2, nombre: "carla", edad: 14, grupo: "folclor" },
    { id: 3, nombre: "perla", edad: 17, grupo: "ballet" },
  ];

  return (
    <div className="main">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Grupo</th>
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
                <button>editar</button>
                <button>eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
