import React, { Component } from 'react';

class Pager extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.dataSplit = this.dataSplit.bind(this);
  }

  componentWillMount() {
    this.dataSplit(this.props.data, this.props.count);
  }

  dataSplit(data, count) {
    count = Number(count);

    const pagesCount = Math.ceil(data.length / count);
    let i = 0;
    let j = count;
    let paginateData = [];
    while (i < data.length) {
      paginateData.push(data.slice(i, j));

      i += count;
      j += count;
    }

    this.setState({ pagesCount, paginateData });

    this.props.pagerDefault(paginateData[0], this.dataSplit);
  }

  renderButtons(countBtn) {
    let result = [];
    for (let i = 0; i < countBtn; i++) {
      result.push(
        <a
          onClick={e => this.props.pagerClick(this.state.paginateData[i])}
          className="button"
          key={i}
        >
          {i + 1}
        </a>
      );
    }
    return result;
  }

  render() {
    return <b>Pager.. {this.renderButtons(this.state.pagesCount)}</b>;
  }
}

export default Pager;
