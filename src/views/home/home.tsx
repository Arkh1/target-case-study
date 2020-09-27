import React, { FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';
import { createStyles, makeStyles, Theme  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { SelectRoute } from '../../components/selectRoute/selectRoute';
import { SelectDirection } from '../../components/selectDirection/selectDirection';
import { Stops } from '../../components/stops/stops';
import * as API from '../../utils/api';
import { GENERIC_ERROR_MESSAGE } from '../../utils/consts';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            padding: theme.spacing(3)
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        }
    })
);

export interface IHomeProps {}

export const Home: FunctionComponent<IHomeProps> = () => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);
    const [routeId, setRouteId] = useState('');
    const [directionId, setDirectionId] = useState('');
    const [routes, setRoutes] = useState([]);
    const [directions, setDirections] = useState([]);
    const [stops, setStops] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRoutes = async () => {
            try {
                const url = `${API.ROUTES_URL}${API.JSON_FORMAT_PARAM}`;
                const response = await axios.get(url);
                setRoutes((response && response.data) || []);
            } catch (e) {
                // TODO: Log failure to server.  Sentry or some equivalent.
                setError(GENERIC_ERROR_MESSAGE);
                console.log(`Failed to fetch routes list. Error: ${e}`);
            }
        };

        fetchRoutes();
    }, []);

    const onSelectRouteChange = async (value: any) => {
        setRouteId(value);
        try {
            const response = await API.getDirections(value);
            setDirections((response && response.data) || []);
        } catch (e) {
            setError(GENERIC_ERROR_MESSAGE);
            setDirections([]);
        }
        setStops([]);
    };

    const onSelectDirectionChange = async (value: any) => {
        setDirectionId(value);
        setIsLoading(true);
        try {
            const response = await API.getStops(routeId, value);
            setStops((response && response.data) || []);
        } catch (e) {
            setError(GENERIC_ERROR_MESSAGE);
            setStops([]);
        }
        setIsLoading(false);
    };

    const handleCloseSnackbar = () => {
        setError('');
    };

    return (
        <Paper className={classes.form}>
            <Backdrop className={classes.backdrop} open={isLoading} transitionDuration={{ enter: 2000, exit: 0 }}>
                <CircularProgress color="inherit" />
            </Backdrop>
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
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={!!error} autoHideDuration={15000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error">
                    { error }
                </Alert>
            </Snackbar>
        </Paper>
    );
};