import styled from 'styled-components/native';

type CategoryCardProps = {
  backgroundColor: string;
};

export const MealCategoryCardContainer = styled.View<CategoryCardProps>`
  background-color: ${(props) => props.backgroundColor};
  padding: 24px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const MealCategoryTitle = styled.Text`
  font-weight: 700;
  font-size: 18px;
`;
