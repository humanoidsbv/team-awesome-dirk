import { TimeEntry } from "../time-entry";
import * as Types from "../../types";
import React from "react";

export const TimeEntries = ({ timeEntries }) => {
  return (
    <>
      {timeEntries.map((timeEntry: Types.TimeEntry) => (
        <TimeEntry
          key={timeEntry.id}
          client={timeEntry.client}
          startTimeStamp={timeEntry.startTimestamp}
          stopTimeStamp={timeEntry.stopTimestamp}
        />
      ))}
    </>
  );
};
