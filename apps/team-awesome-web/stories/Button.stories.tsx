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
export const Secondary = (args) => (
  <Button variant="secondary" onClick={action("clicked")} {...args}>
    Secondary
  </Button>
);

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lvXiiymHbNqLdfqyqNc5s5/team_awesome_dashboard?node-id=0-754&t=GQaExmahM28DydVQ-0",
  },
};
