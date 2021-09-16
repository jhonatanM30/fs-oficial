import React, { useState, useEffect } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import { CardPlayer } from './CardPlayer';
import { useParams } from 'react-router'
import Spinner from '../helpers/Spinner';

export const InformationTeam = () => {

  const { equipoId } = useParams();

  const [players, setdataPlayers] = useState([])

  let apiKey = '6dd30bcfa05531435924005166a0ba3499563d457e3fc312a37ad2681138866f'
  let api = helpHttp();
  let url = `https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${equipoId}&APIkey=${apiKey}`

  useEffect(() => {
    api.get(url).then(resp => {
      if (!resp.err) {
        setdataPlayers(resp['result'][0].players);
      } else {
        alert(`Error ${resp.err}`)
      }
    })
  })


  return (
    <div className="container">
      {
          players.length < 1 ? <Spinner></Spinner>
          : <div className="row justify-content-center p-2 animate__animated animate__fadeIn">
            {
              players.map(player =>
                <CardPlayer key={player.player_key}
                  player={player} />
              )
            }
          </div>
      }
    </div>
  )
}
