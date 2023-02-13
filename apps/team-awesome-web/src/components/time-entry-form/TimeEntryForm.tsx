import { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";
import * as Styled from "./TimeEntryForm.styled";
import { Button } from "../button";
import * as Types from "../../types";
import { calculateDuration } from "../../services/calculateDuration";
import { TimeEntry } from "../../types";

export const defaultEntry = {
  id: 0,
  client: "",
  startTimestamp: "",
  stopTimestamp: "",
};

export interface TimeEntryProps {
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
  handleFormSubmit: (input: TimeEntry) => void;
}

const convertToIsoString = (date: string, time: string) =>
  new Date(`${date}:${time}`).toISOString();

export const TimeEntryForm = ({ handleFormSubmit, setIsModalActive }: TimeEntryProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntry>(defaultEntry);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const allValuesPresent = !!newTimeEntry.date && !!newTimeEntry.from && newTimeEntry.to;

  const startTimeStamp = allValuesPresent
    ? convertToIsoString(newTimeEntry.date, newTimeEntry.from)
    : "";
  const stopTimeStamp = allValuesPresent
    ? convertToIsoString(newTimeEntry.date, newTimeEntry.to)
    : "";

  const totalTime = calculateDuration(startTimeStamp, stopTimeStamp);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleFormSubmit({
      id: newTimeEntry.key,
      client: newTimeEntry.client,
      startTimestamp: startTimeStamp,
      stopTimestamp: stopTimeStamp,
    });
    setNewTimeEntry({});
  };

  return (
    <Styled.Container>
      <Styled.Title>New time entry</Styled.Title>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.WrapperClient>
          <Styled.Label htmlFor="client">Client</Styled.Label>
          <Styled.Input
            name="client"
            type="text"
            value={newTimeEntry.client ?? ""}
            onChange={handleChange}
          ></Styled.Input>
        </Styled.WrapperClient>
        <Styled.WrapperActivity>
          <Styled.Label htmlFor="activity">Activity</Styled.Label>
          <Styled.Input
            name="activity"
            type="text"
            value={newTimeEntry.activity ?? ""}
            onChange={handleChange}
          ></Styled.Input>
        </Styled.WrapperActivity>
        <Styled.WrapperDate>
          <Styled.Label htmlFor="date">Date</Styled.Label>
          <Styled.Input
            name="date"
            type="date"
            value={newTimeEntry.date ?? ""}
            onChange={handleChange}
          ></Styled.Input>
        </Styled.WrapperDate>
        <Styled.WrapperFrom>
          <Styled.Label htmlFor="from">From</Styled.Label>
          <Styled.Input
            name="from"
            type="time"
            value={newTimeEntry.from ?? ""}
            onChange={handleChange}
          ></Styled.Input>
        </Styled.WrapperFrom>
        <Styled.WrapperTo>
          <Styled.Label htmlFor="to">To</Styled.Label>
          <Styled.Input
            name="to"
            type="time"
            value={newTimeEntry.to ?? ""}
            onChange={handleChange}
          ></Styled.Input>
        </Styled.WrapperTo>
        <Styled.WrapperTotal>
          <Styled.Label>Total</Styled.Label>
          <Styled.Total>{totalTime}</Styled.Total>
        </Styled.WrapperTotal>
        <Styled.ButtonsContainer>
          <Button onClick={() => setIsModalActive(false)} variant="secondary">
            Cancel
          </Button>
          <Button type="submit">Add time entry</Button>
        </Styled.ButtonsContainer>
      </Styled.Form>
    </Styled.Container>
  );
};
