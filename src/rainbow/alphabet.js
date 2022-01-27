import React from 'react';


class Alphabet extends React.Component {
    //state = {  } 
    alphabetStyle = {
        color: this.props.col,
        backgroundColor: "yellow",
        fontSize: this.props.size + "px"
    }
    render() {
        return (
            <span style={this.alphabetStyle}> {this.props.children}</span>
        );
    }
}

export default Alphabet;