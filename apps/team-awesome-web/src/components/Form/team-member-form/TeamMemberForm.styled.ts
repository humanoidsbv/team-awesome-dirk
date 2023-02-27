import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: grid;
  gap: 40px;
  height: 100vh;
  justify-content: center;
  padding: 30px;

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
  grid-template-areas:
    "firstname lastname"
    "email email"
    "label label"
    "currentclient currentclient"
    "buttons buttons";
  grid-template-columns: 1fr 1fr;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 100px;
  margin: 0 auto;
  width: 100px;
`;

export const WrapperFirstName = styled.div`
  display: grid;
  grid-area: firstname;
  row-gap: 10px;
`;
export const WrapperLastName = styled.div`
  display: grid;
  grid-area: lastname;
  row-gap: 10px;
`;
export const WrapperEmailAddress = styled.div`
  display: grid;
  grid-area: email;
  row-gap: 10px;
`;
export const WrapperLabel = styled.div`
  display: grid;
  grid-area: label;
  row-gap: 10px;
`;
export const WrapperCurrentClient = styled.div`
  display: grid;
  grid-area: currentclient;
  row-gap: 10px;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-area: buttons;
  grid-auto-flow: column;
  justify-content: center;
`;
