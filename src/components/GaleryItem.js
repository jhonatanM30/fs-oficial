import React from 'react'

export const GaleryItem = ({galery}) => {    
    return (
        <div className="p-2 bd-highlight img">
            <img src={galery.img} alt=""/>
        </div> 
    )
}
