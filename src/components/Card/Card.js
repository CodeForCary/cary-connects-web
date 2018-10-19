import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CardBusiness from "./CardBusiness";
import CardParking from "./CardParking";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: theme.spacing.unit * 2
  },
  card: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit
  }
});

const Contact = props => {
  const { classes, type, data } = props;
  if (!props.data) {
    return <div>Loading...</div>;
  }
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={10}>
        <Paper className={classes.card}>
          <Typography variant="title">{data[0].properties.name}</Typography>
          {console.log(data)}
          {type === "business" ? (
            <CardBusiness data={data[0]} />
          ) : (
            <CardParking data={data[0]} />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Contact);
