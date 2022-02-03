import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Friend from './friend';

function ConsumeAPI() {

    const [friends, setFriends] = useState([])
    const [counter, setCounter] = useState(1)

    useEffect(()=>{
        axios.get("http://localhost:3000/allfriends")
                .then((res)=>{
                    console.log(res.data)
                    setCounter(ps=>ps+1)
                    console.log(counter)
                    setFriends(ps=>res.data)
                }, (err)=>{
                    console.log("Error")
                    console.log(err);
                })
    }, [])

    function editWithId(id){
        console.log("Edit friend with id: " + id);
    }

    function printFriends(){
        return friends.map((f, i)=>{
            return (
               <Friend key={i}
                       name={f.name} 
                       id = {i}
                       editId= {editWithId}
               ></Friend>
            )
        })
    }

    return (  
        <div>
            <div>
                <br></br>
                Response loaded....{friends.length}
                <ul>
                   {printFriends()}
                </ul>
            </div>
            
        </div>
    );
}

export default ConsumeAPI;