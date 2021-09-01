import React, { useState, useEffect } from 'react'
import Spinner from '../helpers/Spinner';
import { GaleryItem } from './GaleryItem';
import {getImgGalery} from '../helpers/galery'
export const Galery = () => {
    const [stateGalery, setstateGalery] = useState([])

    useEffect(() => {
        const resul = getImgGalery()
        setstateGalery( resul )
    }, [])
  

    return (
        <div className="container">
            <div className="d-flex flex-row flex-wrap justify-content-center">
            {                
                stateGalery.length < 1 ?
                    <Spinner></Spinner>
                    : stateGalery.map(galery =>
                        <GaleryItem
                            key={galery.id}
                            galery={galery}                            
                        />
                    )
            }              
            </div>
        </div>
    )
}
