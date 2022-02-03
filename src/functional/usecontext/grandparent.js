import React, { createContext, useState } from 'react';
import Parent from './parent';

const globalProp = React.createContext()

function GrandParent() {

    const [age, setAge] = useState(101)

    function updateAge(){
        setAge(age=>age+1)
    }

    return ( 
        <globalProp.Provider value={age}>
        <div>
            <br></br>
            <div style={{border: "4px solid green", textAlign:"center", padding: "10px"}}>
                GrandParent: 
                <input type="number" 
                        value={age} 
                        min={80} 
                        max={150} 
                        // onChange={e=>{setAge(age+1)}}
                        // step={5}
                        onChange={updateAge}
                        >

                </input>
                 <Parent nativeLocation="Chennai"></Parent>
            </div>
           
        </div>
        </globalProp.Provider>
     );
}

export default GrandParent;
export {globalProp};
