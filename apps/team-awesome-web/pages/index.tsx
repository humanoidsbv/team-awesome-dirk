import { Header } from "../src/components/header";
import { SubHeader } from "../src/components/sub-header";
import { TimeEntries } from "../src/components/time-entries";
import { LayoutContent } from "../src/components/layout-content";
import { Modal } from "../src/components/modal";
import { useState } from "react";
import mockTimeEntries from "../fixtures/mock-time-entries";
import { TimeEntryForm } from "../src/components/Form/time-entry-form";
import * as Types from "../src/types";

const Homepage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);

  // verwacht een time entry. en ipv console log moet hij de time entries state updaten
  const handleFormSubmit = (entry: Types.TimeEntry) => {
    setTimeEntries([...timeEntries, entry]);
    setIsModalActive(false);
  };

  return (
    <>
      <Header />
      <SubHeader setIsModalActive={setIsModalActive} />
      <LayoutContent>
        <TimeEntries timeEntries={timeEntries} />
      </LayoutContent>
      <Modal isActive={isModalActive} setIsModalActive={setIsModalActive}>
        <TimeEntryForm handleFormSubmit={handleFormSubmit} setIsModalActive={setIsModalActive} />
      </Modal>
    </>
  );
};

export default Homepage;
