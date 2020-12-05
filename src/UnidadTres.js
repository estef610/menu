import React from 'react'
import Udg from "./components/Udg"

const UnidadTres = () => {
    
    return (

        <div className="container">
            <div className="">
                <a href="https://desarrolloweb.udgvirtual.udg.mx/mod/forum/view.php?id=974" className="btn btn-dark">Preliminar</a>
                <a href="https://desarrolloweb.udgvirtual.udg.mx/mod/assign/view.php?id=975" className="btn btn-dark">Uno</a>
                <a href="https://desarrolloweb.udgvirtual.udg.mx/mod/assign/view.php?id=976" className="btn btn-dark">Dos</a>
                <a href="https://desarrolloweb.udgvirtual.udg.mx/mod/assign/view.php?id=977" className="btn btn-dark">Tres</a>
                <a href="https://desarrolloweb.udgvirtual.udg.mx/mod/assign/view.php?id=978" className="btn btn-dark">Integradora</a>
            
            </div>
            <div>
                <br /><br /><br /><br /><br />
                <Udg />
            </div>
        </div>
    )
}

export default UnidadTres
