import React, { Component } from 'react';
// import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

// const customer = {
//   id: 1,
//   image: 'https://placeimg.com/64/64/1',
//   name: '홍길동',
//   birthday: '961222',
//   gender: '남자',
//   job: '대학생1'
// }

const customers = [
  {
    id: 1,
    image: 'https://picsum.photos/id/1/64/48',
    name: 'Howard Yun',
    birthday: '961222',
    gender: 'Male',
    job: 'Student'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/2/64/48',
    name: 'HC Yun',
    birthday: '961223',
    gender: 'Male',
    job: 'Programmer'
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/3/64/48',
    name: 'Webirang',
    birthday: '961224',
    gender: 'Female',
    job: 'Scientist'
  }
]

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
      
      // <Customer
      //   id={customer.id}
      //   image={customer.image}
      //   name={customer.name}
      //   birthday={customer.birthday}
      //   gender={customer.gender}
      //   job={customer.job}
      // />

      <div>

        {/* <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />
        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />
        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        /> */}

        {/* {
          customers.map(c => {
            return(
              <Customer 
                key={c.id}
                id={c.id} 
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        } */}
        
        { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); }) }

      </div>

    );
  }
}

export default App;
