import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


function DisplayFriend(props) {

    let location = useLocation()
    console.log(props)
    console.log(location)
    console.log(location.state.id)

    const [friend, setFriend] = useState({})
    
    useEffect(()=>{
        axios.get("http://localhost:3000/allfriends" + "/" + location.state.id)
            .then(res=>{
                console.log(res.data)
                setFriend(f=>res.data)
                console.log(friend)
            })
    }, [])

    return ( 
        <div>
        <h1>Display friend: {location.state.id}</h1>
        Name: {friend.name}
        <br></br>
        Location: {friend.location}
        <br></br>
        Since: {friend.since}
        <br></br>
        Active: {friend.active? "Yes":"No"}
        </div>
     );
}

export default DisplayFriend
