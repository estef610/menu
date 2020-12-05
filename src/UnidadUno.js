import React from 'react'
import Udg from "./components/Udg"

const UnidadUno = () => {

    return (

        <div className="container">
            <div className="">
                <a href="https://desarrolloweb.udgvirtual.udg.mx/mod/forum/view.php?id=965" className="btn btn-dark">Preliminar</a>
                <a href="https://desarrolloweb.udgvirtual.udg.mx/mod/assign/view.php?id=966" className="btn btn-dark">Uno</a>
                <a href="https://desarrolloweb.udgvirtual.udg.mx/mod/assign/view.php?id=967" className="btn btn-dark">Dos</a>
                <a href="https://desarrolloweb.udgvirtual.udg.mx/mod/assign/view.php?id=968" className="btn btn-dark">Integradora</a>

            </div>
            <div> 
            <br /><br /><br /><br /><br />
               <Udg />
           </div>
        </div>

    )
}

export default UnidadUno
