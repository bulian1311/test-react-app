import React, { Component } from 'react';
import Table from './Table';
import Pager from './Pager';
import Filter from './Filter';
import Select from './Select';
import getData from '../functions/getData';

class App extends Component {
  constructor() {
    super();
    this.state = {};

    this.pagerClick = this.pagerClick.bind(this);
    this.pagerDefault = this.pagerDefault.bind(this);
    this.filterClick = this.filterClick.bind(this);
    this.selectChange = this.selectChange.bind(this);
  }

  async componentWillMount() {
    const data = await getData();

    this.setState({ data });
  }

  pagerDefault(defaultData, dataSplit) {
    this.setState({ tableData: defaultData, dataSplit });
  }

  pagerClick(paginateData) {
    this.setState({ tableData: paginateData });
  }

  filterClick(filterData) {
    this.setState({ tableData: filterData });
  }

  async selectChange(value) {
    const data = await getData(value);
    this.setState({ data });
    this.state.dataSplit(data, 50);
  }

  renderTable() {
    if (!this.state.tableData) {
      return <b>Table Loading...</b>;
    }

    return <Table data={this.state.tableData} />;
  }

  renderPager() {
    if (!this.state.data) {
      return <b>Pager Loading...</b>;
    }
    return (
      <Pager
        data={this.state.data}
        count="50"
        pagerClick={this.pagerClick}
        pagerDefault={this.pagerDefault}
      />
    );
  }

  render() {
    return (
      <div className="App container">
        <Select selectChange={this.selectChange} />
        <Filter data={this.state.data} filterClick={this.filterClick} />
        {this.renderPager()}
        {this.renderTable()}
      </div>
    );
  }
}

export default App;
