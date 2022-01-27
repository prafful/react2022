import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import FirstComponent from './rootcomponent/root';


var location = document.getElementById("firstcomponent")
var second = document.getElementById("second")

ReactDOM.render(
    <HashRouter>
        <div>
            <FirstComponent></FirstComponent>

        </div>
    </HashRouter>, location)

//ReactDOM.render(<FirstComponent></FirstComponent>, second)