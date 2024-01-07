import { PropsWithChildren, createContext, useState } from 'react';

interface Props extends PropsWithChildren {}

type FavoriteContextType = {
  favoriteMealIds: string[];
  addFavoriteMeal: (mealId: string) => void;
  removeFavoriteMeal: (mealId: string) => void;
};

export const FavoriteContext = createContext<FavoriteContextType>({
  favoriteMealIds: [],
  addFavoriteMeal: () => {},
  removeFavoriteMeal: () => {},
});

const FavoriteContextProvider = (props: Props): React.ReactElement => {
  const { children } = props;

  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const addFavoriteMeal = (mealId: string) => {
    setFavoriteMealIds((prevMealId) => [...prevMealId, mealId]);
  };

  const removeFavoriteMeal = (mealId: string) => {
    setFavoriteMealIds((prevMealId) =>
      prevMealId.filter((id) => id !== mealId)
    );
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoriteMealIds,
        addFavoriteMeal,
        removeFavoriteMeal,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
