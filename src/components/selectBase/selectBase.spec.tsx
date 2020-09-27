import React from 'react';
import { SelectBase } from './selectBase';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

describe('SelectBase', () => {
    let container: any = null;
    const DEFAULT_PROPS= {
        label: 'exampleLabel'
    };

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

    it("should render with label", () => {
        act(() => {
            render(<SelectBase { ...DEFAULT_PROPS } />, container);
        });
    });

    it("should not render without label", () => {
        act(() => {
            render(<SelectBase label="" />, container);
        });

        // TODO: Assert something useful
    });

    it("should call passed in callback when selection is made", () => {
        const handleChange = jest.fn();
        act(() => {
            render(<SelectBase handleChangeCb={handleChange} label={DEFAULT_PROPS.label} />, container);
        });

        // TODO: Assert something useful
    });
});