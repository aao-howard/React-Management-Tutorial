import React, { Component } from 'react';

//class Customer extends React.Component {
class Customer extends Component {
    render() {
    return (
      <div>

        {/* <h2>홍길동</h2>
        <p>961222</p>
        <p>남자</p>
        <p>대학생</p> */}

        <h2>{this.props.name}</h2>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>

      </div>
    );
  }
}

export default Customer;