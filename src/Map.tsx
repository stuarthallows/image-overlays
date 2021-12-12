import { FC } from 'react';
import styled from 'styled-components';
import graph from './images/graph-paper.jpg';
import { Marker } from './Marker';
import './App.css';

const Container = styled.div`
  background-color: #eee;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  
  img {
    object-fit: contain;
  }
`;

export const Map: FC = () => { 
  return (
    <Container>
      <img src={graph} className="map-image" alt="the mine" />
      <Marker />
    </Container>
  )
};
 