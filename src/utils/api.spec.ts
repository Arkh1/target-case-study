import axios from 'axios';
import { getDirections, getStops } from './api';

jest.mock('axios');

describe('api', () => {
    describe('getDirections', () => {
        const routeId = '901';

        it('should fetch directions successfully from the API', async () => {
            const response = {
                data: [{"Text":"NORTHBOUND","Value":"4"},{"Text":"SOUTHBOUND","Value":"1"}],
            };

            axios.get.mockImplementationOnce(() => Promise.resolve(response));
            await expect(getDirections(routeId)).resolves.toEqual(response);
        });

        it('should throw an error if fetch fails', async () => {
            const errorMessage = 'Any Error';

            axios.get.mockImplementationOnce(() =>
                Promise.reject(new Error(errorMessage)),
            );

            await expect(getDirections(routeId)).rejects.toThrow(errorMessage);
        });
    });

    describe('getStops', () => {
        it('should fetch stops successfully from the API', async () => {
            const response = {
                data: [
                    {"Text":"Brooklyn Center Transit Center","Value":"BCTC"},
                    {"Text":"Penn & 43rd Ave Station","Value":"43PE"},
                    {"Text":"Penn & Lowry Station","Value":"LWPE"},
                    {"Text":"Olson & Penn Station","Value":"PE55"},
                    {"Text":"Olson & 7th St Station","Value":"7SOL"}
                ],
            };

            axios.get.mockImplementationOnce(() => Promise.resolve(response));
            await expect(getStops()).resolves.toEqual(response);
        });

        it('should throw an error if fetch fails', async () => {
            const errorMessage = 'Any Error';

            axios.get.mockImplementationOnce(() =>
                Promise.reject(new Error(errorMessage)),
            );

            await expect(getStops()).rejects.toThrow(errorMessage);
        });
    });
});
