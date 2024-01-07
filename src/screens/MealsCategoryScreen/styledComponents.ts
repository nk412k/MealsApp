import { FlatListProps } from 'react-native';
import styled from 'styled-components/native';

import Category from '../../stores/models/category';

export const ScreenContainer = styled.View`
  flex: 1;
`;

export const CategoriesList = styled.FlatList<FlatListProps<Category>>``;
