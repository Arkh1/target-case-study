import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menu: {
            '& a': {
                'text-decoration': 'none',
                color: '#000'
            }
        }
    }),
);

export interface INavMenuProps {}

export const NavMenu: FunctionComponent<INavMenuProps> = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon />
            </Button>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menu}
            >
                <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/about">About</Link></MenuItem>
            </Menu>
        </nav>
    );
};