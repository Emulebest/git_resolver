import React, {Component} from 'react';
import './sass/App.scss';
import {Login} from "./containers/Login";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Login/>
            </div>
        );
    }
}

export default App;
