/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getTimeEntries } from "../src/services/time-entries/getTimeEntries";
import { Header } from "../src/components/header";
import { LayoutContent } from "../src/components/layout-content";
import { Modal } from "../src/components/modal";
import { NotFoundError } from "../src/services/errors";
import { postTimeEntries } from "../src/services/time-entries/postTimeEntries";
import { SubHeader } from "../src/components/sub-header";
import { TimeEntries } from "../src/components/time-entries";
import { TimeEntryForm } from "../src/components/Form/time-entry-form";
import { deleteTimeEntry } from "../src/services/time-entries/deleteTimeEntries";
import * as Types from "../src/types";

const Homepage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);
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

  const handleDeleteEntry = (timeEntryToDelete: Types.TimeEntry) => {
    if (!window.confirm("are you sure")) {
      return;
    }
    const result = deleteTimeEntry(timeEntryToDelete);
    if (result instanceof Error) {
      setErrorMessage("Time entries could not be deleted");
      return;
    }

    const afterDelete = timeEntries.filter((entry) => entry.id !== timeEntryToDelete.id);

    setTimeEntries(afterDelete);
  };

  const fetchTimeEntries = async (): Promise<void> => {
    const fetchedTimeEntries = await getTimeEntries();
    if (fetchedTimeEntries instanceof NotFoundError) {
      setErrorMessage("Time entries were not found");
      return;
    }
    setTimeEntries(fetchedTimeEntries);
  };

  useEffect(() => {
    fetchTimeEntries();
  }, []);

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
