import { calculateDuration } from "../../services/calculateDuration";
import * as Styled from "./TimeEntry.styled";
import * as Types from "../../types";
import { convertTime } from "../../services/convertTime";

export interface TimeEntryProps {
  timeEntry: Types.TimeEntry;
  handleDeleteEntry: (input: Types.TimeEntry) => void;
}

export const TimeEntry = ({ timeEntry, handleDeleteEntry }: TimeEntryProps) => {
  const startTimeStamp = timeEntry.startTimestamp;
  const stopTimeStamp = timeEntry.stopTimestamp;
  const { client } = timeEntry;

  const startTime = convertTime(startTimeStamp);
  const stopTime = convertTime(stopTimeStamp);

  const amountHours = calculateDuration(startTimeStamp, stopTimeStamp);
  return (
    <Styled.Entry>
      <Styled.Title>{client}</Styled.Title>
      <Styled.TimeWrapper>
        <Styled.Time>
          {startTime} - {stopTime}
        </Styled.Time>
        <Styled.Amount>{amountHours}</Styled.Amount>
      </Styled.TimeWrapper>
      <Styled.DeleteButton onClick={() => handleDeleteEntry(timeEntry)}>
        <Styled.BinIcon />
      </Styled.DeleteButton>
    </Styled.Entry>
  );
};
