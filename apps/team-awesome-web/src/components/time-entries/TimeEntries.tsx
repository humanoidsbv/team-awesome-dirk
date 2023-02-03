import * as Styled from "./TimeEntries.styled";
import { TimeEntry } from "../time-entry";
import { TimeEntryHeader } from "../time-entry-header";

export const TimeEntries = () => {
  return (
    <Styled.Main>
      <TimeEntryHeader />
      <TimeEntry />
    </Styled.Main>
  );
};