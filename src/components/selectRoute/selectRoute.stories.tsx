import React from 'react';
import { SelectRoute } from './selectRoute';

export default {
    title: 'SelectRoute',
    component: SelectRoute,
};

const props = {
    data: [
        {"Description":"METRO Blue Line","ProviderID":"8","Route":"901"},
        {"Description":"METRO Green Line","ProviderID":"8","Route":"902"},
        {"Description":"METRO Red Line","ProviderID":"9","Route":"903"},
        {"Description":"METRO A Line","ProviderID":"8","Route":"921"}
    ]
};

export const base = () => <SelectRoute { ...props } />;