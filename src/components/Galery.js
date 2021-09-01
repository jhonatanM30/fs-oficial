import React, { useState, useEffect } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import { GaleryItem } from './GaleryItem';


export const Galery = () => {
    const [stateGalery, setstateGalery] = useState([])

    let api = helpHttp();
    let url = 'http://localhost:5000/galery'

    useEffect(() => {
        api.get(url).then(resp => {
            !resp.err ? setstateGalery(resp)
                : alert(`Error ${resp.err}`);
                
        })
    }, [])

    return (
        <div className="container">
            <div class="d-flex flex-row bd-highlight mb-3">
                <GaleryItem stateGalery={stateGalery}/>
            </div>
        </div>
    )
}
