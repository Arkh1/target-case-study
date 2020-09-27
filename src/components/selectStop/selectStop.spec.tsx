import React from 'react';
import { SelectStop} from './selectStop';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

describe('SelectStop', () => {
    let container: any = null;
    const DEFAULT_PROPS= {
        data: [
            {"Text":"Brooklyn Center Transit Center","Value":"BCTC"},
            {"Text":"Penn & 43rd Ave Station","Value":"43PE"},
            {"Text":"Penn & Lowry Station","Value":"LWPE"},
            {"Text":"Olson & Penn Station","Value":"PE55"},
            {"Text":"Olson & 7th St Station","Value":"7SOL"},
            {"Text":"8th St & Nicollet Station","Value":"8SNI"},
            {"Text":"8th St and Chicago Ave","Value":"8S9A"}
        ]
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
            render(<SelectStop { ...DEFAULT_PROPS } />, container);
        });

        // TODO: Assert something useful
    });

    it("should not render without data", () => {
        act(() => {
            render(<SelectStop data={[]} />, container);
        });

        // TODO: Assert something useful
    });

    it("should call passed in callback when selection is made", () => {
        const handleChange = jest.fn();
        act(() => {
            render(<SelectStop handleChangeCb={handleChange} data={DEFAULT_PROPS.data} />, container);
        });

        // TODO: Assert something useful
    });
});