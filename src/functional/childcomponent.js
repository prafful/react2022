import React, { useState } from 'react';


function ChildComponent(props) {

    const [friend, setFriend] = useState({
        name: "OMG",
        location: "Kashmir"
    })

    const [scores, setScores] = useState([10, 20, 30, 40])
    const [score, setScore] = useState(0)

    function updateFriend() {
        setFriend(previousState => {
            console.log(previousState)
            console.log(friend);
            //update name in friend object
            return { ...previousState, name: "OMGO", location: "Bhutan" }
            //return friend
        })
    }

    function displayScores(){
        return scores.map(s=>{
            return (
                <li>{s}</li>)
        })
    }

    //capture value from input field
    function captureScore(event){
        console.log(event.target.value)
        //update score state with value captured from input field
        setScore(ps=>{
            return event.target.value
        })
     

    }

    //add score state to scores array state
    function addToScore(){
        setScores(previousState=>{
          return  [...previousState, score]
        })
    }

    return (
        <div>
            <span style={{ color: props.color }}>
                {props.alphabet},
                {props.color}
            </span>
            <div> </div>
            {/* {friend} */}
            Name: {friend.name}
            <br></br>
            Location: {friend.location}
            <br></br>
            <button onClick={updateFriend}>Change Friend</button>
            <br></br>
            <ul>
                {scores.map(s=>(<li>{s}</li>))}
                {/* {displayScores()} */}
            </ul>
            <input type="number" onChange={captureScore} ></input>
            <button onClick={addToScore}>Add to scores</button>
        </div>
    );
}

export default ChildComponent;