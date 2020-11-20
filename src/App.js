// create your App component here
import React from 'react';

export default class App extends React.Component{
    state = {
        dudes: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => 
            this.setState({
                dudes: data.people
            })
        )
    }


    render(){
        return(
            <div>
                {this.state.dudes.map(person => person.name).join('---')}
            </div>
        )
    }
}