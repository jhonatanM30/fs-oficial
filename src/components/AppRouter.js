import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";
import { DashBoardRouter } from './DashBoardRouter'
import { Home } from './Home'


export const AppRouter = () => {

    return (
        <Router>
            <Fragment>
                <Switch >
                    <Route exact path="/home" component={Home} />
                    <Route path="/" component={DashBoardRouter}/>
                </Switch>
            </Fragment>
        </Router>
    )

}
