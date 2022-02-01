import React, { useState } from 'react';

function FunctionalComponent(){

    let score = 10
    //const [new state variable name, functionname to change state value] = useState(intial value of state)

    let randomNumber = Math.floor(Math.random()*100)

    const [random, myRandom] = useState(randomNumber)

    const [user, changeUser] = useState("Obb")
    
    function changeRandom(){
        console.log("Calling change random")
        // myRandom(function(prevState){
        //     return updatedState
        // })
        // myRandom(function(prevState){
        //     return prevState+2
        // })
        //myRandom allows me to change the state value -> random
        myRandom(()=> Math.floor(Math.random()*100))

        // this.setSate({
        //     random: Math.floor(Math.random()*100)
        // })
    }

    function change(){
        //use change function to update user state
        changeUser(prevState=>prevState + "O")
    }

    //render function is not present
    //you return JSX directly
    return (
        <div>
            {/* // jsx will come */}
            <h1>Functional:</h1>
            <button onClick={changeRandom}>New Random</button>
            <br></br>
            Score: {score}
            <br></br>
            Random: {random}
            <br></br>
            User: {user} &nbsp; <button onClick={change}>Change user</button>
        </div>
    )
}

export default FunctionalComponent;