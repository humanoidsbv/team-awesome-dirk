import * as Types from "../../types/teamMember";

export const getTeamMembers = async (): Promise<Types.TeamMember[]> => {
  const baseURL = process.env.NEXT_PUBLIC_DB_HOST;
  return fetch(`${baseURL}/team-members`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};
