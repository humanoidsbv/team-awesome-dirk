import { useContext, useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { useMutation } from "@apollo/client";

import { ADD_TIME_ENTRY, REMOVE_TIME_ENTRY } from "../src/graphql/time-entries/mutations";
import { Button } from "../src/components/button";
import { client as apolloClient } from "../src/services/apollo-client/apollo-client";
import { GET_TIME_ENTRIES } from "../src/graphql/time-entries/queries";
import { Header } from "../src/components/header";
import { LayoutContent } from "../src/components/layout-content";
import { Modal } from "../src/components/modal";
import { PlusIcon } from "../src/components/button/Button.styled";
import { StoreContext } from "../src/components/store-context";
import { SubHeader } from "../src/components/sub-header";
import { TimeEntries } from "../src/components/time-entries";
import { TimeEntryForm } from "../src/components/Form/time-entry-form";
import * as Types from "../src/types";

interface HomepageProps {
  timeEntries: Types.TimeEntry[];
}

export const getServerSideProps = async () => {
  const { loading, error, data } = await apolloClient.query({
    query: GET_TIME_ENTRIES,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return {
    props: {
      timeEntries: data.allTimeEntries,
    },
  };
};

const Homepage = ({ timeEntries: initialTimeEntries }: HomepageProps) => {
  const { isModalActive, setIsModalActive } = useContext(StoreContext);
  const { timeEntries, setTimeEntries } = useContext(StoreContext);
  const [createTimeEntry] = useMutation(ADD_TIME_ENTRY);
  const [removeTimeEntry] = useMutation(REMOVE_TIME_ENTRY);

  useEffect(() => {
    setTimeEntries(initialTimeEntries);
  }, []);

  const handleFormSubmit = async ({
    activity,
    client,
    startTimestamp,
    stopTimestamp,
  }: Types.TimeEntry) => {
    const result = await createTimeEntry({
      variables: {
        activity,
        client,
        startTimestamp,
        stopTimestamp,
      },
    });

    setTimeEntries([...timeEntries, result.data.createTimeEntry]);
    setIsModalActive(false);
  };

  const handleDeleteEntry = async (id: string) => {
    await removeTimeEntry({ variables: { id } });
    const afterDelete = timeEntries.filter((entry) => entry.id !== id);
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
        <TimeEntries handleDeleteEntry={handleDeleteEntry} />
      </LayoutContent>
      <Modal isActive={isModalActive} setIsModalActive={setIsModalActive}>
        <TimeEntryForm handleFormSubmit={handleFormSubmit} setIsModalActive={setIsModalActive} />
      </Modal>
    </>
  );
};

export default Homepage;
