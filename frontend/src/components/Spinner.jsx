import React from 'react'

function Spinner(props) {
    return (
        <div className='d-flex justify-content-center w-100'>
            {props.loader && (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}

        </div>
    )
}

export default Spinner
