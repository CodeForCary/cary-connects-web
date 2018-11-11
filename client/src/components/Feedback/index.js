import React from 'react';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/InfoOutlined'
import MediaQuery from "react-responsive";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  paperMobile: {
    position: 'absolute',
    width: '75%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    transform: `translate(-50%, -50%)`,
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column'
  },
  paperWeb: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    transform: `translate(-50%, -50%)`,
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column'
  },
  modalContainer: {
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'flex-end',
    'padding-right': '12%'
  },
  icon: {
    cursor: 'pointer',
  }
});

class Feedback extends React.Component {
    state = {
      open: false,
      message: null
    };

  handleChange = message => event => {
    this.setState({
      [message]: event.target.value,
    });
  };

  handleSubmit(e) {
    axios.post("/api/send", {
      message: this.state.message
    })
    this.setState({
      message: null
    });
  };

  openModal = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <div className={classes.modalContainer}>
      <InfoIcon onClick={this.openModal} className={classes.icon}/>
      </div>
      <MediaQuery query="(max-width: 700px)">
      <Modal
        open={this.state.open}
        onClose={this.handleClose}
      >
        <div className={classes.paperMobile}>
          <TextField
          id="message"
          placeholder="Feedback"
          onChange={this.handleChange('message')}
          multiline
            rows="5"
          variant="outlined"
          />
          <Button onClick={this.handleClose.bind(this)}>Submit</Button>
        </div>
        </Modal>
      </MediaQuery>
      <MediaQuery query="(min-width: 700px)">
      <Modal
        open={this.state.open}
        onClose={this.handleClose}
      >
      <div className={classes.paperWeb}>
        <TextField
        id="outlined-multiline-static"
        placeholder="Feedback"
        multiline
          rows="5"
        variant="outlined"
        value={this.state.message}
        onChange={this.handleChange('message')}
        />
        <Button onClick={(event) => {this.handleSubmit(); this.handleClose()}}>Submit</Button>
      </div>
      </Modal>
      </MediaQuery>
      </div>
    )
  }
}

Feedback.propTypes = {
  classes: PropTypes.object.isRequired,
};

const FeedbackWrapped = withStyles(styles)(Feedback);

export default FeedbackWrapped;
