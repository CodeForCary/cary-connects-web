import React from 'react';
//material-ui
import { withStyles } from '@material-ui/core/styles';

const styles = Theme => ({
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

export default withStyles(styles)(Container);
