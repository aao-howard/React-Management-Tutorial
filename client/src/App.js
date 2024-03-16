import React, { Component } from 'react';
// import logo from './logo.svg';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CircularProgress from '@mui/material/CircularProgress';
import { withStyles } from '@mui/styles';

// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/Icon/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import { fade } from '@mui/styles/colorManipulator';
// import MenuIcon from '@mui/Icon/MenuIcon';
// import SearchIcon from '@mui/Icon/SearchIcon';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { filledInputClasses } from '@mui/material';

const styles = theme => ({
  root: {
    with: '100%',
    // marginTop: 3, //theme.spacing(3),
    // overflowX: "auto"
    minWidth: 1080
  },
  // table: {
  //   minWidth: 1080
  // },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    marginLeft: 18,
    marginRight: 18
  },
  progress: {
    margin: 2 //theme.spacing(2)
  },

  tableHead: {
    fontSize: '1.0rem'
  },

  // grow: {
  //   flexGrow: 1,
  // },
  // menuButton: {
  //   marginLeft: -12,
  //   marginRight: 20,
  // },
  // title: {
  //   display: 'none',
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'block',
  //   },
  // },
  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: Fade(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: Fade(theme.palette.common.white, 0.25),
  //   },
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing.unit,
  //     width: 'auto',
  //   },
  // },
  // SearchIcon: {
  //   width: theme.spacing.unit * 9,
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // inputRoot: {
  //   color: 'inherit',
  //   width: '100%',
  // },
  // inputInput: {
  //   paddingTop: theme.spacing.unit,
  //   paddingRight: theme.spacing.unit,
  //   paddingBottom: theme.spacing.unit,
  //   paddingLeft: theme.spacing.unit * 10,
  //   transition: theme.transition.create('width'),
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     width: 120,
  //     '&:focus': {
  //       width: 200,
  //     },
  //   },
  // }
})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

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

  // state = {
  //   customers: "",
  //   completed: 0
  // }

  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0,
      searchKeyword: ''
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0,
      searchKeyword: ''
    });
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
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

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    
    const filteredComponents = (data) => {
      data = data.filter((c) => {
        return c.name.indexOf(this.state.searchKeyword) > -1;
      });
      return data.map((c) => {
        return <Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} createdate={c.createdate} />;
      })
    }

    const { classes } = this.props;
    const cellList = ["No", "Photo", "Name", "Birthday", "Gender", "Job", "DEL"];

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

      // <div>
      // <Paper className={classes.root}>

      <div className={classes.root}>
        
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Customer Management System
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              name="searchKeyword"
              value={this.state.searchKeyword}
              onChange={this.handleValueChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
      
      <div className={classes.menu}>
        <CustomerAdd stateRefresh={this.stateRefresh}/>
      </div>

      <Paper className={classes.paper}>

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
              {/* <TableCell>No</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
              <TableCell>DEL</TableCell> */}
              { cellList.map(c => {
                  return <TableCell className={classes.tableHead}><b>{c}</b></TableCell>
                }) 
              }
            </TableRow>
          </TableHead>
          <TableBody>
            { 
              this.state.customers ? 
                // // this.state.customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} createdate={c.createdate} /> ); }) 
                // this.state.customers.map(c => { return ( <Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} createdate={c.createdate} /> ); }) 
                filteredComponents(this.state.customers)
              : 
                <TableRow>
                  <TableCell colSpan="7" align="center">
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
      </div>

    );
  }
}

// export default App;
export default withStyles(styles)(App);
