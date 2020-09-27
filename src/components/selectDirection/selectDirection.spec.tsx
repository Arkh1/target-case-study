import React from 'react';
import { SelectDirection } from './selectDirection';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

describe('SelectDirection', () => {
    let container: any = null;
    const DEFAULT_PROPS= {
        data: [{"Text":"NORTHBOUND","Value":"4"},{"Text":"SOUTHBOUND","Value":"1"}]
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

    it("should render with data", () => {
        act(() => {
            render(<SelectDirection { ...DEFAULT_PROPS } />, container);
        });

        test.todo('Assert something useful');
    });

    it("should not render without data", () => {
        act(() => {
            render(<SelectDirection data={[]} />, container);
        });

        test.todo('Assert something useful');
    });

    it("should call passed in callback when selection is made", () => {
        const handleChange = jest.fn();
        act(() => {
            render(<SelectDirection handleChangeCb={handleChange} data={DEFAULT_PROPS.data} />, container);
        });

        test.todo('Assert something useful');
    });
});