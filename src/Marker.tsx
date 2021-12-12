import styled from 'styled-components';

const Container = styled.span`
  border-radius: 99999px;
  border: 2px solid teal;
  position: absolute;
  font-size: x-large;
  top: 40%;
  left: 50%;
  padding: 0.25rem;
  transform: translate(-50%, -50%);
`;

export const Marker = () => {
  return (
    <Container>😺</Container>
  )
}
