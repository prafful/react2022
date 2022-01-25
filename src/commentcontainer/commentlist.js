import React from 'react';
import Comment from './comment';


class CommentList extends React.Component {
    //state = {  } 
    render() {
        return (
            <div>
                <h3>{this.props.children}</h3>
                <ol>
                    <li>
                        <Comment
                            mytitle="NFTs are cool!"
                            like="8"
                            description="NFTs are cool! They will create new revenue streams for artists and content creators."
                            test={this.props.children}>
                        </Comment>
                    </li>
                    <li>
                        <Comment
                            mytitle="Blockchain is the future!"
                            like="18"
                            description="Cryptocurrency and NFTs are applicatio of Block chain.">
                        </Comment></li>
                    <li>
                        <Comment
                            mytitle="Learn to unwork!"
                            like="80"
                            description="What a pleasure it would be?">
                        </Comment></li>
                    <li>
                        <Comment
                            mytitle="Any day is holiday!"
                            like="800"
                            description="In my dreams!"></Comment></li>

                </ol>

            </div>
        );
    }
}

export default CommentList;