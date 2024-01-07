import { FlatListProps } from 'react-native';
import styled from 'styled-components/native';

import Meal from '../../stores/models/meal';

export const ScreenContainer = styled.View`
  flex: 1;
`;

export const MealsListContainer = styled.FlatList<FlatListProps<Meal>>``;
