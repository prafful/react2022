import React from 'react';


function Friend(props) {

    function editFriendWithId(){
        console.log(props.id);
        props.editId(props.id)
    }

    return ( 

        <li>
            {props.name}
            &nbsp;
            <button onClick={editFriendWithId}>Click</button>
        </li>
     );
}

export default Friend;