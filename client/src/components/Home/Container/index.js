import React from 'react';
//material-ui
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';

const styles = ({
  bodyContainer: {
    'height': '100%',
    'display': 'flex',
    'alignItems': 'stretch',
    position: 'relative',
  },
});

class Container extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.bodyContainer}>
        {this.props.children}
      </div>
    );
  }
}

Container.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node
}

export default withStyles(styles)(Container);
