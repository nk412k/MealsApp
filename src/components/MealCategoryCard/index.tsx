import { NavigationProp, useNavigation } from '@react-navigation/native';
import Category from '../../stores/models/category';
import {
  MealCategoryCardContainer,
  MealCategoryTitle,
} from './styledComponents';
import Card from '../Card';

interface Props {
  mealCategory: Category;
}

type RootStackParamList = {
  MealsList: { categoryId: string };
};

const MealCategoryCard = (props: Props): React.ReactNode => {
  const { mealCategory } = props;

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressCategoryCard = (): void => {
    navigation.navigate('MealsList', {
      categoryId: mealCategory.id,
    });
  };

  return (
    <Card onPressCategoryCard={onPressCategoryCard}>
      <MealCategoryCardContainer backgroundColor={mealCategory.color}>
        <MealCategoryTitle>{mealCategory.title}</MealCategoryTitle>
      </MealCategoryCardContainer>
    </Card>
  );
};

export default MealCategoryCard;
