import React from 'react';


class ClassComponent extends React.Component {
    //state = {  } 

    constructor(props) {
        super(props)
        this.state = {
            random: Math.floor(Math.random() * 100)
        }
    }

    score = 10

    changeRandom=()=>{
        let newRandom = Math.floor(Math.random()*100)
        this.setState({
            random: newRandom
        })
    }

    render() {
        return (
            <div>
                <h1>Class:</h1>
                <button onClick={this.changeRandom}>New Random</button>
                <br></br>
                Score: {this.score}
                <br></br>
                Random: {this.state.random}
            </div>
        );
    }
}

export default ClassComponent;