import styled from 'styled-components';


export const Container = styled.div`
  position: relative;
  padding-top: 20px;
  `;

export const Tag = styled.div`
width: 170px;
height: 50px;
flex-shrink: 0;
border-radius: 16px;
background: #327AEB;
display: flex;
justify-content: space-evenly;
margin-left: 24px;
`;

export const Icon = styled.span`
width: 24px;
height: 24px;
flex-shrink: 0;
padding-top: 13px;
`
export const Location = styled.div`
color: #FFF;
font-size: 28px;
text-transform: uppercase;
font-family: SlowSlow, sans-serif, Arial;
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
width: 345px;
height: 40px;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
display: flex;
justify-content: space-around;
margin: 0 auto;
margin-top: 20px;
`;

export const Option = styled.button`
color: #327AEB;
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
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-template-rows: 1fr 1fr;
  // row-gap: 10;
  // column-gap: 10;
`;

export const Image = styled.img`
  // width: 100px;
  // height: 100px;
  // object-fit: contain;
  padding: 2px;

`;


