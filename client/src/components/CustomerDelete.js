import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

class CustomerDelete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  deleteCustomer(id) {
    const url = '/api/customers/' + id;
    fetch(url, {
      method: 'DELETE'
    });
    this.props.stateRefresh();
  }

  render() {
    return (
      // <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>Delete</button>
      <div>
        <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>Delete</Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle onClose={this.handleClickOpen}>
            Delete Alert
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              Selected customer profile will be deleted!
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>Delete</Button>
            <Button variant="outlined" color="primary" onClick={this.handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default CustomerDelete;