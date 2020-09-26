import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectBase } from './selectBase';

export default {
    title: 'SelectBase',
    component: SelectBase,
};

const exampleData = [
    { Text: 'Text1', Value: 'Value1' },
    { Text: 'Text2', Value: 'Value2' },
    { Text: 'Text3', Value: 'Value3' },
    { Text: 'Text4', Value: 'Value4' }
];

const props = {
    label: 'Example'
};

export const base = () => (
    <SelectBase { ...props } >
        { exampleData.map((item: any) => <MenuItem key={item.Value} value={item.Value}>{ item.Text }</MenuItem>) }
    </SelectBase>
);