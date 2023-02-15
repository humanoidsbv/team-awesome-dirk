import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import * as Styled from "../time-entry-form/TimeEntryForm.styled";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TimeEntryInput = ({
  label,
  name,
  minLength,
  type,
  required,
  onChange,
}: InputProps) => {
  const [validity, setValidity] = useState<ValidityState | null>(null);

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    setValidity(event.target.validity);
  };

  return (
    <>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Input
        name={name}
        onChange={onChange}
        type={type}
        minLength={minLength}
        required={required}
        onBlur={handleBlur}
      />
      {validity?.tooShort ? <span>This input is too short</span> : null}
      {validity?.valueMissing ? <span>This value is missing</span> : null}
    </>
  );
};
