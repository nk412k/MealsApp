import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

export const MealDetailListContainer = styled.View`
  width: 100%;
  justify-content: center;
`;

export const MealDetailTitleContainer = styled.View`
  width: 100%;
  padding: 10px;
  border-bottom-color: ${Colors.activeTab};
  border-bottom-width: 2px;
  justify-content: center;
  margin-bottom: 6px;
`;

export const MealDetailTitle = styled.Text`
  color: ${Colors.activeTab};
  text-align: center;
  font-weight: 800;
  font-size: 18px;
`;

export const MealDetailItem = styled.View`
  background-color: ${Colors.activeTab};
  padding: 8px;
  width: 100%;
  margin: 6px 0px;
  border-radius: 8px;
`;

export const MealDetailText = styled.Text`
  color: ${Colors.secondary};
  text-align: center;
`;
