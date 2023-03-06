import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import { Button } from ".";

describe("rendering of button", () => {
  it("renders the button ", () => {
    const tree = renderer
      .create(
        <Button>
          <div />
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
