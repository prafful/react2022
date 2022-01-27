import React from 'react';
import Alphabet from './alphabet';


class Rainbow extends React.Component {
  
    render() { 
        return (
            <div>
                <Alphabet col="violet" size="20">R</Alphabet>
                <Alphabet col="indigo" size="25">A</Alphabet>
                <Alphabet col="blue" size="40">I</Alphabet>
                <Alphabet col="green" size="30">N</Alphabet>
                <Alphabet col="yellow"size="20" >B</Alphabet>
                <Alphabet col="orange" size="50">O</Alphabet>
                <Alphabet col="red" size="55">W</Alphabet>
            </div>
        );
    }
}
 
export default Rainbow;