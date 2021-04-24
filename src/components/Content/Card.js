import React from 'react'
import './Card.css'
const Card = ({id,link,title}) => {
    return (
        <div className="card">
            <div>
                <span>{id}</span>
                <span >{title}</span>
                <span >{link}</span>
            </div>
        </div>
    )
}

export default Card
