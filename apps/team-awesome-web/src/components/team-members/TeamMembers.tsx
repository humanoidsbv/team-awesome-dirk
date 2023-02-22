import { TeamMember } from "../team-member/TeamMember";
import * as Types from "../../types";

interface TeamMembersProps {
  memberEntries: Types.TeamMember[];
}

export const TeamMembers = ({ memberEntries }: TeamMembersProps) => {
  return (
    <>
      {memberEntries.map((memberEntry) => (
        <TeamMember key={memberEntry.id} memberEntry={memberEntry} />
      ))}
    </>
  );
};
