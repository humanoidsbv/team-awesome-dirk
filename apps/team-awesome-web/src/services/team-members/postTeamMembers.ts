import * as Types from "../../types/teamMember";

export const postTeamMembers = async (newTeamMember: Types.TeamMember) => {
  const raw = JSON.stringify(newTeamMember);
  return fetch("http://localhost:3004/team-members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
  }).then((response) => response.json());
};
