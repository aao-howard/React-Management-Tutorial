import React, { Component } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

//class Customer extends React.Component {
class Customer extends Component {
    render() {
    return (

      //<div>

        //<h2>홍길동</h2>
        //<p>961222</p>
        //<p>남자</p>
        //<p>대학생</p>

        //<h2>{this.props.name}({this.props.id})</h2>
        //<p>{this.props.birthday}</p>
        //<p>{this.props.gender}</p>
        //<p>{this.props.job}</p>

        //<CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
        //<CustomerInfo name={this.props.name} birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />

        <TableRow>
          <TableCell>{this.props.id}</TableCell>
          <TableCell><img src={this.props.image} alt="profile"/></TableCell>
          <TableCell>{this.props.name}</TableCell>
          <TableCell>{this.props.birthday}</TableCell>
          <TableCell>{this.props.gender}</TableCell>
          <TableCell>{this.props.job} [{this.props.createdate}]</TableCell>
        </TableRow>

      //</div> div-tag 를 사용하니 에러가 발생했다.

    );
  }
}

// class CustomerProfile extends React.Component {
//   render() {
//     return (
//       <div>
//         <img src={this.props.image} alt="profile"/>
//         <h2>{this.props.name}({this.props.id})</h2>
//       </div>
//     );
//   }
// }

// class CustomerInfo extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.birthday}</p>
//         <p>{this.props.gender}</p>
//         <p>{this.props.job}</p>
//       </div>
//     )
//   }
// }

export default Customer;