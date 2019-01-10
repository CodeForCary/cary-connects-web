import React from "react";
import Modal from "@material-ui/core/Modal";
import axios from "axios";
import PropTypes from "prop-types";
import { Context } from "src/components/Provider";
import { withStyles } from "@material-ui/core/styles";
import FeedbackIcon from "@material-ui/icons/Comment";
import MediaQuery from "react-responsive";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  paperMobile: {
    position: "absolute",
    width: "75%",
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
  paperWeb: {
    position: "absolute",
    width: theme.spacing.unit * 50,
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
    message: null
  };

  handleChange = message => event => {
    this.setState({ [message]: event.target.value });
  };

  handleSubmit(e) {
    axios.post("/api/send", { message: this.state.message });
    this.setState({ message: null });
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
            <MediaQuery query='(max-width: 700px)'>
              <Modal open={this.state.open} onClose={this.handleClose}>
                <div className={classes.paperMobile}>
                  <TextField
                    id='message'
                    placeholder='Enter Message'
                    onChange={this.handleChange("message")}
                    multiline
                    rows='5'
                    variant='outlined'
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
            </MediaQuery>
            <MediaQuery query='(min-width: 700px)'>
              <Modal open={this.state.open} onClose={this.handleClose}>
                <div className={classes.paperWeb}>
                  <h4>Tell us what you like or dislike</h4>
                  <h5>include your email address if you'd like a response.</h5>
                  <TextField
                    id='outlined-multiline-static'
                    placeholder='Message'
                    multiline
                    rows='5'
                    variant='outlined'
                    value={this.state.message}
                    onChange={this.handleChange("message")}
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
            </MediaQuery>
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
