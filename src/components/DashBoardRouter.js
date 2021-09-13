import React, { Fragment } from 'react';
import {
    Switch, Redirect,
    Route
} from "react-router-dom";

import '../css/crudApp.css';

import { Nav } from './Nav';
import { Home } from './Home';
import { Team } from './Team';
import { Player } from './Player';
import { Footer } from './Footer';
import { Matches } from './Matches';
import { Galery } from './Galery';



export const DashBoardRouter = () => {
    return (

        <div className="main-container">
            <Nav></Nav>
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/equipos">
                        <Team />
                    </Route>
                    <Route exact path="/jugadores">
                        <Player />
                    </Route>
                    <Route exact path="/partidos">
                        <Matches />
                    </Route>
                    <Route exact path="/Galeria Futbolera">
                        <Galery />
                    </Route>
                    <Redirect to="/home" />
                </Switch>
                <Footer></Footer>
        </div>

    )
}
