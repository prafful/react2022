import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxiosGet from './customaxioshook';
import SingleFriend from './friend';


function AllFriends() {

    const [friends, setFriends] = useState([])
    const [counter, setCounter] = useState(1)

    // useEffect(()=>{
    //     axios.get("http://localhost:3000/allfriends")
    //             .then((res)=>{
    //                 console.log(res.data)
    //                 setCounter(ps=>ps+1)
    //                 console.log(counter)
    //                 setFriends(ps=>res.data)
    //             }, (err)=>{
    //                 console.log("Error")
    //                 console.log(err);
    //             })
    // }, [])

    const friends = useAxiosGet("http://localhost:3000/allfriends", null)
 

    function editWithId(id){
        console.log("Edit friend with id: " + id);
    }

    function printFriends(){
        return friends.map((f, i)=>{
            return (
               <SingleFriend key={i}
                       name={f.name} 
                       id = {i}
                       editId= {editWithId}
               ></SingleFriend>
            )
        })
    }

    return (  
        <div>
            <div>
                <br></br>
                Response loaded....{friends.length}
                <table border="1">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {printFriends()}
                </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default AllFriends;