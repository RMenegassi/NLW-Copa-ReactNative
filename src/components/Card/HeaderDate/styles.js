import styled from 'styled-components';

export const BlockView = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0px 0px 53px;
  justify-content: center;
  width: 100%;
`;

export const DateView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid #047c3f;
  border-radius: 6px;
`;

export const Date = styled.Text`
  color: #f7dd43;
  font-size: 20px;
  font-weight: 700;
`;

export const Day = styled.Text`
  color: #e1e1e6;
  font-size: 14px;
  margin-left: 16px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const ButtonLeft = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
`;

export const ButtonRight = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;
