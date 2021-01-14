import React from 'react';
import './Header.css'

const Header = (props) => {
    const { name, lastName, id } = props;
    if (id != null) {
        return (
            <div className="header">
                <div className="header-interno container">
                    <p>Bienvenido, {name} {lastName}</p>
                    <button placeholder="Salir" onClick={props.goodBye}>Salir</button>
                </div>
            </div>
        )
    }
    return (
        <div className="header">
            <p>PORTAL GRPUCP</p>
        </div>
    )   
}

export default Header;