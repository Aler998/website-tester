import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Form(props) {

    const [url, seturl] = useState('')


    const fetchData = async (event) => {
        event.preventDefault()
        props.setLoader(true)
        await axios.get('http://localhost:5000/api/test?url=' + url)
            .then(res => {
                console.log(res)
                props.setIssues(res.data.issues)
                props.setLoader(false)
            }, err => {
                console.error();
            })
    }

    return (
        <form method='get' onSubmit={(event) => fetchData(event)}>
            <div style={{ background: '#4c4c4c', padding: '2rem', margin: '2rem' }}>
                <div className="input-group mb-3">
                    <input type="text" onChange={(e) => seturl(e.target.value)} className="form-control" placeholder="Insert link" aria-label="Insert link" aria-describedby="button-addon2" />
                    <button className="btn btn-primary" type="submit" id="button-addon2">Cerca</button>
                </div>
            </div>
        </form>
    )
}

export default Form
