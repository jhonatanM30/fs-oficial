import React from 'react';
import CrudTableRow from './CrudTableRow';
import '../css/table.css'


export const CrudTable = ({ data, setdataToEdit, deleteData }) => {   
    return (        
        <div className="d-flex flex-wrap">           
            {
                data.length < 1 ?
                    <div>
                        <h3>No hay datos</h3>
                    </div> :
                    data.map(player =>
                        <CrudTableRow
                            key={player.id}
                            player={player}
                            setdataToEdit={setdataToEdit}
                            deleteData={deleteData}
                        />
                    )
            }
        </div>
    );
};
