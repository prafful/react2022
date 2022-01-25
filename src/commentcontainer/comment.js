import React from 'react';
import Action from './commentaction';
import Description from './commentdescription';
import Title from './commentitle';


class Comment extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>{this.props.test} </h1>
                <Title  style={{border:"1px solid blue"}} title={this.props.mytitle}></Title>
                <Description desc={this.props.description}></Description>
                <Action like={this.props.like}></Action>
            </div>
        );
    }
}
 
export default Comment;