import React, { Component, useState } from 'react';

class AmountInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0
    };
  }

  handleAmountChange = (e) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      this.setState({ amount: newValue });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Amount submitted:", this.state.amount);
    
  }

  render() {
    const sourceAccount = "123456";
    const destinationAccount = "789012";

    return (
      <div>
        <h2>Amount Input</h2>
        <input
          type="number"
          value={this.state.amount}
          onChange={this.handleAmountChange}
        />
        <p>Amount: {this.state.amount}</p>
        
        <p>Source Account: {sourceAccount}</p>
        <p>Destination Account: {destinationAccount}</p>

        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AmountInput;
