import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export interface FooterProps {}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        text: {
            flexGrow: 1,
        },
        appBar: {
            top: 'auto',
            bottom: 0,
        }
    }),
);

export const Footer: FunctionComponent<FooterProps> = () => {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <AppBar position="static" color='secondary' className={classes.appBar}>
                <Toolbar>
                    <Typography variant="caption" align="center" className={classes.text}>
                        Created By Mark Rupp
                    </Typography>
                </Toolbar>
            </AppBar>
        </footer>
    );
};
