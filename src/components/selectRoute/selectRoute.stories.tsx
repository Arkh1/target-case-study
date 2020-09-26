import React from 'react';
import { SelectRoute } from './selectRoute';

export default {
    title: 'SelectRoute',
    component: SelectRoute,
};

const props = {
    data: []
};

export const base = () => <SelectRoute { ...props } />;