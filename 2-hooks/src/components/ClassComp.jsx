
import React, { Component } from 'react'; 

class ClassComp extends Component {

    state = {
        name: '',
    }

    hadleChange = (event) => {
        this.setState({name: event.target.value})

    }

    render() {
        const {name} = this.state;

        return (
            <div>
                <h1>Class</h1>
                <p>My Name is {name}</p>
                <input type="text" value={name} onChange={this.hadleChange} />
            </div>
        );
    }
}

export default ClassComp;