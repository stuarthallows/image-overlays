import styled from 'styled-components';
import { Map } from './Map';

const Container = styled.div`
  height: 100%;
`;

export const App = () => {
  return (
    <Container>
      <Map />
    </Container>
  );
}
