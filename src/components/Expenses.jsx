import React from 'react'

export default class Expenses extends React.Component {
    render() {
        return (
            <div className='container-expenses'>
                <h2 className='entry-header'>Expenses</h2>
                <div className="container-cards">
                    {this.props.entries.length === 0 && <h3>No expenses yet</h3>}
                    {this.props.entries.length > 0 && this.props.entries.map(el => <div key={el.remark + el.amount} className="expense-entry">
                        <div className="remark-div">{el.remark}</div>
                        <div className="amount-div">${el.amount}</div>
                    </div>)}
                </div>
            </div>
        )
    }
}