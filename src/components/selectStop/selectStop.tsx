// If the ask was to make more of a replica of the NexTrip real time departures page
// then this would be more useful than the stops timeline component.
import React, { FunctionComponent, useState, useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { IStop } from '../../types/index';
import { SelectBase } from '../selectBase/selectBase';

export interface ISelectStopProps {
    handleChangeCb?: (event: React.ChangeEvent<{ value: any }>) => void,
    data: Array<IStop>
}

export const SelectStop: FunctionComponent<ISelectStopProps> = ({ handleChangeCb, data }) => (
    <SelectBase handleChangeCb={handleChangeCb} label="Stop">
        { data.map((stop: IStop) => <MenuItem key={stop.Value} value={stop.Value}>{ stop.Text }</MenuItem>) }
    </SelectBase>
);