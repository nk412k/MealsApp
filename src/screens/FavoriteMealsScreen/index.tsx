import { useSelector } from 'react-redux';

import {
  EmptyListContainer,
  EmptyListText,
  FavoriteMealList,
  ScreenContainer,
} from './styledComponents';
import { MEALS } from '../../data/dummyData';
import Meal from '../../stores/models/meal';
import MealCard from '../../components/MealCard';
import { State } from '../../stores/types';

const FavoriteMealsScreen = (): React.ReactElement => {
  const favoriteMealIds = useSelector(
    (state: State) => state.favoriteMeals.favoriteMealIds
  );

  const favoriteMealList = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  const renderMealItem = ({ item }: { item: Meal }): React.ReactElement => {
    return <MealCard meal={item} />;
  };

  if (favoriteMealIds.length === 0) {
    return (
      <EmptyListContainer>
        <EmptyListText>
          No favorite meals found. Start adding some!
        </EmptyListText>
      </EmptyListContainer>
    );
  }

  return (
    <ScreenContainer>
      <FavoriteMealList
        data={favoriteMealList}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </ScreenContainer>
  );
};

export default FavoriteMealsScreen;
