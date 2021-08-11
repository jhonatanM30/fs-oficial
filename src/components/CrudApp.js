import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import '../css/crudApp.css';

import { Nav } from './Nav';
import { Home } from './Home';
import { Footer } from './Footer';
import { Player } from './Player';

const CrudApp = () => {

    return (
        <Router>
            <div className="main-container">
                <Nav></Nav>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/jugadores">
                        <Player />
                    </Route>
                </Switch>
                <Footer></Footer>

            </div>
        </Router>
    )
};

export default CrudApp;