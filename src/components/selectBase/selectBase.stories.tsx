import React from 'react';
import { SelectBase } from './selectBase';

export default {
    title: 'SelectBase',
    component: SelectBase,
};

const props = {
    label: 'Example',
    data: []
};

export const base = () => <SelectBase { ...props } />;