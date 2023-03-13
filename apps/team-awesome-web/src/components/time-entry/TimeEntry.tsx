import { calculateDuration } from "../../services/calculateDuration";
import { convertTime } from "../../services/convertTime";

import * as Styled from "./TimeEntry.styled";
import * as Types from "../../types";

export interface TimeEntryProps {
  timeEntry: Types.TimeEntry;
  handleDeleteEntry: (input: string) => void;
  isFirst: boolean;
  isLast: boolean;
}

export const TimeEntry = ({ isFirst, isLast, timeEntry, handleDeleteEntry }: TimeEntryProps) => {
  const startTimeStamp = timeEntry.startTimestamp;
  const stopTimeStamp = timeEntry.stopTimestamp;
  const { client } = timeEntry;

  const startTime = convertTime(startTimeStamp);
  const stopTime = convertTime(stopTimeStamp);

  const amountHours = calculateDuration(startTimeStamp, stopTimeStamp);

  return (
    <Styled.Entry isFirst={isFirst} isLast={isLast}>
      <Styled.Title>{client}</Styled.Title>
      <Styled.TimeWrapper>
        <Styled.Time>
          {startTime} - {stopTime}
        </Styled.Time>
        <Styled.Amount>{amountHours}</Styled.Amount>
      </Styled.TimeWrapper>
      <Styled.DeleteButton onClick={() => handleDeleteEntry(timeEntry.id)}>
        <Styled.BinIcon />
      </Styled.DeleteButton>
    </Styled.Entry>
  );
};
