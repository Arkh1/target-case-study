import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './header';

export default {
    title: 'Header',
    component: Header,
};

export const base = () => <Router><Header /></Router>;