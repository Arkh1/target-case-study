import React from 'react';
import { SelectStop } from './selectStop';

export default {
    title: 'SelectStop',
    component: SelectStop,
};

const props = {
    data: [
        {"Text":"Brooklyn Center Transit Center","Value":"BCTC"},
        {"Text":"Penn & 43rd Ave Station","Value":"43PE"},
        {"Text":"Penn & Lowry Station","Value":"LWPE"},
        {"Text":"Olson & Penn Station","Value":"PE55"},
        {"Text":"Olson & 7th St Station","Value":"7SOL"},
        {"Text":"8th St & Nicollet Station","Value":"8SNI"},
        {"Text":"8th St and Chicago Ave","Value":"8S9A"}
    ]
};

export const base = () => <SelectStop { ...props } />;