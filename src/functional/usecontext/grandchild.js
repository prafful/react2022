import React, { useContext } from 'react';
import { globalProp } from '../usecontext/grandparent';

function Grandchild(props) {

    const ageReceived = useContext(globalProp)

    return ( 
      
        <div>
            <div style={{border: "4px solid pink", textAlign:"center", padding: "10px"}}> 
            Grandchild from {props.native}
            <br></br>
            Age: {ageReceived}
            </div>
           
        </div>
       
     );
}

export default Grandchild;