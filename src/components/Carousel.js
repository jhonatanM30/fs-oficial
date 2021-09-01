import React from 'react'

let classNameValue = "";
let count = 1;
export const Carousel = ({ match }) => {
    if (count === 1) {
        classNameValue = "carousel-item active container "
        count = count + 1
    } else {
        classNameValue = "carousel-item container"
    }

    return (
        <div className={classNameValue}>
            <div className="row carousel-team">
                <div className="col-md-3 col-lg-4">
                    <h5>{match.event_home_team}</h5>
                    <img src={match.home_team_logo} className="img-team" alt="" />
                </div>
                <div className="col-md-3 col-lg-4">
                    <h1>{match.event_final_result}</h1>
                </div>
                <div className="col-md-3 col-lg-4">
                    <h5>{match.event_away_team}</h5>
                    <img src={match.away_team_logo} className="img-team" alt="" />
                </div>
            </div>
            <div className="row carousel-Info">
                <div className="col">Minuto de Juego</div>
                <div className="col">Goleador</div>
                <div className="col">Marcador</div>
            </div>
            {
                match.goalscorers.map(gol =>
                    <div key={gol.score} className="row carousel-Info">
                        <div className="col p-2">
                            {gol.time}'
                        </div>
                        <div className="col p-2">
                            {

                                gol.home_scorer ? gol.home_scorer : gol.away_scorer

                            } ⚽
                        </div>
                        <div className="col p-2"> {gol.score} </div>
                    </div>
                )
            }

        </div>

    )
}
