import React from "react"

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 100
        }
    }

    increment() {
        this.setState({
            value: this.state.value + 1
        });
    }

    decrement() {
        let currCount = this.state.value;
        this.setState({
            value: currCount - 1
        });
    }

    render(){
        return (
            <div className="container">
                <h1>YACA - Yet Another Counter App</h1>
                <div className="actions">
                    <button className="decrement" onClick={() => this.decrement()}>-</button>
                    <p className="value">{this.state.value}</p>
                    <button className="increment" onClick={() => this.increment()}>+</button>
                </div>
                {/* Implement this functionality */}
                <button style={{marginTop: '32px'}}>Generate Random</button>
            </div>
        )
    }
}