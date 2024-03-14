import React, { Component } from 'react';
// import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CircularProgress from '@mui/material/CircularProgress';
import { withStyles } from '@mui/styles';

const styles = theme => ({
  root: {
    with: '100%',
    marginTop: 3, //theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: 2 //theme.spacing(2)
  }
})

// const customer = {
//   id: 1,
//   image: 'https://placeimg.com/64/64/1',
//   name: '홍길동',
//   birthday: '961222',
//   gender: '남자',
//   job: '대학생1'
// }

// const customers = [
//   {
//     id: 1,
//     image: 'https://picsum.photos/id/1/64/48',
//     name: 'Howard Yun',
//     birthday: '961222',
//     gender: 'Male',
//     job: 'Student'
//   },
//   {
//     id: 2,
//     image: 'https://picsum.photos/id/2/64/48',
//     name: 'HC Yun',
//     birthday: '961223',
//     gender: 'Male',
//     job: 'Programmer'
//   },
//   {
//     id: 3,
//     image: 'https://picsum.photos/id/3/64/48',
//     name: 'Webirang',
//     birthday: '961224',
//     gender: 'Female',
//     job: 'Scientist'
//   }
// ]

/*
1) constructor()
2) componentWillMount()
3) render()
4) componentDidMount()

props or state 가 변경된 경우에는 shouldComponentUpdate()

*/

// function App() {
// class App extends React.Component {
class App extends Component {

  state = {
    customers: "",
    completed: 0
  }

  componentDidMount() {
    // this.timer = setInterval(this.progress, 20);   // 나중에 써먹자
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  // progress = () => {
  //   const { completed } = this.state;
  //   this.setState({ completed: completed >= 100 ? 0 : completed + 1});  // 나중에 써먹자
  // }

  render() {
    
    const { classes } = this.props;

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

      //<div>
      <Paper className={classes.root}>

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
        
        {/* { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); }) } */}

        {/* <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); }) }            
          </TableBody>
        </Table> */}

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { 
              this.state.customers ? 
                this.state.customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); }) 
                : 
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    {/* <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} /> */}
                    {/* <CircularProgress className={classes.progress} value={this.state.completed} /> */}
                    <CircularProgress className={classes.progress} />
                    {/* {this.state.completed} */}
                  </TableCell>
                </TableRow> 
            }
          </TableBody>
        </Table>

      </Paper> 
      //</div>

    );
  }
}

// export default App;
export default withStyles(styles)(App);
