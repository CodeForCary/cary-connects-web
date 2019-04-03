import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Context } from '../../Provider';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

const styles = theme => ({
    color: {
        backgroundColor: theme.palette.primary.dark,
    },
    contentColor: {
        backgroundColor: 'transparent'
    }
});

class EventSnackbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            vertical: 'bottom',
            horizontal: 'center'
        }
    }

    componentDidMount() {
        setTimeout(this.handleOpen(), 3000)
    }

    handleOpen() {
        this.setState({ open: true })
    }

    handleClose() {
        this.setState({
            open: false
        })
    }
    render() {
        const {vertical, horizontal, open} = this.state;
        const {classes} = this.props;

        return (
            <Context.Consumer>
                { context => {
                    const {events} = context.state;
                    if (!events) return;

                    const link = `/events/${events[0].slug}`
                    return (
                        <Snackbar 
                            anchorOrigin={{ vertical, horizontal }}
                            className={classes.color}
                            ContentProps={{
                                classes: {
                                    root: classes.contentColor
                                }
                            }}
                            action={[
                                <IconButton
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                className={classes.close}
                                onClick={() => this.handleClose()}
                                >
                                <CloseIcon className={classes.icon} />
                                </IconButton>,
                            ]}
                            open={open}
                            message={<span id="message-id">Going to <Link onClick={() => context.setSelectedEvent(events[0])}>{events[0].title}</Link>?</span>}
                        />
                    )
                    }
                }
            </Context.Consumer>
        )
    }
}

export default withStyles(styles)(EventSnackbar)

