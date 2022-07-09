import React from 'react';
import renderer from 'react-test-renderer';
import App from "../App.js";

describe("<App />", () => {
    it('has 3 children', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(3);
    });
});