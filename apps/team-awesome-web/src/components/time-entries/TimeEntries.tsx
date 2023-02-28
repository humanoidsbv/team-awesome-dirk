import { useContext, ChangeEvent, useEffect, useState } from "react";
import { StoreContext } from "../store-context";
import { TimeEntry } from "../time-entry";
import * as Types from "../../types";

interface TimeEntriesProps {
  handleDeleteEntry: (input: Types.TimeEntry) => void;
}

type SortOption = "client" | "startTimestamp";

export const TimeEntries = ({ handleDeleteEntry }: TimeEntriesProps) => {
  const { timeEntries } = useContext(StoreContext);

  const [sortOption, setSortOption] = useState<SortOption>("client");
  const [sortedTimeEntries, setSortedTimeEntries] = useState<Types.TimeEntry[]>([]);

  const handleSort = (entries: Types.TimeEntry[], option: SortOption) => {
    const sortEntries = entries.sort((a: Types.TimeEntry, b: Types.TimeEntry) =>
      a[option].localeCompare(b[option]),
    );
    setSortedTimeEntries(sortEntries);
  };

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const selectedSort: SortOption = target.value as SortOption;
    setSortOption(selectedSort);
    handleSort(timeEntries, selectedSort);
  };

  useEffect(() => {
    handleSort(timeEntries, sortOption);
  }, [timeEntries]);

  return (
    <>
      <label htmlFor="sort-time-entries">
        Sort time entries
        <select
          value={sortOption}
          onChange={handleChange}
          name="sort-time-entries"
          id="sort-time-entries"
        >
          {/* <option value="">--Please choose an option--</option> */}
          <option value="client">Client</option>
          <option value="startTimestamp">Start time</option>
        </select>
      </label>
      {sortedTimeEntries?.map((timeEntry) => (
        <TimeEntry key={timeEntry.id} handleDeleteEntry={handleDeleteEntry} timeEntry={timeEntry} />
      ))}
    </>
  );
};
