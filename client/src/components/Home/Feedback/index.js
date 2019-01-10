import React from "react";
import Modal from "@material-ui/core/Modal";
import axios from "axios";
import PropTypes from "prop-types";
import { Context } from "src/components/Provider";
import { withStyles } from "@material-ui/core/styles";
import FeedbackIcon from "@material-ui/icons/Comment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import version from "../../../../package.json";

const styles = theme => ({
  paper: {
    width: "75%",
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 50
    },
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 1.5,
    transform: `translate(-50%, -50%)`,
    borderRadius: "7px",
    top: "50%",
    left: "50%",
    display: "flex",
    flexDirection: "column"
  },
  button: {
    marginTop: "6px"
  },
  feedbackButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer"
  },
  feedbackText: {
    paddingTop: "4px",
    fontWeight: "300",
    fontSize: "1rem",
    paddingLeft: "0.5em",
    color: "#333"
  }
});

class Feedback extends React.Component {
  state = {
    open: false,
    message: "",
    email: "",
    version: version.version
  };

  handleChange = message => event => {
    this.setState({ [message]: event.target.value });
  };

  handleSubmit(e) {
    const submission = {
      message: this.state.message,
      email: this.state.email
    };
    axios.post("/api/send", submission);
    this.setState({ message: "", email: "" });
  }

  openModal = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Context.Consumer>
        {context => (
          <div>
            <div
              className={classes.feedbackButtonContainer}
              onClick={event => {
                this.openModal();
                context.handleDrawerClose();
              }}
            >
              <FeedbackIcon />
              <div className={classes.feedbackText}>Feedback</div>
            </div>
            <Modal open={this.state.open} onClose={this.handleClose}>
              <div className={classes.paper}>
                <h3 style={{ color: "#333" }}>Please tell us what you like or dislike</h3>

                <TextField
                  id='outlined-multiline-static'
                  label='Message'
                  placeholder='Message'
                  multiline
                  rows='5'
                  variant='outlined'
                  margin='normal'
                  value={this.state.message}
                  onChange={this.handleChange("message")}
                />
                <TextField
                  id='email'
                  label='Email'
                  helperText='(optional)'
                  variant='outlined'
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                />
                <Button
                  className={classes.button}
                  onClick={event => {
                    this.handleSubmit();
                    this.handleClose();
                  }}
                >
                  Send
                </Button>
              </div>
            </Modal>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

Feedback.propTypes = {
  classes: PropTypes.object.isRequired
};

const FeedbackWrapped = withStyles(styles)(Feedback);

export default FeedbackWrapped;
