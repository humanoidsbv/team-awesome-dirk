/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, ChangeEvent, useEffect, useState } from "react";

import { Select } from "../select";
import { SortOption } from "../../types/sortOption";
import { StoreContext } from "../store-context";
import { TimeEntry } from "../time-entry";
import * as Styled from "./TimeEntries.Styled";
import * as Types from "../../types";

interface TimeEntriesProps {
  handleDeleteEntry: (input: string) => void;
}

export const TimeEntries = ({ handleDeleteEntry }: TimeEntriesProps) => {
  const { timeEntries } = useContext(StoreContext);
  const [sortOption, setSortOption] = useState<SortOption>("client");
  const [filterOption, setFilterOption] = useState("Show all clients");

  const [sortedTimeEntries, setSortedTimeEntries] = useState<Types.TimeEntry[]>([]);
  const filterOptions = new Set([...timeEntries.map((client) => client.client)].sort());

  const handleSortandFilter = (sort: SortOption, filter: string) => {
    const filteredEntries =
      filter === "Show all clients"
        ? [...timeEntries]
        : timeEntries.filter((entry) => entry.client === filter);

    const sortedEntries = filteredEntries.sort((a: Types.TimeEntry, b: Types.TimeEntry) =>
      a[sort].localeCompare(b[sort]),
    );
    setSortedTimeEntries(sortedEntries);
  };

  const handleChangeSort = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const selectedSort: SortOption = target.value as SortOption;
    setSortOption(selectedSort);
    handleSortandFilter(selectedSort, filterOption);
  };

  const handleChangeFilter = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = target.value;
    setFilterOption(selectedFilter);
    handleSortandFilter(sortOption, selectedFilter);
  };

  useEffect(() => {
    handleSortandFilter(sortOption, filterOption);
  }, [timeEntries]);

  return (
    <>
      <Styled.Container>
        <Select
          value={sortOption}
          onChange={handleChangeSort}
          name="sort-time-entries"
          id="sort-time-entries"
        >
          <option value="client">Client</option>
          <option value="startTimestamp">Start time</option>
        </Select>

        <Select name="filter-time-entries" id="clients" onChange={handleChangeFilter}>
          <option value="Show all clients">Show all clients</option>
          {[...filterOptions].map((filterSelection) => (
            <option key={filterSelection} value={filterSelection}>
              {filterSelection}
            </option>
          ))}
        </Select>
      </Styled.Container>
      {sortedTimeEntries.map((timeEntry) => (
        <TimeEntry key={timeEntry.id} handleDeleteEntry={handleDeleteEntry} timeEntry={timeEntry} />
      ))}
    </>
  );
};
