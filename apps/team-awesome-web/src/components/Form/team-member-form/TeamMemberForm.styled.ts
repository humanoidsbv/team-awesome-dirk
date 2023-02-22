import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  padding: 30px;
  gap: 40px;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (${({ theme }) => theme.tablet}) {
    height: unset;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colorAccent};
  font-size: ${({ theme }) => theme.fontSizeLarge};
`;

export const Form = styled.form`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "firstname lastname"
    "email email"
    "label label"
    "currentclient currentclient"
    "buttons buttons";
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin: 0 auto;
`;

export const WrapperFirstName = styled.div`
  display: grid;
  row-gap: 10px;
  grid-area: firstname;
`;
export const WrapperLastName = styled.div`
  display: grid;
  row-gap: 10px;
  grid-area: lastname;
`;
export const WrapperEmailAddress = styled.div`
  display: grid;
  row-gap: 10px;
  grid-area: email;
`;
export const WrapperLabel = styled.div`
  display: grid;
  row-gap: 10px;
  grid-area: label;
`;
export const WrapperCurrentClient = styled.div`
  display: grid;
  row-gap: 10px;
  grid-area: currentclient;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-area: buttons;
  justify-content: center;
  gap: 30px;
`;
