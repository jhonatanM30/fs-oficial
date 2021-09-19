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
import { InformationTeam } from './InformationTeam';



export const DashBoardRouter = () => {
    return (
        <div className="main-container">
            <Nav />
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/equipos">
                        <Team />
                    </Route>
                    <Route exact path="/equipo/:equipoId" component={InformationTeam}></Route>
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
            </div>
            <Footer></Footer>
        </div>


    )
}
