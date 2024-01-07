import styled from 'styled-components/native';

import { Colors } from '../../constants/Colors';

export const SubTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
`;

export const SubTitleText = styled.Text<{ style?: React.CSSProperties }>`
  margin-right: 10px;
  color: ${Colors.lightBlack};
`;

export const MealTitle = styled.Text<{ style?: React.CSSProperties }>`
  margin-top: 12px;
  align-self: center;
  font-weight: 700;
  font-size: 20px;
`;
