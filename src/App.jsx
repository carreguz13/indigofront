import { useState, useEffect } from "react";
import "./App.css";
import AddForm from "./AddForm";
import EditForm from "./EditForm,";
import axios from "axios";

function App() {
  const [registro, setregistro] = useState(false);
  const [select, setselect] = useState("bellyDance");
  const [editar, seteditar] = useState(false);
  const [bellydance, setbellydance] = useState([]);
  const [folklore, setfolklore] = useState([]);
  const [ballet, setballet] = useState([]);

  async function getDataBellydance() {
    try {
      const res = await axios.get("http://localhost:3001/bellydance");
      setbellydance(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getDatafolklore() {
    try {
      const res = await axios.get("http://localhost:3001/folklore");
      setfolklore(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getDataballet() {
    try {
      const res = await axios.get("http://localhost:3001/ballet");
      setballet(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDataBellydance();
    getDatafolklore();
    getDataballet();
  }, []);

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
          <button onClick={abrirRegistro}>registrar nuevo alumnoo</button>
        </div>
        <select
          value={select}
          onChange={(e) => {
            setselect(e.target.value);
          }}
        >
          <option value="bellyDance">bellyDance</option>
          <option value="folklore">folklore</option>
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
            {select === "bellyDance" && (
              <>
                {bellydance.map((users) => (
                  <tr key={users.id}>
                    <td>{users.id}</td>
                    <td>{users.nombre}</td>
                    <td>{users.edad}</td>
                    <td>{users.grupo}</td>
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
            {select === "folklore" && (
              <>
                {folklore.map((users) => (
                  <tr key={users.id}>
                    <td>{users.id}</td>
                    <td>{users.nombre}</td>
                    <td>{users.edad}</td>
                    <td>{users.grupo}</td>
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
                {ballet.map((users) => (
                  <tr key={users.id}>
                    <td>{users.id}</td>
                    <td>{users.nombre}</td>
                    <td>{users.edad}</td>
                    <td>{users.grupo}</td>
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
