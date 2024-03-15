import React from 'react';
import axios from 'axios';

class CustomerAdd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      userName: '',
      birthday: '',
      gender: '',
      job: '',
      fileName: ''
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
      fileName: ''
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

  // AxiosError {message: 'Request failed with status code 404', name: 'AxiosError', code: 'ERR_BAD_REQUEST', config: {…}, request: XMLHttpRequest, …}

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h1>Customer Add</h1>
        Photo: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>
        Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
        Birthday: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
        Gender: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/>
        Job: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>
        <button type="Submit">Add</button>
      </form>
    )
  }
}

export default CustomerAdd;