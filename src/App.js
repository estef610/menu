import React from 'react'
import UnidadUno from "./UnidadUno"
import UnidadDos from "./UnidadDos"
import UnidadTres from "./UnidadTres"
import UnidadCuatro from "./UnidadCuatro"
import ProductoIntegrador from "./ProductoIntegrador"
import Udg from "./components/Udg"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (

    <Router>

      <div className="container mt-0" >
        <br />
        <h1 >Materia IH734 Proyecto 2</h1>
        <br />
        <h3 >Unidad</h3>

        <div className="" >

          <Link to="/UnidadUno" className="btn btn-dark">
            Uno
        </Link>

          <Link to="/UnidadDos" className="btn btn-dark">
            Dos
        </Link>

          <Link to="/UnidadTres" className="btn btn-dark">
            Tres
        </Link>

          <Link to="/UnidadCuatro" className="btn btn-dark">
            Cuatro
        </Link>

          <Link to="/ProductoIntegrador" className="btn btn-dark">
            Producto integrador
        </Link>
        </div>

      </div>

      <Switch>

        <Route path="/UnidadUno">
          <div className="container">
            <br />
            <h3 className="text">Actividad</h3>
          </div>
          <UnidadUno />
        </Route>

        <Route path="/UnidadDos">
          <div className="container">
            <br />
            <h3 className="text">Actividad</h3>
          </div>
          <UnidadDos />
        </Route>

        <Route path="/UnidadTres">
          <div className="container">
            <br />
            <h3 className="text">Actividad</h3>
          </div>
          <UnidadTres />
        </Route>

        <Route path="/UnidadCuatro">
          <div className="container">
            <br />
            <h3 className="text">Actividad</h3>
          </div>
          <UnidadCuatro />
        </Route>

        <Route path="/ProductoIntegrador">
          <div className="container">
            <br />
            <h3 className="text">Actividad</h3>
          </div>
          <ProductoIntegrador />
        </Route>
        <div>
          <br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br />
          <Udg />
        </div>
      </Switch>
    </Router>

  )
}
export default App