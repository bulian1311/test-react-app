import React, { Component } from 'react';

class Filter extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const filterData = this.filterData(this.props.data, this.state.value);

    this.props.filterClick(filterData);
  }

  filterData(data, value) {
    if (!value) {
      return [];
    }
    const result = [];
    data.forEach(item => {
      for (let key in item) {
        if (typeof item[key] === 'string' && item[key].includes(value)) {
          result.push(item);
        }
      }
    });
    return result;
  }

  render() {
    return (
      <div className="row">
        <div className="ten columns">
          <input
            onChange={this.handleChange}
            className="u-full-width"
            type="text"
            id="filter"
          />
        </div>
        <div className="two columns">
          <button onClick={this.handleSubmit} className="button">
            Filter
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;
