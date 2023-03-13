/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, ChangeEvent, useEffect, useState } from "react";

import { convertTimeToDay } from "../../services/convertTime";
import { Select } from "../select";
import { SortOption } from "../../types/sortOption";
import { StoreContext } from "../store-context";
import { TimeEntry } from "../time-entry";
import { TimeEntryHeader } from "../time-entry-header";

import * as Styled from "./TimeEntries.Styled";
import * as Types from "../../types";

interface TimeEntriesProps {
  handleDeleteEntry: (input: string) => void;
}

export const TimeEntries = ({ handleDeleteEntry }: TimeEntriesProps) => {
  const { timeEntries } = useContext(StoreContext);
  const [sortOption, setSortOption] = useState<SortOption>("startTimestamp");
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
      {sortedTimeEntries.map((timeEntry, i) => {
        const date = convertTimeToDay(timeEntry.startTimestamp);
        const previousDate = convertTimeToDay(sortedTimeEntries[i - 1]?.startTimestamp);
        const nextDate = convertTimeToDay(sortedTimeEntries[i + 1]?.startTimestamp);

        const showHeader = i === 0 || date !== previousDate;
        const isFirstStyling = date !== previousDate;
        const isLastStyling = date !== nextDate;

        return (
          <>
            {showHeader && <TimeEntryHeader timeEntry={timeEntry} />}
            <TimeEntry
              isFirst={isFirstStyling}
              isLast={isLastStyling}
              key={timeEntry.id}
              handleDeleteEntry={handleDeleteEntry}
              timeEntry={timeEntry}
            />
          </>
        );
      })}
    </>
  );
};
// If index of sortedTimeEntries is 0 then the TimeEntryHeader should rende above index [0]
// Convert startTimeStap to day
// If a time entry has a different day then the time entry before, then the timeEntryHeader should render above the index of the time entry with a different day
