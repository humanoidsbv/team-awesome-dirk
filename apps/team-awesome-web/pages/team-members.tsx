import { useContext } from "react";
import { Header } from "../src/components/header";
import { SubHeader } from "../src/components/sub-header";
import { StoreContext } from "../src/components/store-context";
import { Modal } from "../src/components/modal";
import { Button } from "../src/components/button";
import { PlusIcon } from "../src/components/button/Button.styled";

const TeamMembers = () => {
  const { isModalActive, setIsModalActive } = useContext(StoreContext);
  return (
    <>
      <Header />
      <SubHeader pageTitle="Team members" setIsModalActive={setIsModalActive}>
        <Button onClick={() => setIsModalActive(true)}>
          <PlusIcon />
          New Humanoid
        </Button>
      </SubHeader>
      <Modal isActive={isModalActive} setIsModalActive={setIsModalActive} />
    </>
  );
};

export default TeamMembers;
