import React, { Component } from 'react';

class ButtonWithClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key1: "This is the default state of a Class component.",
            key2: 0
        }
    }
    render() {
        return (
            <>
                <div>{this.state.key1}</div>
                <div>{this.state.key2}</div>
                <button onClick={() => this.setState({key1: "Class Button Clicked"})}>Class Button</button>
                <button onClick={() => this.setState({key2: 1})}>Change the number</button>
            </>
        )
    }
};

export default ButtonWithClass;