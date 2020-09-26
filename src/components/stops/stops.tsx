import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme  } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RoomIcon from '@material-ui/icons/Room';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { IStop } from '../../types/index';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: '6px 16px',
        },
        secondaryTail: {
            backgroundColor: theme.palette.secondary.main,
        }
    })
);

export interface IStopsProps {
    data: Array<IStop>
}

export const Stops: FunctionComponent<IStopsProps> = ({ data = [] }) => {
    const classes = useStyles();

    return (
        <Timeline align="alternate">
            {
                data.map((stop, index) => {
                    const isFirstStop = index === 0;
                    const isLastStop = index+1 === data.length;

                    return (
                        <TimelineItem key={stop.Value}>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    { stop.Value }
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                { isFirstStop && <TimelineDot color="primary"><DirectionsBusIcon /></TimelineDot> }
                                { !isFirstStop && !isLastStop && <TimelineDot><ArrowDownwardIcon /></TimelineDot> }
                                { isLastStop && <TimelineDot color="secondary"><RoomIcon /></TimelineDot> }
                                { !isLastStop && <TimelineConnector /> }
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        { stop.Text }
                                    </Typography>
                                    <Typography>
                                        { isFirstStop && <>Start</> }
                                        { !isFirstStop && !isLastStop && <>Stop {index}</> }
                                        { isLastStop && <>Destination</> }
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })
            }
        </Timeline>
    );
};