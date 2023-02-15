/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Header } from "../src/components/header";
import { SubHeader } from "../src/components/sub-header";
import { TimeEntries } from "../src/components/time-entries";
import { LayoutContent } from "../src/components/layout-content";
import { Modal } from "../src/components/modal";
import { TimeEntryForm } from "../src/components/Form/time-entry-form";
import * as Types from "../src/types";
import { NotFoundError } from "../src/services/errors";

const Homepage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [timeEntries, setTimeEntries] = useState<Types.TimeEntry[]>([]);

  const handleFormSubmit = async (newTimeEntry: Types.TimeEntry) => {
    const result = await postTimeEntries(newTimeEntry);
    if (result instanceof Error) {
      console.log("Error found");
      return;
    }
    setTimeEntries([...timeEntries, newTimeEntry]);
    setIsModalActive(false);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const postTimeEntries = async (newTimeEntry: Types.TimeEntry) => {
    const raw = JSON.stringify(newTimeEntry);
    return fetch("http://localhost:3004/time-entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
    })
      .then((response) => {
        if (response.status === 404) {
          throw new Error();
        }
        console.log(response.status);
        return response;
      })
      .then((response) => response.json())
      .catch((error) => error);
  };

  const deleteTimeEntries = async () => {};

  const getTimeEntries = async (): Promise<Types.TimeEntry[]> => {
    return fetch("http://localhost:3004/time-entries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 404) {
          throw new NotFoundError();
        }
        console.log(response.status);
        return response;
      })
      .then((response) => response.json())
      .catch((error) => error);
  };

  const fetchTimeEntries = async (): Promise<void> => {
    const fetchedTimeEntries = await getTimeEntries();
    if (fetchedTimeEntries instanceof NotFoundError) {
      console.log("not found");

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
        <TimeEntries timeEntries={timeEntries} />
      </LayoutContent>
      <Modal isActive={isModalActive} setIsModalActive={setIsModalActive}>
        <TimeEntryForm handleFormSubmit={handleFormSubmit} setIsModalActive={setIsModalActive} />
      </Modal>
    </>
  );
};

export default Homepage;
