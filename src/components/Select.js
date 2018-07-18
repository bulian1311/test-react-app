import React, { Component } from 'react';

class Select extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.selectChange(e.target.value);
  }

  render() {
    return (
      <div className="row">
        <div className="four columns">
          <label htmlFor="select">Select Data:</label>
          <select
            onChange={this.handleChange}
            className="u-full-width"
            id="select"
          >
            <option value="local">Local data</option>
            <option value="litleData">Litle data</option>
            <option value="bigData">Big data</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Select;
