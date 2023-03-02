import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from "@testing-library/react";
import { TeamMembers } from "../team-members";
// import { TimeEntryForm } from "../Form/time-entry-form";

it("renders a team member", () => {
  const mockMembers = [
    {
      id: 1,
      firstName: "Herman",
      lastName: "Vulkers",
      emailAddress: "hermanvulkers@gmail.com",
      label: "test",
      currentClient: "Humanoids",
    },
  ];

  const teamMembers = render(<TeamMembers memberEntries={mockMembers} />);

  expect(teamMembers.findByTestId("team-member"));
  // expect(herman).toBeInTheDocument;
});
