import React, { FunctionComponent, useState } from 'react';
import { createStyles, makeStyles, Theme  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            padding: theme.spacing(3)
        }
    }),
);

export interface IAboutProps {}

export const About: FunctionComponent<IAboutProps> = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.content}>
            <Typography align="center" gutterBottom variant="h5" component="h2">
                About My Case Study
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                While working on this case study I took the opportunity to learn more about React's implementation of Material Design.
                I have used Material UI for Angular, but not React.  I am a fan of the design concepts that drive Material Design,
                so it was fun to learn more about how it has grown over the past couple of years.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                I started this case study by working on implementing a replica of the behavior shown in the real-time departures screen of NexTrip,
                but after re-reading the requirements of the case study I noticed I am only supposed to display the stops of the route + direction.
            </Typography>
        </Paper>
    );
};