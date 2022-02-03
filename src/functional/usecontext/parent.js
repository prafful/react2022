import React from 'react';
import Child from './child';

function Parent(props) {
    return ( 
        <div>
            <div style={{border: "4px solid blue", textAlign:"center", padding: "10px"}}>
                Parent: 
                <Child native={props.nativeLocation}></Child>
                </div>
        </div>
     );
}

export default Parent;