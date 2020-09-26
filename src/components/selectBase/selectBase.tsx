import React, { FunctionComponent, useState } from 'react';
import { createStyles, makeStyles, Theme  } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            width: '95%'
        }
    })
);

export interface ISelectBaseProps {
    handleChangeCb?: (event: React.ChangeEvent<{ value: any }>) => void,
    label: string
}

export const SelectBase: FunctionComponent<ISelectBaseProps> = ({ handleChangeCb, label, children }) => {
    const [selectedItem, setSelectedItem] = useState<any>('');
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
        setSelectedItem(event.target.value);
        if (handleChangeCb) {
            handleChangeCb(event.target.value);
        }
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="route-select">{ label }</InputLabel>
            <Select
                value={selectedItem}
                onChange={handleChange}
                label={label}
                inputProps={{
                    name: label,
                    id: `${label}-select`
                }}
            >
                { children }
            </Select>
        </FormControl>
    );
};