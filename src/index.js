import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './rootcomponent/root';


var location = document.getElementById("firstcomponent")
var second = document.getElementById("second")

ReactDOM.render(
    <div>
        <FirstComponent></FirstComponent>
      
    </div>, location)

//ReactDOM.render(<FirstComponent></FirstComponent>, second)