import React from "react";
import {Link} from 'react-router-dom'
import '../../Styles/landingPage.css'



const LandingPage = () => { 
    return(
        <div className="fondo">
            <h1>
            <Link to='/'>Paises</Link>
            </h1>
            
        </div>
    )
}

export default LandingPage;