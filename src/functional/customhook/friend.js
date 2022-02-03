import React from 'react';
import { useNavigate } from 'react-router-dom';


function SingleFriend(props) {


    let navigate = useNavigate()


    function navigateWithId(){
        // console.log(props.id);
        // props.editId(props.id)
        navigate(
            "/displayfriend", 
            {
                state: {id:props.id}
            }
        )
    }

    return ( 

        <tr>
            <th>{props.id}</th>
            <th>{props.name}</th>
           <th><button onClick={navigateWithId}>Navigate</button></th>
            
        </tr>
     );
}

export default SingleFriend;