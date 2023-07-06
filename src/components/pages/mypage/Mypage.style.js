import styled from 'styled-components';

export const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  text-transform: uppercase;
  padding-top: 20px;
  padding-left: 24px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 510px;    
  align-content: center;
`;

export const Base = styled.img`
  flex: 0 0 150px;
  width: 180px;
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
  width: 180px;
`;

export const Long = styled.img`
  flex-basis: 200px;
  padding: 3px;
  margin: 3px;
  border-radius: 12px;
  // border: 1px solid #D9D9D9;
  width: 180px;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 20px;
    padding-left: 25px;
    `;

export const ProfileCircle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #D9D9D9;
    margin-right: 10px;
    margin-top: -20px;
    `;
export const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #D9D9D9;
    margin-right: 10px;
    `;

export const ProfileUsername = styled.div`
    font-family: Pretendard;
    font-size: 15px;    
    font-style: normal;
    font-weight: 600;

    line-height: 18px;
    letter-spacing: -0.3px;
    text-transform: uppercase;
    color: #000;
    `;
