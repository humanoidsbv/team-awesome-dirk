import { useState, useContext, ChangeEvent } from "react";
import { StoreContext } from "../store-context";
import { TimeEntry } from "../time-entry";
import * as Types from "../../types";

interface TimeEntriesProps {
  handleDeleteEntry: (input: Types.TimeEntry) => void;
}

export const TimeEntries = ({ handleDeleteEntry }: TimeEntriesProps) => {
  const { timeEntries, setTimeEntries } = useContext(StoreContext);

  const sortOptions = ["ascending", "descending"];

  const handleSort = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const selectSortOrder = target.value;

    const sorted = [...timeEntries].sort((a, b) => {
      if (a.id < b.id) {
        return selectSortOrder === "ascending" ? -1 : 1;
      }
      if (a.id > b.id) {
        return selectSortOrder === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setSortOrder(sortOrder);
    setTimeEntries(sorted);
  };

  return (
    <>
      <label htmlFor="sort-time-entries">Sort time entries</label>
      <select onChange={handleSort} name="dropdown" id="sort-time-entries">
        <option value="">--Please choose an option--</option>
        <option value={sortOptions[0]}>Ascending</option>
        <option value={sortOptions[1]}>Descending</option>
      </select>
      {timeEntries.map((timeEntry) => (
        <TimeEntry key={timeEntry.id} handleDeleteEntry={handleDeleteEntry} timeEntry={timeEntry} />
      ))}
    </>
  );
};
