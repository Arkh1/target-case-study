import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './header';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

describe('Header', () => {
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
        const expectedContent = 'NexTrip Case Study';

        act(() => {
            render(<Router><Header /></Router>, container);
        });

        expect(container.textContent).toBe(expectedContent);
    });
});