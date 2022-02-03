import React, { useEffect, useState } from 'react';




function Countdown() {

    const [counter, setCounter] = useState(1)
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

    //with no second argument (dependency), useEffect will execute infinitely
    //with empty array [] as dependency, useEffect will execute only once on first render
    //with [somestatevalue, somepropvalue] as dependency, useEffect will execute on first render and 
    //only when respective dependency mentioned in an array is updated.
    useEffect(()=>{
        //let mytitle = document.title
        let ref = setTimeout(()=>{
            setCounter(counter => counter + 3)
        }, 1000)
        if (counter > 10) {
            console.log("clear useEffect")
            clearTimeout(ref)
            //examine as to why clearTimeout(ref) in not clearing the reference (below). above is working fine.
            // return ()=>{
            //     console.log("I am used to dispose the sideeffects when not needed.")
            //     clearTimeout(ref)
            // }
        }
        document.title = counter
        
    
    }, [latitude])

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