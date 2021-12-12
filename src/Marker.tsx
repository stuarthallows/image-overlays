import styled from 'styled-components';

type Coordinates = {
  x: number;
  y: number;
};

const Container = styled.span`
  border-radius: 99999px;
  border: 2px solid teal;
  position: absolute;
  font-size: x-large;
  top: 60%; 
  /* props => props.coordinates.y; */
  left: 40%;
  padding: 0.25rem;
  transform: translate(-50%, -50%);
`;

export const Marker = () => {
  const coordinates: Coordinates = {
    x: 0.5,
    y: 0.4
  };

  return (
    <Container>😺</Container>
  )
}
