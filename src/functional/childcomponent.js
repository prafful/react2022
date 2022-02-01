import React from 'react';


function ChildComponent(props) {
    return (  
        <span style={{color: props.color}}>
            {props.alphabet},
            {props.color}
        </span>
    );
}

export default ChildComponent;