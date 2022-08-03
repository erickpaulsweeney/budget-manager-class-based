import React from "react"
import AddNewEntry from "./AddNewEntry";
import Incomes from "./Incomes";
import Expenses from "./Expenses";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 0,
            text: '',
            amount: 0,
            type: 'income',
            income: [],
            expense: []
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }   

    handleSubmit = () => {
        console.log(this.state.text, this.state.amount)
        if (this.state.text.length === 0 || this.state.amount <= 0) return;
        const currState = this.state;
        currState.balance = this.state.type === 'income' ? Number(currState.balance) + Number(currState.amount) : Number(currState.balance) - Number(currState.amount);
        currState[this.state.type].push({ remark: this.state.text, amount: this.state.amount });
        this.setState(currState)
    }

    render() {
        return (
            <div className="container-main">
                <h1 className="header">Balance: ${this.state.balance}</h1>
                <AddNewEntry handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <div className="container-entries">
                    <Incomes entries={this.state.income} />
                    <Expenses entries={this.state.expense} />
                </div>
            </div>
        )
    }
}