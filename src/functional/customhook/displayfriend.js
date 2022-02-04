import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAxiosGet from './customaxioshook';


function DisplayFriend(props) {

    let location = useLocation()
    console.log(props)
    console.log(location)
    console.log(location.state.id)

    //const [friend, setFriend] = useState({})

    // useEffect(()=>{
    //     axios.get("http://localhost:3000/allfriends" + "/" + location.state.id)
    //         .then(res=>{
    //             console.log(res.data)
    //             setFriend(f=>res.data)
    //             console.log(friend)
    //         })
    // }, [])

    //const data = useAxiosGet("http://4bdb-2405-201-e02f-f818-a1af-4fb7-8c8e-2ca1.ngrok.io/allfriends", location.state.id, "GET")
    const data = useAxiosGet("http://localhost:3000/allfriends", location.state.id, "GET")
    if (data === null) {
        return (
            <div>
                <h3>Loading data with id.... {location.state.id}</h3>
            </div>
        )
    }
    else {

        return (
            <div>
                <h1>Display friend: {location.state.id}</h1>
                Name: {data.name}
                <br></br>
                Location: {data.location}
                <br></br>
                Since: {data.since}
                <br></br>
                Active: {data.active ? "Yes" : "No"}
            </div>
        )
    }


}

export default DisplayFriend
