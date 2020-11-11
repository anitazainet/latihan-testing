import React from "react";
import {create} from "react-test-renderer";

function Button(props) {
    return <button> Nothing to do for now</button>;
}

describe("Buttin component", () => {
    test("Matches the snapshot", () => {
        const button = create(<Button />);
        expect(button.toJSON()).toMatchSnapshot();
    });
});