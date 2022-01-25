import React from 'react';


class Action extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            score: 8888,
            name: "OMG",
            likevalue: parseInt(this.props.like)
        }

        this.minusLike = this.minusLike.bind(this)
    }

    //state = {  } 
    //this.props.like = 10
    //locallike = this.state.likevalue
    //this.addLike = this.addLike.bind(this)

    // displayLike =()=>{
    //     return this.locallike
    // }

    addLike=()=>{
        console.log(this.state.score);
        //this.state.score = 9999
        this.setState({ 
            score: 9999,
            name:"OBB",
            likevalue: this.state.likevalue + 1
        })
        console.log(this.state.score);
       // console.log(this.props.like);
       // console.log("add like....");
    }

    minusLike=function(){
        //console.log(this.props.like);
        //console.log("add like....");
        this.setState({
            likevalue: this.state.likevalue - 1
        })
    }

    render() { 
        return (
            <div>
                Score: {this.state.score}
                <br></br>
                Name: {this.state.name}
                <br></br>
                <button onClick={this.addLike}>+</button>
                    {this.state.likevalue}
                <button onClick={this.minusLike}>-</button>
            </div>
        );
    }
}
 
export default Action;