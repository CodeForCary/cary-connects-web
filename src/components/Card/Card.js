import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
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
    padding: theme.spacing.unit,
  },

});

const Contact = props => {
  const { classes, type, data } = props;

    if (!data) {
        return <div />
    };


function ParkingName(props) {
  if (data[0].properties.name.toLowerCase().includes('lot') || data[0].properties.name.toLowerCase().includes('deck')) {
    return <Typography variant="title">{data[0].properties.name}</Typography>;
  }
  return <Typography variant="title">{data[0].properties.name} Lot</Typography>;
}

function Parking(props) {
  if (data[0].properties.stdParking > 0) {
    return <Typography variant="body1">Parking Spots: {data[0].properties.stdParking + data[0].properties.hcParking + data[0].properties.elecParking}</Typography>
  }
  return ''
}

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={10} className={classes.gridItem}>
        <Paper className={classes.card}>
        <ParkingName />
          <CardParking data={data[0].properties} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Contact);
