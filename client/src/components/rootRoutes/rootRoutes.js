import { Fragment } from "react";
import { Route } from "react-router";
import {Routes} from 'react-router-dom'
import LandingPage from '../../pages/landingPage/LandingPage';


export default function rootRoutes() {
    return(
        <Fragment>
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
            </Routes>
        </Fragment>
    )
} 