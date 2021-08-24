import React, { useState, useEffect } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import { openModal } from '../helpers/modal'
import Spinner from '../helpers/Spinner';
import { BtnClose } from './BtnClose';
import { Table } from './Table';





export const InformationTeam = ({ stateMoreDetails, setstateMoreDetails }) => {

  const [players, setdataPlayers] = useState([])

  let apiKey = '6dd30bcfa05531435924005166a0ba3499563d457e3fc312a37ad2681138866f'
  let api = helpHttp();
  let url = `https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${stateMoreDetails[0].team_key}&APIkey=${apiKey}`

  useEffect(() => {
    api.get(url).then(resp => {
      if (!resp.err) {
        setdataPlayers(resp['result'][0].players);
        openModal('detailsModal')
      } else {
        alert(`Error ${resp.err}`)
      }
    })
  }, [])

  const handleReset = () => {
    setdataPlayers([]);
    setstateMoreDetails([null, false])
  };

  return (
    <div className="container">
      <div className="modal fade" id="detailsModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-xl">
          <div className="modal-content ">
            <div className="header text-center">
              <h1 className="card-title">{stateMoreDetails[0].team_name}</h1>
              <img src={stateMoreDetails[0].team_logo} alt="logo" />
              <h5>Entrenador</h5>
              {stateMoreDetails[0].manager}
            </div> 
            <div className="modal-body">
              <BtnClose handleReset={handleReset}/> <hr/>
              {
                players < 1 ? <Spinner />
                  : <Table information={players} />
              }
            </div>            
          </div>
        </div>
      </div>
    </div>
  )
}
