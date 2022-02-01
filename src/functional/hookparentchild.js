import React from 'react';
import ChildComponent from './childcomponent';

function ParentFunction(){
    return(
        <div>
            <ChildComponent alphabet="A" color="red"></ChildComponent>
            {/* <ChildComponent alphabet="B" color="green"></ChildComponent>
            <ChildComponent alphabet="C" color="pink"></ChildComponent>
            <ChildComponent alphabet="D" color="purple"></ChildComponent> */}
        </div>
    )
}

export default ParentFunction