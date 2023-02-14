import { TimeEntry } from "../time-entry";
import * as Types from "../../types";
import React from "react";

interface TimeEntriesProps {
  timeEntries: Types.TimeEntry[];
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
