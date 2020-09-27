import React, { FunctionComponent } from 'react';
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
            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                I started this case study by working on implementing a replica of the behavior shown in the real-time departures screen of NexTrip,
                but after re-reading the requirements of the case study I noticed I am only supposed to display the stops of the route + direction.
                At that point I stopped some of the work I was doing short and just displayed the stops in a user friendly manner.
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                With case studies like these I never really know how far to take them.
                There is a lot that could still be done to make this application more robust and
                for that reason I have a difficult time calling it "done" for the sake of a case study.
                If there are any particular aspects that the reviewers would like to see expanded on I can spend some more time on specific points of interest.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Thanks again for the opportunity!<br />
                Mark
            </Typography>
        </Paper>
    );
};