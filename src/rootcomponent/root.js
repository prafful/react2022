import React from 'react';
import CommentList from '../commentcontainer/commentlist';



class FirstComponent extends React.Component {
    //state = {  } 

    mystyle = {
        color: "orange",
        backgroundColor: "black",
        borderBottom: "4px solid orange"
    }


    score = 80

    message = "I am from moon of Mars!!!!"

    displayMessage() {
        return this.message
    }

    render() {
        return (
            <span>
               
                <div>
                    <span>
                        <h1 style={this.mystyle}>Root Component</h1>
                        <p style={{ color: "red" }}>
                            Score: {this.score}
                        </p>
                        <p style={{ backgroundColor: "pink" }}>
                            Function call: {this.displayMessage()}
                        </p>
                        <hr></hr>
                    </span>
                    <span></span>
                </div> 
                <div>
                    I will contain all child components going forward.
                    <CommentList>Technology Comments</CommentList>
                    
                </div>
            </span>
        );
    }
}

export default FirstComponent;