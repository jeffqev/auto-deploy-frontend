import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    hanleConsultar();
  }, []);

  const hanleConsultar = () => {
    const apiurl = process.env.REACT_APP_API_URL;
    console.log(apiurl);
    axios
      .get(apiurl)
      .then((response) => {
        setData({
          msg: response.data.msg,
          fecha: response.data.fecha,
        });
      })
      .catch((e) => {
        setData({
          msg: "error al realizar la peticion",
          fecha: "",
        });
      });

    setData({
      msg: "Error al consultar",
      fecha: "",
    });
  };

  return (
    <>
      <div className="container mt-4 d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <div class="card">
              <div class="card-header">Frontend</div>
              <div class="card-body">
                <p class="card-text">{data.msg}</p>
                <h5 class="card-title">{data.fecha}</h5>
                <button onClick={hanleConsultar} class="btn btn-primary mt-1">
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
