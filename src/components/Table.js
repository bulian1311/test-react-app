import React, { Component } from 'react';
import UserInfo from './UserInfo';
import sortDataUp from '../functions/sortDataUp';
import sortDataDown from '../functions/sortDataDown';

import ArrowUp from './icons/ArrowUp';
import ArrowDown from './icons/ArrowDown';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: '',
      users: this.props.data
    };
    this.rowClick = this.rowClick.bind(this);
    this.headClick = this.headClick.bind(this);
  }

  rowClick(user) {
    this.setState({ currentUser: user });
  }

  headClick(event) {
    const users = this.props.data;
    const sort = event.target.dataset.sort;
    if (!sort) {
      return;
    }

    if (sort === this.state.sort) {
      this.setState({ sort: '', users: sortDataDown(users, sort) });
    } else {
      this.setState({ sort, users: sortDataUp(users, sort) });
    }
  }

  renderTbody() {
    if (!this.state.users) {
      return (
        <tr>
          <td>loading...</td>
        </tr>
      );
    }

    return this.props.data.map(user => {
      let n = Math.floor(Math.random() * 10000);
      return (
        <tr onClick={event => this.rowClick(user)} key={user.id + '-' + n}>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table className="u-full-width">
          <thead>
            <tr onClick={this.headClick}>
              <th data-sort="id">
                id
                {this.state.sort === 'id' ? <ArrowDown /> : <ArrowUp />}
              </th>
              <th data-sort="firstName">
                firstname
                {this.state.sort === 'firstName' ? <ArrowDown /> : <ArrowUp />}
              </th>
              <th data-sort="lastName">
                lastname
                {this.state.sort === 'lastName' ? <ArrowDown /> : <ArrowUp />}
              </th>
              <th data-sort="email">
                email
                {this.state.sort === 'email' ? <ArrowDown /> : <ArrowUp />}
              </th>
              <th data-sort="phone">
                phone
                {this.state.sort === 'phone' ? <ArrowDown /> : <ArrowUp />}
              </th>
            </tr>
          </thead>
          <tbody>{this.renderTbody()}</tbody>
        </table>
        {this.state.currentUser ? (
          <UserInfo user={this.state.currentUser} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Table;
