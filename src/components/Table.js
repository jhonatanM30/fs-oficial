import React from 'react'
import { TableItem } from './TableItem';
import '../css/styles.css'
import { TableHeader } from './TableHeader';


export const Table = ({ information }) => {
    return (
        <div className="table-responsive-xl conten-table">
            <table className="table">
                <TableHeader />
                <tbody>
                    {
                        information.map(info =>
                            <TableItem
                                key={info.player_key}
                                info={info}
                            />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
