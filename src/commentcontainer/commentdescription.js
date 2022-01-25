import React from 'react';


class Description extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
              {this.props.desc}
            </div>
        );
    }
}
 
export default Description;