import React, { Component } from 'react';
// import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customer = {
  name: '홍길동',
  birthday: '961222',
  gender: '남자',
  job: '대학생1'
}

// function App() {
// class App extends React.Component {
class App extends Component {
  render() {
    return (
      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //   </header>
      // </div>

      //<Customer/>
      
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />

    );
  }
}

export default App;
