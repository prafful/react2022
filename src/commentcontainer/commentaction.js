import React from 'react';


class Action extends React.Component {
    //state = {  } 
    //this.props.like = 10
    locallike = this.props.like

    displayLike = function(){
        return this.locallike
    }

    render() { 
        return (
            <div>
                <button>+</button>
                    {this.displayLike()}
                <button>-</button>
            </div>
        );
    }
}
 
export default Action;