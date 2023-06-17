import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [select, setselect] = useState("bellyDance");
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

  // funcion que elimina a usuario de bellydance
  async function handleDeleteBellydance(id) {
    try {
      await axios.delete("http://localhost:3001/bellydance/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteFolklore(id) {
    try {
      await axios.delete("http://localhost:3001/folklore/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="main">
      <div>
        <div className="search-bar">
          <button>
            <Link to={"/add"}>Registar alumno</Link>
          </button>
        </div>
        <select
          value={select}
          onChange={(e) => {
            setselect(e.target.value);
          }}
        >
          <option value="bellyDance">bellyDance</option>
          <option value="folklore">folklore</option>
        </select>
        <table className="tabla">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Edad</th>
              <th>Fecha de nacimiento</th>
              <th>Dirección</th>
              <th>Grupo</th>
              <th>Fecha de registro</th>
              <th>Pago</th>
              <th>Editar/Elimianr</th>
            </tr>
          </thead>
          <tbody>
            {select === "bellyDance" && (
              <>
                {bellydance.map((users) => (
                  <tr key={users.id}>
                    <td>{users.id}</td>
                    <td>{users.nombre}</td>
                    <td>{users.apellidos}</td>
                    <td>{users.edad}</td>
                    <td>{users.fecha_de_nacimiento}</td>
                    <td>{users.direccion}</td>
                    <td>{users.grupo}</td>
                    <td>{users.fecha_de_registro}</td>
                    <td>
                      <button>Enviar link de pago</button>
                    </td>
                    <td>
                      <button>
                        <Link to={"/edit"}>Editar alumno</Link>
                      </button>
                      <button onClick={() => handleDeleteBellydance(users.id)}>
                        eliminar
                      </button>
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
                      <button>
                        <Link to={"/edit"}>Editar alumno</Link>
                      </button>
                      <button onClick={() => handleDeleteFolklore(users.id)}>
                        eliminar
                      </button>
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

export default Home;
