import React from 'react';
import '../App.css';

export class App extends React.Component {
    render(){
        return(
            <div>
            <div>
                {this.props.children}
            </div>
            </div>
        )
    }
}

