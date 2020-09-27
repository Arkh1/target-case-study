import React from 'react';
import { Body } from './body';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

describe('Body', () => {
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

    it("should render with its children", () => {
        const sampleContent = 'Sample Child Content';
        act(() => {
            render(<Body>{ sampleContent }</Body>, container);
        });

        expect(container.textContent).toBe(sampleContent);
    });
});