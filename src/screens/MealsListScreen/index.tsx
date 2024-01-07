import { useLayoutEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Meal from '../../stores/models/meal';
import { CATEGORIES, MEALS } from '../../data/dummyData';

import { MealsListContainer, ScreenContainer } from './styledComponents';
import MealCard from '../../components/MealCard';

type MealsListScreenRouteProp = RouteProp<
  { params: { categoryId: string } },
  'params'
>;
type MealsListScreenNavigationProp = NativeStackNavigationProp<any>;

const MealsListScreen = ({
  route,
  navigation,
}: {
  route: MealsListScreenRouteProp;
  navigation: MealsListScreenNavigationProp;
}): React.ReactElement => {
  const categoryId = route.params?.categoryId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === categoryId)?.title,
    });
  });

  const mealsList = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  const renderMealListItem = ({ item }: { item: Meal }): React.ReactElement => {
    return <MealCard meal={item} />;
  };

  return (
    <ScreenContainer>
      <MealsListContainer
        data={mealsList}
        keyExtractor={(item) => item.id}
        renderItem={renderMealListItem}
      />
    </ScreenContainer>
  );
};

export default MealsListScreen;
