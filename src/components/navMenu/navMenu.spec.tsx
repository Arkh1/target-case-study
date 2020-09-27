import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavMenu } from './navMenu';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

describe('NavMenu', () => {
    let container: any = null;

    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it("should render", () => {
        act(() => {
            render(<Router><NavMenu /></Router>, container);
        });

        // TODO: Assert something useful
    });
});