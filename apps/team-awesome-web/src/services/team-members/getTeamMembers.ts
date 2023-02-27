import * as Types from "../../types/teamMember";

export const getTeamMembers = async (): Promise<Types.TeamMember[]> => {
  return fetch("http://localhost:3004/team-members", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};
