import { useLayoutEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import MealTitleComponent from '../../components/MealTitleComponent';
import { Colors } from '../../constants/Colors';
import { MEALS } from '../../data/dummyData';

import {
  Image,
  ImageContainer,
  MealsDetailsContainer,
  ScreenContainer,
} from './styledComponents';
import MealDetailList from '../../components/MealDetailsList';
import { State } from '../../stores/types';
import {
  addFavoriteMeal,
  removeFavoriteMeal,
} from '../../stores/redux/favorite';

type MealDetailScreenRouteProp = RouteProp<
  { params: { mealId: string } },
  'params'
>;

type MealDetailScreenNavigationProp = NativeStackNavigationProp<any>;

const MealsDetailsScreen = ({
  route,
  navigation,
}: {
  route: MealDetailScreenRouteProp;
  navigation: MealDetailScreenNavigationProp;
}): React.ReactElement => {
  const mealId = route.params.mealId;

  const favoriteMealIds = useSelector(
    (state: State) => state.favoriteMeals.favoriteMealIds
  );

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderHeaderIcon,
    });
  });

  const onFavoritePress = () => {
    if (favoriteMealIds.includes(mealId)) {
      dispatch(removeFavoriteMeal({ id: mealId }));
    } else {
      dispatch(addFavoriteMeal({ id: mealId }));
    }
  };

  const renderHeaderIcon = (): React.ReactElement => {
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    return (
      <Ionicons
        name={mealIsFavorite ? 'star' : 'star-outline'}
        size={24}
        color={Colors.white}
        onPress={onFavoritePress}
      />
    );
  };

  const mealDetails = MEALS.find((meal) => meal.id === mealId);

  if (!mealDetails) {
    return <></>;
  }

  return (
    <ScreenContainer>
      <ImageContainer>
        <Image source={{ uri: mealDetails.imageUrl }} />
      </ImageContainer>
      <MealTitleComponent
        title={mealDetails.title}
        time={mealDetails.duration}
        complexity={mealDetails.complexity}
        affordability={mealDetails.affordability}
        subTitleStyles={{
          color: '#a19e9e',
        }}
        titleStyles={{
          color: Colors.white,
        }}
      />
      <MealsDetailsContainer>
        <MealDetailList data={mealDetails.ingredients} title='Ingredients' />
        <MealDetailList data={mealDetails.steps} title='Steps' />
      </MealsDetailsContainer>
    </ScreenContainer>
  );
};

export default MealsDetailsScreen;
