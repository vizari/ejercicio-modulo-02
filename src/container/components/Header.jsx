import React from 'react'
import Marte from './../../assets/imgs/viaje-marte.jpg'

import './Header.css'
export const Header = () => {
    const style = { maxWidth:"100%"}
    return (
        <div className="header mb-4">
            <img src={Marte} alt="Viaje a Marte" style={style}/>
            <div className="title-banner p-3">
                <h2 className="text-white">Inscripción viaje a Marte</h2>
            </div>
       </div>
    )
}

export default Header;
