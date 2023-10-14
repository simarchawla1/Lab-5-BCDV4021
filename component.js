import React, { Component } from 'react';
import Receipt from './Receipt'; // Import the Receipt component

class Transfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showReceipt: false, // Initially, hide the Receipt component
    };
  }

  handleSubmit = () => {
    // Toggle the visibility of the Receipt component
    this.setState({ showReceipt: !this.state.showReceipt });
  }

  render() {
    return (
      <div>
        <h1>Transfer Funds</h1>
        <button onClick={this.handleSubmit}>Submit</button>

        {this.state.showReceipt && (
          <Receipt
            sourceAccount="123456"
            destinationAccount="789012"
            amount="100"
          />
        )}
      </div>
    );
  }
}

export default Transfer;