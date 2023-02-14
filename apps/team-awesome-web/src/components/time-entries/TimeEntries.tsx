import { TimeEntry } from "../time-entry";
import * as Types from "../../types";
import React from "react";

interface TimeEntriesProps {
  timeEntries: Types.TimeEntry[];
}

async function getTimeEntries(): Promise<Types.TimeEntry[]> {
  const response = await fetch("http://localhost:3004/time-entries", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export const TimeEntries = ({ timeEntries }: TimeEntriesProps) => {
  return (
    <>
      {timeEntries.map((timeEntry) => (
        <>
          <TimeEntry
            key={timeEntry.id}
            client={timeEntry.client}
            startTimeStamp={timeEntry.startTimestamp}
            stopTimeStamp={timeEntry.stopTimestamp}
          />
        </>
      ))}
    </>
  );
};
