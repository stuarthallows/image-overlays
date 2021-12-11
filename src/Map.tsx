import { FC } from 'react';
import styled from 'styled-components';
import graph from './images/graph-paper.jpg';
import { Marker } from './Marker';
import './App.css';

const Container = styled.div`
  background-color: #eee;
  color: white;
  display: flex;
  justify-content: center;
`;

export const Map: FC = () => { 
  return (
    <Container>
      <img src={graph} className="map-image" alt="the mine" />

      <Marker />
    </Container>
  )
};
 