import React, { FunctionComponent, useState, useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { IRoute } from '../../types/index';
import { SelectBase } from '../selectBase/selectBase';

export interface ISelectRouteProps {
    handleChangeCb?: (event: React.ChangeEvent<{ value: any }>) => void,
    data: Array<IRoute>
}

export const SelectRoute: FunctionComponent<ISelectRouteProps> = ({ handleChangeCb, data }) => (
    <SelectBase handleChangeCb={handleChangeCb} label="Route" >
        { data.map((route: IRoute) => <MenuItem key={route.Route} value={route.Route}>{ route.Description }</MenuItem>) }
    </SelectBase>
);