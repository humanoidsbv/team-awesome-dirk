import * as Styled from "./TimeEntryHeader.styled";

import { convertTimeToDay } from "../../services/convertTime";
import * as Types from "../../types";

interface TimeEntryHeaderProps {
  timeEntry: Types.TimeEntry;
}

export const TimeEntryHeader = ({ timeEntry }: TimeEntryHeaderProps) => {
  const day = convertTimeToDay(timeEntry.startTimestamp);
  const headerDay = day.charAt(0).toUpperCase() + day.slice(1);

  return (
    <Styled.Header>
      <p>{headerDay}</p>
      <Styled.Amount>08:00</Styled.Amount>
    </Styled.Header>
  );
};
