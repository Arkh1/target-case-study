import React from 'react';
import { SelectDirection } from './selectDirection';

export default {
    title: 'SelectDirection',
    component: SelectDirection,
};

const props = {
    data: [{"Text":"NORTHBOUND","Value":"4"},{"Text":"SOUTHBOUND","Value":"1"}]
};

export const base = () => <SelectDirection { ...props } />;