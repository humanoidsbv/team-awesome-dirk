import { ChangeEvent, SyntheticEvent, useContext, useRef, useState } from "react";
import * as Types from "../../../types";
import { Button } from "../../button";
import { Input } from "../input/Input";
import * as Styled from "./TeamMemberForm.styled";
import { StoreContext } from "../../store-context";

export const defaultMember = {
  id: "0",
  firstName: "",
  lastName: "",
  emailAddress: "",
  label: "",
  currentClient: "",
};

export interface TeamMemberFormProps {
  handleFormSubmit: (input: Types.TeamMember) => void;
}

export const TeamMemberForm = ({ handleFormSubmit }: TeamMemberFormProps) => {
  const [newMemberEntry, setNewMemberEntry] = useState<Types.TeamMember>(defaultMember);
  const { setIsModalActive } = useContext(StoreContext);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNewMemberEntry({ ...newMemberEntry, [target.name]: target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    handleFormSubmit({
      id: newMemberEntry.id,
      firstName: newMemberEntry.firstName,
      lastName: newMemberEntry.lastName,
      emailAddress: newMemberEntry.emailAddress,
      label: newMemberEntry.label,
      currentClient: newMemberEntry.currentClient,
    });
    setNewMemberEntry(defaultMember);
  };

  const formIsValid = formRef?.current?.checkValidity();
  return (
    <Styled.Container>
      <Styled.Title>New Humanoid</Styled.Title>
      <Styled.ProfilePicture src="img/niels.png" alt="profile picture" />
      <Styled.Form ref={formRef} onSubmit={handleSubmit}>
        <Styled.WrapperFirstName>
          <Input label="First name" name="firstName" onChange={handleChange} type="text" required />
        </Styled.WrapperFirstName>
        <Styled.WrapperLastName>
          <Input label="Last name" name="lastName" onChange={handleChange} type="text" required />
        </Styled.WrapperLastName>
        <Styled.WrapperEmailAddress>
          <Input label="E-mail address" name="emailAddress" onChange={handleChange} type="text" />
        </Styled.WrapperEmailAddress>
        <Styled.WrapperLabel>
          <Input label="Label" name="label" onChange={handleChange} type="text" />
        </Styled.WrapperLabel>
        <Styled.WrapperCurrentClient>
          <Input
            label="Current client"
            name="currentClient"
            onChange={handleChange}
            type="text"
            required
          />
        </Styled.WrapperCurrentClient>
        <Styled.ButtonsContainer>
          <Button onClick={() => setIsModalActive(false)} variant="secondary">
            Cancel
          </Button>
          <Button disabled={!formIsValid} type="submit">
            Add Humanoid
          </Button>
        </Styled.ButtonsContainer>
      </Styled.Form>
    </Styled.Container>
  );
};
