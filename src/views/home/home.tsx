import React, { FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';
import { createStyles, makeStyles, Theme  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import { SelectRoute } from '../../components/selectRoute/selectRoute';
import { SelectDirection } from '../../components/selectDirection/selectDirection';
import { Stops } from '../../components/stops/stops';
import * as API from '../../utils/api';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            padding: theme.spacing(3)
        }
    })
);

export interface IHomeProps {}

export const Home: FunctionComponent<IHomeProps> = () => {
    const classes = useStyles();
    const [routeId, setRouteId] = useState('');
    const [directionId, setDirectionId] = useState('');
    const [routes, setRoutes] = useState([]);
    const [directions, setDirections] = useState([]);
    const [stops, setStops] = useState([]);

    useEffect(() => {
        const fetchRoutes = async () => {
            try {
                const url = `${API.ROUTES_URL}${API.JSON_FORMAT_PARAM}`;
                const response = await axios.get(url);
                setRoutes((response && response.data) || []);
            } catch (e) {
                console.log(`Failed to fetch routes list. Error: ${e}`);
            }
        };

        fetchRoutes();
    }, []);

    const onSelectRouteChange = async (value: any) => {
        setRouteId(value);
        const response = await API.getDirections(value);
        setDirections((response && response.data) || []);
        setStops([]);
    };

    const onSelectDirectionChange = async (value: any) => {
        setDirectionId(value);
        const response = await API.getStops(routeId, value);
        setStops((response && response.data) || []);
    };

    return (
        <Paper className={classes.form}>
            <Typography align="center" gutterBottom variant="h5" component="h2">
                Stops by Route &amp; Direction.
            </Typography>
            <SelectRoute handleChangeCb={onSelectRouteChange} data={routes} />
            <Collapse in={!!directions.length}>
                <SelectDirection handleChangeCb={onSelectDirectionChange} data={directions} />
            </Collapse>
            <Collapse in={!!stops.length}>
                <Divider variant="middle" />
                <Stops data={stops} />
            </Collapse>
        </Paper>
    );
};