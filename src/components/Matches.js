import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import { MatchesForm } from './MatchesForm';
import { MatchesList } from './MatchesList';

const dateInitial = {
    since: new Date().toISOString().slice(0, 10),
    until: new Date().toISOString().slice(0, 10),
}

export const Matches = () => {

    const [stateMatches, setstateMatches] = useState([])

    const [stateDate, setstateDate] = useState(dateInitial)


    let apiKey = '6dd30bcfa05531435924005166a0ba3499563d457e3fc312a37ad2681138866f'
    let api = helpHttp();
    let url = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${apiKey}&from=${stateDate.since}&to=${stateDate.until}`

    useEffect(() => {
        api.get(url).then(resp => {
            !resp.error ? setstateMatches(resp)
                : alert(`Error : ${resp['result'][0].msg}`);
        })
    }, [stateDate])

    return (
        <div className="animate__animated animate__fadeIn" >
            <MatchesForm setstateDate={setstateDate}
                stateDate={stateDate}
            />
            <MatchesList stateMatches={stateMatches}
            />
        </div>
    )
}
