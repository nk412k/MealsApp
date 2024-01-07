import MealCategoryCard from '../../components/MealCategoryCard';
import { CATEGORIES } from '../../data/dummyData';
import Category from '../../stores/models/category';
import { CategoriesList, ScreenContainer } from './styledComponents';

const MealsCategoryScreen = (): React.ReactElement => {
  const renderCategoryItem = ({
    item,
  }: {
    item: Category;
  }): React.ReactElement => {
    return <MealCategoryCard mealCategory={item} />;
  };

  return (
    <ScreenContainer>
      <CategoriesList
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
      />
    </ScreenContainer>
  );
};

export default MealsCategoryScreen;
