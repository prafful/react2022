import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxiosGet from './customaxioshook';
import SingleFriend from './friend';


function AllFriends() {

    //const [friends, setFriends] = useState([])
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

    //const data = useAxiosGet("http://4bdb-2405-201-e02f-f818-a1af-4fb7-8c8e-2ca1.ngrok.io/allfriends", null, "GET")
    const data = useAxiosGet("http://localhost:3000/allfriends", null, "GET")
    console.log(data)

    function editWithId(id) {
        console.log("Edit friend with id: " + id);
    }

    function printFriends() {
        if (data === null) {
            return (
                <tr>
                    <td>Loading the data from custom hook....</td>
                    
                </tr>
            )
        } else {
            return data.map((f, i) => {
                return (
                    <SingleFriend key={i}
                        name={f.name}
                        id={f.id}
                        editId={editWithId}
                    ></SingleFriend>
                )
            })
        }



    }

    return (
        <div>
            <div>
                <br></br>
                {/* Response loaded....{data.length} */}
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