import React from 'react'
import { Fragment } from 'react'

export const CarouselItem = ({ match }) => {  
    return (
        <Fragment>
            <div className="bg-primary row">
                <div className="col-4">
                    <h5>{match.event_home_team}</h5>
                    <img src={match.home_team_logo} className="img-team" alt="" />
                </div>
                <div className="col-4">
                    <h1>{match.event_final_result}</h1>
                </div>
                <div className="col-4">
                    <h5>{match.event_away_team}</h5>
                    <img src={match.away_team_logo} className="img-team" alt="" />
                </div>
            </div>
            <div className="bg-secondary row">
                <ul className="list-unstyled mb-0">
                    {
                        match.goalscorers.map(gol =>
                        
                            <li key={gol.score}>
                                 <span className="p-2"> {gol.time}' </span>
                                    <span> {gol.home_scorer} ⚽</span>
                                    <span> {gol.score} </span>
                            </li>
                        
                        )
                    }                                      
                </ul>
            </div>
        </Fragment>
    )
}
