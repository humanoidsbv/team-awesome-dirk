import * as Types from "../../types/teamMember";

export const postTeamMembers = async (newTeamMember: Types.TeamMember) => {
  const raw = JSON.stringify(newTeamMember);
  const baseURL = process.env.NEXT_PUBLIC_DB_HOST;
  return fetch(`${baseURL}/teamMembers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
  }).then((response) => response.json());
};
