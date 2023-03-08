/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";

import { ADD_TEAM_MEMBER } from "../src/graphql/team-members/mutations";
import { Button } from "../src/components/button";
import { getTeamMembers } from "../src/services/team-members/getTeamMembers";
import { Header } from "../src/components/header";
import { LayoutContent } from "../src/components/layout-content";
import { Modal } from "../src/components/modal";
import { StoreContext } from "../src/components/store-context";
import { SubHeader } from "../src/components/sub-header";
import { TeamMemberForm } from "../src/components/Form/team-member-form";
import { TeamMembers } from "../src/components/team-members";
import * as Types from "../src/types";

interface TeamMembersPageProps {
  memberEntries: Types.TeamMember[];
}

export const getServerSideProps = async () => {
  const response = await getTeamMembers();

  return {
    props: {
      memberEntries: response,
    },
  };
};

const TeamMembersPage = ({ memberEntries: initialMemberEntries }: TeamMembersPageProps) => {
  const { isModalActive, setIsModalActive } = useContext(StoreContext);
  const { memberEntries, setMemberEntries } = useContext(StoreContext);
  const [createTeamMember] = useMutation(ADD_TEAM_MEMBER);

  useEffect(() => {
    setMemberEntries(initialMemberEntries);
  }, []);

  const handleFormSubmit = async ({
    firstName,
    lastName,
    emailAddress,
    label,
    currentClient,
  }: Types.TeamMember) => {
    const result = await createTeamMember({
      variables: { firstName, lastName, emailAddress, label, currentClient },
    });
    setMemberEntries([...memberEntries, result.data.createTeamMember]);

    setIsModalActive(false);
  };

  return (
    <>
      <Header />
      <SubHeader pageTitle="Team members" setIsModalActive={setIsModalActive}>
        <Button icon onClick={() => setIsModalActive(true)}>
          New Humanoid
        </Button>
      </SubHeader>
      <LayoutContent>
        <TeamMembers memberEntries={memberEntries} />
      </LayoutContent>

      <Modal isActive={isModalActive} setIsModalActive={setIsModalActive}>
        <TeamMemberForm handleFormSubmit={handleFormSubmit} />
      </Modal>
    </>
  );
};

export default TeamMembersPage;
