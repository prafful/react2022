import React from 'react';
import ClassComponent from './classcomponent';
import FunctionalComponent from './functionalcomponent';


class Container extends React.Component {
    //state = {  } 
    render() { 
        return (
            <div>
                {/* functional component */}
                <FunctionalComponent></FunctionalComponent>
                {/* class component */}
                <ClassComponent></ClassComponent>
            </div>
        );
    }
}
 
export default Container;