import React from 'react'

export const BtnClose = ({ handleReset }) => {
    return (
        <button className="btn btn-secondary btn-sm" data-bs-target="#exampleModalToggle2"
            data-bs-toggle="modal" data-bs-dismiss="modal"
            onClick={handleReset}
        > <i className="fas fa-long-arrow-alt-left close-table"></i>Atras</button>
    )
}
