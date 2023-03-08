import React from "react";
import { action } from "@storybook/addon-actions";

import { Button } from "../src/components/button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = (args) => (
  <Button onClick={action("clicked")} {...args}>
    Primary
  </Button>
);
export const Secondary = () => (
  <Button variant="secondary" onClick={action("clicked")}>
    Secondary
  </Button>
);
