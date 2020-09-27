import React from 'react';
import { SelectRoute} from './selectRoute';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

describe('SelectRoute', () => {
    let container: any = null;
    const DEFAULT_PROPS= {
        data: [
            {"Description":"METRO Blue Line","ProviderID":"8","Route":"901"},
            {"Description":"METRO Green Line","ProviderID":"8","Route":"902"},
            {"Description":"METRO Red Line","ProviderID":"9","Route":"903"},
            {"Description":"METRO A Line","ProviderID":"8","Route":"921"}
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
            render(<SelectRoute { ...DEFAULT_PROPS } />, container);
        });

        // TODO: Assert something useful
    });

    it("should not render without data", () => {
        act(() => {
            render(<SelectRoute data={[]} />, container);
        });

        // TODO: Assert something useful
    });

    it("should call passed in callback when selection is made", () => {
        const handleChange = jest.fn();
        act(() => {
            render(<SelectRoute handleChangeCb={handleChange} data={DEFAULT_PROPS.data} />, container);
        });

        // TODO: Assert something useful
    });
});