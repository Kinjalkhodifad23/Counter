import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    var [sec, setsec] = useState(0)
    var [min, setmin] = useState(0)
    var [hr, sethr] = useState(0)
    var [active, setactive] = useState(0)
    var [reset, setreset] = useState(0)
    var [am, setam] = useState("am")
    useEffect(() => {
        if (active == 0) {
            setTimeout(() => {
                setsec(sec + 1)
            }, 100)
            if (sec == 60) {
                setmin(min + 1)
                setsec(0)
            }
            else if (min == 60) {
                sethr(hr + 1)
                setmin(0)
                setsec(0)
            }
            else if (hr == 24) {
                sethr(0)
                setmin(0)
                setsec(0)
            }
        }
         if (reset == 1) {
            sethr(0)
            setmin(0)
            setsec(0)
        }

        if (hr == 12) {
            setam("pm")
        }
        else if (hr == 24) {
            setam("am")
        }
    }, [sec, active,reset])



    return (
        <div><h1 className='h1'>Stopwatch</h1>
            <div className='h11'>
                <h1>{hr}&nbsp;:&nbsp;{min}&nbsp;:&nbsp;{sec}&nbsp;{am}</h1>
            </div>
            <div className='btn'>
                <button onClick={() => { setactive(1) }}>Stop</button>
                <button className='btnbg' onClick={() => { setactive(0) }}>Start</button>
                <button onClick={() => { setreset(1) }}>Reset</button>
            </div>

        </div>



    )
}

export default Stopwatch