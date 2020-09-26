import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavMenu } from './navMenu';

export default {
    title: 'NavMenu',
    component: NavMenu,
};

export const base = () => <Router><NavMenu /></Router>;