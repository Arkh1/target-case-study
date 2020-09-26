import React, { FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';
import { createStyles, makeStyles, Theme  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { SelectRoute } from '../../components/selectRoute/selectRoute';
import { SelectDirection } from '../../components/selectDirection/selectDirection';
import { Stops } from '../../components/stops/stops';
import * as API from '../../utils/api';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            padding: theme.spacing(1)
        },
        media: {
            height: 140,
        }
    }),
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
        <Paper>
            <Card className={classes.form}>
                <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                        Real-time Departures
                    </Typography>
                    <SelectRoute handleChangeCb={onSelectRouteChange} data={routes} />
                    { !!routeId && <SelectDirection handleChangeCb={onSelectDirectionChange} data={directions} /> }
                    <Typography variant="body2" color="textSecondary" component="p">
                        NexTrip does some cool stuff...  and stuff.
                    </Typography>
                </CardContent>
            </Card>
            { !!directionId && <Stops data={stops} /> }
        </Paper>
    );
};