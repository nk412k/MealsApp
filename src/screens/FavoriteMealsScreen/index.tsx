import { useContext } from 'react';

import {
  EmptyListContainer,
  EmptyListText,
  FavoriteMealList,
  ScreenContainer,
} from './styledComponents';
import { FavoriteContext } from '../../stores/context/favoriteContext';
import { MEALS } from '../../data/dummyData';
import Meal from '../../stores/models/meal';
import MealCard from '../../components/MealCard';

const FavoriteMealsScreen = (): React.ReactElement => {
  const favoriteMealCtx = useContext(FavoriteContext);

  const favoriteMealList = MEALS.filter((meal) =>
    favoriteMealCtx.favoriteMealIds.includes(meal.id)
  );

  const renderMealItem = ({ item }: { item: Meal }): React.ReactElement => {
    return <MealCard meal={item} />;
  };

  if (favoriteMealCtx.favoriteMealIds.length === 0) {
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
