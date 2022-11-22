import styled from 'styled-components';

export const View = styled.View``;

export const ListMatches = styled.FlatList`
  flex-grow: 0;
`;

export const PartidaView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  border-top: 1px solid #323238;
  margin-bottom: 24px;
`;

export const Text = styled.Text`
  color: #e1e1e6;
  font-size: 20px;
  font-weight: 900;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Gols = styled.TextInput`
  background-color: #242c26;
  width: 30px;
  height: 45px;
  border-radius: 8px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;
