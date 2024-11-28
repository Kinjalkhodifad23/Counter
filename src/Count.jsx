import React, { useState } from 'react'

const Count = () => {
    var [use, setuse] = useState(23)

   
    return (

        <div>
            <input type="text" id='val1' />
            <h1>{use}</h1>
            <button onClick={() => { setuse(use + 1) }}>jmij</button>
            <button onClick={() => {
                var value1=document.getElementById("val1").value
                setuse(value1 *2) }}>multi</button>
            </div>
    )
}

export default Count