import React, { useEffect, useState } from 'react';




function Countdown() {

    const [counter, setCounter] = useState(10)
    const [tracker, setTracker] = useState(2)
    const [latitude, setLatitude] = useState(88.88)

    //runs on evey render, including internal renders
    // useEffect(()=>{
    //     //use setInterval to eexecute callback function every 1 s
    //     //update counter state to new value in call back function
    //     setInterval(()=>{
    //         setCounter(prevCounter => prevCounter - 1)
    //     }, 1000)
    // })

    //use setInterval to create countdown
    //useEffect(callback function, [dependency])
    //option 1-> do not use dependency as second parameter is optional
    // useEffect(()=>{
    //     //use setInterval to execute callback function every 1 s
    //     //update counter state to new value in call back function
    //     setInterval(()=>{
    //         setCounter(prevCounter => prevCounter - 1)
    //     }, 1000)
    // } ,[])

    //without dependency, useEffect will execute infinitely
    //with [] as dependeny, useEffect will execute only once on first render
    useEffect(()=>{
        setTimeout(()=>{
            setCounter(counter => counter + 3)
        }, 1000)
    }, [latitude, tracker])

    function changeTracker(){
        setTracker(t=>t*2)
    }

    function changeLatitude(){
        setLatitude(t=>t+1)
    }

    return ( 
        <div>
            Countdown: {counter}
            <div>
                <button onClick={changeTracker}> Change {tracker}</button>
                &nbsp;
                <button onClick={changeLatitude}> Change {latitude}</button>
            </div>
        </div>
     );
}

export default Countdown;