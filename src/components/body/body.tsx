import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

export interface IBodyProps {
    children: any
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        body: {
            padding: theme.spacing(2)
        }
    })
);

export const Body: FunctionComponent<IBodyProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <Container maxWidth="sm" className={classes.body}>
            { children }
        </Container>
    );
};