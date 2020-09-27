import React from 'react';
import { Stops } from './stops';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

describe('Stops', () => {
    let container: any = null;
    const DEFAULT_PROPS = {
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

    it("should render", () => {
        act(() => {
            render(<Stops { ...DEFAULT_PROPS } />, container);
        });

        test.todo('Assert something useful');
    });

    it("should not render if data is empty", () => {
        act(() => {
            render(<Stops data={[]} />, container);
        });

        test.todo('Assert something useful');
    });
});