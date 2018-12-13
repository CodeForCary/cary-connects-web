import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import FadeIn from 'react-fade-in'

const styles = theme => ({
  root: {
    textAlign: 'center',
    backgroundColor: '#0190BE',
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  title: {
    paddingTop: '23%',
    fontFamily: 'sans-serif',
    fontWeight: '100',
    fontSize: '72px',
    color: 'white'
  }
})


class Welcome extends Component {

  constructor(props) {
    super(props)

    this.state ={
      redirect: false
    }
  }

  _handleClick = () => {
    this.setState({redirect: true});
  }

  componentDidMount() {
	window.addEventListener("click", this._handleClick);
}

  render () {
    const { classes } = this.props;

    if (this.state.redirect) {
      return <Redirect push to="/home" />
    }
    return (
      <div className={classes.root} >
        <FadeIn transitionDuration={5000}>
          <h1 className={classes.title}>Welcome to Cary Connects!</h1>
        </FadeIn>
      </div>
    )
  }
}

export default withStyles(styles)(Welcome);
