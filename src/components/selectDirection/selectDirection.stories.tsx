import React from 'react';
import { SelectDirection } from './selectDirection';

export default {
    title: 'SelectDirection',
    component: SelectDirection,
};

const props = {
    data: []
};

export const base = () => <SelectDirection { ...props } />;