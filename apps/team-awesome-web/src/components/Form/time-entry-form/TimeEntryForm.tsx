import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";

import { Button } from "../../button";
import { calculateDuration } from "../../../services/calculateDuration";
import { Input } from "../input/Input";
import { TimeEntry } from "../../../types";
import * as Styled from "./TimeEntryForm.styled";
import * as Types from "../../../types";

export const defaultEntry = {
  id: "0",
  activity: "",
  client: "",
  startTimestamp: "",
  stopTimestamp: "",
};

export interface TimeEntryFormProps {
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
  handleFormSubmit: (input: TimeEntry) => void;
}

const convertToIsoString = (date?: string, time?: string) => {
  if (date && time) {
    return new Date(`${date}:${time}`).toISOString();
  }
  return "";
};

export const TimeEntryForm = ({ handleFormSubmit, setIsModalActive }: TimeEntryFormProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntry>(defaultEntry);

  const formRef = useRef<HTMLFormElement>(null);

  const formIsValid = formRef?.current?.checkValidity();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const startTimeStamp = convertToIsoString(newTimeEntry.date, newTimeEntry.from);
  const stopTimeStamp = convertToIsoString(newTimeEntry.date, newTimeEntry.to);
  const totalTime = calculateDuration(startTimeStamp, stopTimeStamp);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    handleFormSubmit({
      id: newTimeEntry.id,
      activity: newTimeEntry.activity,
      client: newTimeEntry.client,
      startTimestamp: startTimeStamp,
      stopTimestamp: stopTimeStamp,
    });
    setNewTimeEntry(defaultEntry);
  };

  return (
    <Styled.Container>
      <Styled.Title>New time entry</Styled.Title>
      <Styled.Form ref={formRef} onSubmit={handleSubmit}>
        <Styled.WrapperClient>
          <Input
            minLength={5}
            label="Client"
            name="client"
            onChange={handleChange}
            required
            type="text"
          />
        </Styled.WrapperClient>
        <Styled.WrapperActivity>
          <Input label="Activity" name="activity" onChange={handleChange} required type="text" />
        </Styled.WrapperActivity>
        <Styled.WrapperDate>
          <Input label="Date" name="date" onChange={handleChange} required type="date" />
        </Styled.WrapperDate>
        <Styled.WrapperFrom>
          <Input label="From" name="from" onChange={handleChange} required type="time" />
        </Styled.WrapperFrom>
        <Styled.WrapperTo>
          <Input label="To" name="to" onChange={handleChange} required type="time" />
        </Styled.WrapperTo>
        <Styled.WrapperTotal>
          <Styled.Label>Total</Styled.Label>
          <Styled.Total>{totalTime}</Styled.Total>
        </Styled.WrapperTotal>
        <Styled.ButtonsContainer>
          <Button onClick={() => setIsModalActive(false)} variant="secondary">
            Cancel
          </Button>
          <Button disabled={!formIsValid} type="submit">
            Add time entry
          </Button>
        </Styled.ButtonsContainer>
      </Styled.Form>
    </Styled.Container>
  );
};
