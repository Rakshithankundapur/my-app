import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './Components/App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {Login} from "./Components/Login";
import {User} from  './Components/User';

class AppRouting extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Router path={"/"} component = {App}>
                    <IndexRoute path={"login"}  component = {Login}/>
                    <Route path = {"user"} component = {User} />
                </Router>
            </Router>
        );
    }
}

ReactDOM.render(<AppRouting />, window.document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
