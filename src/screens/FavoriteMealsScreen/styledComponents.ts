import styled from 'styled-components/native';
import { FlatListProps } from 'react-native';
import Meal from '../../stores/models/meal';

export const ScreenContainer = styled.View`
  flex: 1;
`;

export const FavoriteMealList = styled.FlatList<FlatListProps<Meal>>``;

export const EmptyListText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

export const EmptyListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
