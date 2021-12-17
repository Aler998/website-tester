import React from 'react'

function Card(props) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{props.code}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.context}</h6>
                <p className="card-text">{props.message}</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">{props.selector}</a>
            </div>
        </div>
    )
}

export default Card
