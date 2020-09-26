import React, { FunctionComponent, useState } from 'react';
import { createStyles, makeStyles, Theme  } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        exampleClass: {
        }
    }),
);

export interface IAboutProps {}

export const About: FunctionComponent<IAboutProps> = () => {
    return (
        <p>
            This is my fancy about page.
        </p>
    );
};