import axios from 'axios';

// Circumventing CORS issues for local development by setting a proxy.
const ROOT_URL: string = 'http://svc.metrotransit.org/NexTrip';
const ROUTES_URL: string = '/Routes';
const PROVIDERS_URL: string = '/Providers';
const DIRECTIONS_URL: string = '/Directions';
const STOPS_URL: string = '/stops';
const STOP_URL: string = '/Stop';
const VEHICLE_LOCATION_URL: string = '/VehicleLocations';
const JSON_FORMAT_PARAM: string = '?format=json';

const getStops = async (routeId: string, directionId: string) => {
    try {
        const url = `${STOPS_URL}/${routeId}/${directionId}${JSON_FORMAT_PARAM}`;
        return await axios.get(url);
    } catch (e) {
        console.log(`Failed to fetch stops list. Error: ${e}`);
    }
};

const getDirections = async (routeId: string) => {
    try {
        const url = `${DIRECTIONS_URL}/${routeId}${JSON_FORMAT_PARAM}`;
        return await axios.get(url);
    } catch (e) {
        console.log(`Failed to fetch directions list. Error: ${e}`);
    }
};

export {
    getDirections,
    getStops,
    ROOT_URL,
    ROUTES_URL,
    PROVIDERS_URL,
    DIRECTIONS_URL,
    STOPS_URL,
    STOP_URL,
    VEHICLE_LOCATION_URL,
    JSON_FORMAT_PARAM
}