import React, { FunctionComponent, useState, useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { IDirection } from '../../types/index';
import { SelectBase } from '../selectBase/selectBase';

export interface ISelectDirectionProps {
    handleChangeCb?: (event: React.ChangeEvent<{ value: any }>) => void,
    data: Array<IDirection>
}

export const SelectDirection: FunctionComponent<ISelectDirectionProps> = ({ handleChangeCb, data }) => (
    <SelectBase handleChangeCb={handleChangeCb} label="Direction">
        { data.map((direction: IDirection) => <MenuItem key={direction.Value} value={direction.Value}>{ direction.Text }</MenuItem>) }
    </SelectBase>
);