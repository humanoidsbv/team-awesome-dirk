import { TimeEntry } from "../time-entry";
import * as Types from "../../types";

interface TimeEntriesProps {
  timeEntries: Types.TimeEntry[];
  handleDeleteEntry: (input: Types.TimeEntry) => void;
}

export const TimeEntries = ({ timeEntries, handleDeleteEntry }: TimeEntriesProps) => {
  console.log("1", timeEntries);
  return (
    <>
      {timeEntries.map((timeEntry) => (
        <TimeEntry key={timeEntry.id} handleDeleteEntry={handleDeleteEntry} timeEntry={timeEntry} />
      ))}
    </>
  );
};
