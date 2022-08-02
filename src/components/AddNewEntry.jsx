import React from 'react'

export default class AddNewEntry extends React.Component {
    render() {
        return (
            <div className='container-new-entry'>
                <div className="remark-row">
                    <label htmlFor="text">Remark</label>
                    <input type="text" className='remark-bar' id='remark' name='text' onChange={this.props.handleChange} />
                </div>
                <div className="amount-row">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" className='amount-bar' id='amount' name='amount' onChange={this.props.handleChange} />
                </div>
                <div className="type-row">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" className='type-bar' onChange={this.props.handleChange}>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>

                <button type='submit' onClick={this.props.handleSubmit}>Submit</button>
            </div>
        )
    }
}