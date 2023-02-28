import { useContext, ChangeEvent, useEffect, useState, ChangeEventHandler } from "react";
import { StoreContext } from "../store-context";
import { TimeEntry } from "../time-entry";
import * as Types from "../../types";

interface TimeEntriesProps {
  handleDeleteEntry: (input: Types.TimeEntry) => void;
}

export const TimeEntries = ({ handleDeleteEntry }: TimeEntriesProps) => {
  const { timeEntries } = useContext(StoreContext);

  const [sortOption, setSortOption] = useState<string>("client");
  const [sortedTimeEntries, setSortedTimeEntries] = useState<Types.TimeEntry[]>([]);

  const handleSort = (entries: Types.TimeEntry[], option: string) => {
    const sortEntries = entries.sort((a: any, b: any) => a[option].localeCompare(b[option]));
    setSortedTimeEntries(sortEntries);
  };

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = target.value;
    setSortOption(selectedSort);
    handleSort(timeEntries, selectedSort);
  };

  useEffect(() => {
    handleSort(timeEntries, sortOption);
  }, [timeEntries]);

  return (
    <>
      <label htmlFor="sort-time-entries">Sort time entries</label>
      <select
        value={sortOption}
        onChange={handleChange}
        name="sort-time-entries"
        id="sort-time-entries"
      >
        <option value="">--Please choose an option--</option>
        <option value="client">Client</option>
        <option value="startTimestamp">Start time</option>
      </select>
      {sortedTimeEntries?.map((timeEntry) => (
        <TimeEntry key={timeEntry.id} handleDeleteEntry={handleDeleteEntry} timeEntry={timeEntry} />
      ))}
    </>
  );
};
