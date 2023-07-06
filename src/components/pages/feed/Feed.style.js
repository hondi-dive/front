import styled from 'styled-components';
import 'apis/fonts/font.css';

export const Container = styled.div`
  position: relative;
  padding-top: 80px;
`;

export const Tag = styled.div`
  width: 170px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #327aeb;
  display: flex;
  justify-content: space-evenly;
  padding-right: 10px;
  margin-left: 24px;
`;

export const Icon = styled.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  padding-top: 13px;
`;
export const Location = styled.div`
  color: #fff;
  font-size: 28px;
  text-transform: uppercase;
  font-family: SlowSlow;
  text-align: center;
  line-height: 50px;
`;

export const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  text-transform: uppercase;
  padding-top: 15px;
  padding-left: 24px;
`;

export const OptionContainer = styled.div`
  width: 100%;

  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;

  align-items: center;
  margin-top: 20px;
`;

export const Option = styled.button`
  color: #327aeb;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  border: none;
  background: none;
  cursor: pointer;
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 10px;
  column-gap: 10px;
  padding: 24px 24px 0 24px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  cursor: pointer;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 510px;
  align-content: center;
  padding: 10px;
`;

export const Base = styled.img`
  flex: 0 0 150px;
  width: 150px;
  color: #fff;
  padding: 3px;
  margin: 3px;
  border-radius: 12px;
  // border: 1px solid #D9D9D9;
`;

export const Short = styled.img`
  flex-basis: 100px;
  padding: 3px;
  margin: 3px;
  border-radius: 12px;
  // border: 1px solid #D9D9D9;
  width: 150px;
`;

export const Long = styled.img`
  flex-basis: 200px;
  padding: 3px;
  margin: 3px;
  border-radius: 12px;
  // border: 1px solid #D9D9D9;
  width: 150px;
`;
