import { NavigationProp, useNavigation } from '@react-navigation/native';

import Card from '../Card';
import Meal from '../../stores/models/meal';
import MealTitleComponent from '../MealTitleComponent';

import {
  MealContainer,
  MealImage,
  MealImageContainer,
} from './styledComponents';

interface Props {
  meal: Meal;
}

type RootStackParamList = {
  MealDetails: { mealId: string };
};

const MealCard = (props: Props): React.ReactElement => {
  const { meal } = props;

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressCategoryCard = (): void => {
    navigation.navigate('MealDetails', {
      mealId: meal.id,
    });
  };

  return (
    <Card
      onPressCategoryCard={onPressCategoryCard}
      containerCSS={{
        height: 300,
        marginTop: 32,
        marginBottom: 0,
        marginLeft: 32,
        marginRight: 32,
      }}
    >
      <MealContainer>
        <MealImageContainer>
          <MealImage source={{ uri: meal.imageUrl }} />
        </MealImageContainer>
        <MealTitleComponent
          time={meal.duration}
          affordability={meal.affordability}
          complexity={meal.complexity}
          title={meal.title}
        />
      </MealContainer>
    </Card>
  );
};

export default MealCard;
