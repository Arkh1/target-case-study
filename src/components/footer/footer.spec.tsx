import React from 'react';
import { Footer } from './footer';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

describe('Footer', () => {
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
        const expectedContent = 'Created By Mark Rupp';

        act(() => {
            render(<Footer />, container);
        });

        expect(container.textContent).toBe(expectedContent);
    });
});