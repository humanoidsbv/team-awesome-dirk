/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Header } from "../src/components/header";
import { LayoutContent } from "../src/components/layout-content";
import { Modal } from "../src/components/modal";
import { postTimeEntries } from "../src/services/time-entries/postTimeEntries";
import { SubHeader } from "../src/components/sub-header";
import { TimeEntries } from "../src/components/time-entries";
import { TimeEntryForm } from "../src/components/Form/time-entry-form";
import { deleteTimeEntry } from "../src/services/time-entries/deleteTimeEntries";
import * as Types from "../src/types";

interface HomepageProps {
  initialTimeEntries: Types.TimeEntry[];
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3004/time-entries");
  const initialTimeEntries = await response.json();

  return {
    props: {
      initialTimeEntries,
    },
  };
};

const Homepage = ({ initialTimeEntries }: HomepageProps) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>(initialTimeEntries);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (newTimeEntry: Types.TimeEntry) => {
    const result = await postTimeEntries(newTimeEntry);
    if (result instanceof Error) {
      setErrorMessage("Time entry could not be uploaden");
      return;
    }
    setTimeEntries([...timeEntries, result]);
    setIsModalActive(false);
  };

  const handleDeleteEntry = async (timeEntryToDelete: Types.TimeEntry) => {
    if (!window.confirm("are you sure")) {
      return;
    }
    const result = await deleteTimeEntry(timeEntryToDelete);
    if (result instanceof Error) {
      setErrorMessage("Time entries could not be deleted");
      return;
    }

    const afterDelete = timeEntries.filter((entry) => entry.id !== timeEntryToDelete.id);

    setTimeEntries(afterDelete);
  };

  return (
    <>
      <Header />
      <SubHeader setIsModalActive={setIsModalActive} />
      <LayoutContent>
        {errorMessage ? <p>{errorMessage}</p> : null}
        <TimeEntries handleDeleteEntry={handleDeleteEntry} timeEntries={timeEntries} />
      </LayoutContent>
      <Modal isActive={isModalActive} setIsModalActive={setIsModalActive}>
        <TimeEntryForm handleFormSubmit={handleFormSubmit} setIsModalActive={setIsModalActive} />
      </Modal>
    </>
  );
};

export default Homepage;
