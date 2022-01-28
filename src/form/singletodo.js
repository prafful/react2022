import React from 'react';

class SingleTodo extends React.Component {

    removeFriend =()=>{
        console.log("delete:" + this.props.friend)
        this.props.deleteId(this.props.currentIndex)
        
    }

    componentWillUnmount(){
        console.log("Unmounted SingleTodo with id:" + this.props.currentIndex);
    }

    render() { 
        return (
            <li>
               {this.props.currentIndex}, {this.props.friend}
               &nbsp;
               <button onClick={this.removeFriend}>Delete</button>
            </li>
        );
    }
}
 
export default SingleTodo;