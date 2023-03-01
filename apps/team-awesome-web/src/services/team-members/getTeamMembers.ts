import * as Types from "../../types/teamMember";

export const getTeamMembers = async (): Promise<Types.TeamMember[]> => {
  return fetch("https://my-json-server.typicode.com/humanoidsbv/team-awesome-dirk/team-members", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};
