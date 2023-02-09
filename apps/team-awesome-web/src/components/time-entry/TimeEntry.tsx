import { calculateDuration } from "../../services/calculateDuration";
import * as Styled from "./TimeEntry.styled";

export interface TimeEntryProps {
  client: string;
  startTimeStamp: string;
  stopTimeStamp: string;
}

export const convertTime = (timeStamp: string) =>
  new Date(timeStamp).toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

export const TimeEntry = ({ client, startTimeStamp, stopTimeStamp }: TimeEntryProps) => {
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
      <Styled.DeleteButton>
        <Styled.BinIcon />
      </Styled.DeleteButton>
    </Styled.Entry>
  );
};
