import React from 'react';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextFileld from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';

const styles = theme => ({
  hidden: {
    display: 'none'
  }
})

class CustomerAdd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      userName: '',
      birthday: '',
      gender: '',
      job: '',
      fileName: '',
      open: false
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.addCustomer()
      .then((response) => {
        //window.alert(response.data);
        console.log(response.data);
        this.props.stateRefresh();
      })
    this.setState({
      file: null,
      userName: '',
      birthday: '',
      gender: '',
      job: '',
      fileName: '',
      open: false
    })
    // window.location.reload();
    // this.props.stateRefresh();
  }

  handleFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value
    })
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      file: null,
      userName: '',
      birthday: '',
      gender: '',
      job: '',
      fileName: '',
      open: false
    })
  }

  addCustomer = () => {
    const url = '/api/customers';
    const formData = new FormData();
    formData.append('image', this.state.file);
    formData.append('name', this.state.userName);
    formData.append('birthday', this.state.birthday);
    formData.append('gender', this.state.gender);
    formData.append('job', this.state.job);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    // window.alert(url + '--' + formData + '--' + config);
    // window.alert(post(url, formData, config));
    return axios.post(url, formData, config);
  }

  render() {
    const { classes } = this.props;
    return (
      // <form onSubmit={this.handleFormSubmit}>
      //   <h1>Customer Add</h1>
      //   Photo: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>
      //   Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
      //   Birthday: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
      //   Gender: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/>
      //   Job: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>
      //   <button type="Submit">Add</button>
      // </form>
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          Add Customer
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Add Customer</DialogTitle>
          <DialogContent>
            <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>
            <label htmlFor="raised-button-file">
              <Button variant="contained" color="primary" component="span" name="file">
                {this.state.fileName === "" ? "Choose Photo!" : this.state.fileName}
              </Button>
            </label>
            <br/><br/>
            <TextFileld label="Name" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/><br/>
            <TextFileld label="Birthday" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/><br/>
            <TextFileld label="Gender" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/><br/>
            <TextFileld label="Job" type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/><br/>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>Add</Button>
            <Button variant="outlined" color="primary" onClick={this.handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

// export default CustomerAdd;
export default withStyles(styles)(CustomerAdd);