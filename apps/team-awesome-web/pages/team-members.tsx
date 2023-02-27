/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";

import { Button } from "../src/components/button";
import { getTeamMembers } from "../src/services/team-members/getTeamMembers";
import { Header } from "../src/components/header";
import { LayoutContent } from "../src/components/layout-content";
import { Modal } from "../src/components/modal";
import { PlusIcon } from "../src/components/button/Button.styled";
import { postTeamMembers } from "../src/services/team-members/postTeamMembers";
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
  const [errorWarning, setErrorWarning] = useState("");

  useEffect(() => {
    setMemberEntries(initialMemberEntries);
  }, []);

  const handleFormSubmit = async (newTeamMember: Types.TeamMember) => {
    const result = await postTeamMembers(newTeamMember);
    if (result instanceof Error) {
      setErrorWarning("Time entry could not be uploaden");
      return;
    }
    setMemberEntries([...memberEntries, result]);

    setIsModalActive(false);
  };

  return (
    <>
      <Header />
      <SubHeader pageTitle="Team members" setIsModalActive={setIsModalActive}>
        <Button onClick={() => setIsModalActive(true)}>
          <PlusIcon />
          New Humanoid
        </Button>
      </SubHeader>
      <LayoutContent>
        <TeamMembers memberEntries={memberEntries} />
      </LayoutContent>
      {errorWarning && <p>{errorWarning}</p>}
      <Modal isActive={isModalActive} setIsModalActive={setIsModalActive}>
        <TeamMemberForm handleFormSubmit={handleFormSubmit} />
      </Modal>
    </>
  );
};

export default TeamMembersPage;
