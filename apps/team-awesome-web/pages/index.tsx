/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { Button } from "../src/components/button";
import { PlusIcon } from "../src/components/button/Button.styled";
import { Header } from "../src/components/header";
import { LayoutContent } from "../src/components/layout-content";
import { Modal } from "../src/components/modal";
import { postTimeEntries } from "../src/services/time-entries/postTimeEntries";
import { SubHeader } from "../src/components/sub-header";
import { TimeEntries } from "../src/components/time-entries";
import { TimeEntryForm } from "../src/components/Form/time-entry-form";
import { deleteTimeEntry } from "../src/services/time-entries/deleteTimeEntries";
import * as Types from "../src/types";
import { getTimeEntries } from "../src/services/time-entries/getTimeEntries";
import { StoreContext } from "../src/components/store-context";

interface HomepageProps {
  timeEntries: Types.TimeEntry[];
}

export const getServerSideProps = async () => {
  const response = await getTimeEntries();

  if (response instanceof Error) {
    return {
      props: {
        errorMessage: "This is an error",
      },
    };
  }

  return {
    props: {
      timeEntries: response,
    },
  };
};

const Homepage = ({ timeEntries: initialTimeEntries }: HomepageProps) => {
  const { isModalActive, setIsModalActive } = useContext(StoreContext);
  const { timeEntries, setTimeEntries } = useContext(StoreContext);
  const [errorWarning, setErrorWarning] = useState("");

  useEffect(() => {
    setTimeEntries(initialTimeEntries);
  }, []);

  const handleFormSubmit = async (newTimeEntry: Types.TimeEntry) => {
    const result = await postTimeEntries(newTimeEntry);
    if (result instanceof Error) {
      setErrorWarning("Time entry could not be uploaden");
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
      setErrorWarning("Time entries could not be deleted");
      return;
    }

    const afterDelete = timeEntries.filter((entry) => entry.id !== timeEntryToDelete.id);

    setTimeEntries(afterDelete);
  };

  return (
    <>
      <Header />
      <SubHeader pageTitle="Timesheets" setIsModalActive={setIsModalActive}>
        <Button onClick={() => setIsModalActive(true)}>
          <PlusIcon />
          New time entry
        </Button>
      </SubHeader>
      <LayoutContent>
        {errorWarning && <p>{errorWarning}</p>}
        <TimeEntries handleDeleteEntry={handleDeleteEntry} />
      </LayoutContent>
      <Modal isActive={isModalActive} setIsModalActive={setIsModalActive}>
        <TimeEntryForm handleFormSubmit={handleFormSubmit} setIsModalActive={setIsModalActive} />
      </Modal>
    </>
  );
};

export default Homepage;
