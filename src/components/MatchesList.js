import React from 'react'
import { Carousel } from './Carousel'
import Spinner from "../helpers/Spinner";



export const MatchesList = ({ stateMatches }) => {
    let stateFirstCarousel = 0;
    return (
        <div id="carouselExampleCaptions" className="carousel slide mt-2" data-bs-interval="false">
            <div className="carousel-inner content-item-carousel pt-5">
                <div className="d-flex justify-content-center">
                    <h1 className="title-slide">Resumen del partido</h1>
                </div>
                {
                    stateMatches.length < 1 ? <Spinner></Spinner>
                        : stateMatches.result ? stateMatches['result'].map(match =>
                            <Carousel
                                key={match.event_key}
                                match={match}
                                stateFirstCarousel={++stateFirstCarousel}
                            />
                        ) : <h1 className="title-slide">No Hay Resultados De Partidos Para Esta Fecha</h1>

                }

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
