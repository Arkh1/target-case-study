import React from 'react';
import { Stops } from './stops';

export default {
    title: 'Stops',
    component: Stops,
};

const props = {
    data: [
        {"Text":"Brooklyn Center Transit Center","Value":"BCTC"},
        {"Text":"Penn & 43rd Ave Station","Value":"43PE"},
        {"Text":"Penn & Lowry Station","Value":"LWPE"},
        {"Text":"Olson & Penn Station","Value":"PE55"},
        {"Text":"Olson & 7th St Station","Value":"7SOL"}
    ]
};

export const base = () => <Stops { ...props } />;