import { Text, SectionList } from "react-native";
import React from "react";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_TIME_ENTRIES } from "../../grahpql/time-entries/queries";

import { TimeEntry } from "../../components/time-entry";

import * as Styled from "./Timesheets.styled";
import { useStore } from "../../hooks/store";

export interface TimeEntryProps {
  handleDeleteEntry: (input: string) => void;
}

export const TimeSheets = ({ handleDeleteEntry }: TimeEntryProps) => {
  const { loading, data } = useQuery(GET_TIME_ENTRIES);
  const timeEntries = useStore((state) => state.timeEntries);
  const setTimeEntries = useStore((state) => state.setTimeEntries);

  useEffect(() => {
    setTimeEntries(data.allTimeEntries);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const structuredTimeEntries = [
    {
      title: "Today",
      data: timeEntries,
    },
  ];

  console.log("1", structuredTimeEntries);
  console.log("2", timeEntries);

  return (
    <Styled.Container>
      {!loading && (
        <SectionList
          sections={structuredTimeEntries}
          renderItem={({ item }) => {
            return (
              <TimeEntry isFirst handleDeleteEntry={handleDeleteEntry} isLast timeEntry={item} />
            );
          }}
          renderSectionHeader={({ section: { title } }) => <Text />}
        />
      )}
    </Styled.Container>
  );
};
