import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  color: black;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 10;
  column-gap: 10;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;
