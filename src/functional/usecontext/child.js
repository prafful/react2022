import React, { useContext } from 'react';
import Grandchild from './grandchild';

import { globalProp } from '../usecontext/grandparent';

function Child(props) {

    const age = useContext(globalProp)

    return ( 
        <div>
            <div style={{border: "4px solid yellow", textAlign:"center", padding: "10px"}}> 
                Child: (since {age}) 
           <Grandchild native={props.native} ></Grandchild></div>
           
        </div>
     );
}

export default Child;