import {
  MealDetailItem,
  MealDetailListContainer,
  MealDetailText,
  MealDetailTitle,
  MealDetailTitleContainer,
} from './styledComponents';

interface Props {
  data: string[];
  title: string;
}

const MealDetailList = (props: Props): React.ReactElement => {
  const { data, title } = props;

  const renderItem = () => {
    return data.map((item) => (
      <MealDetailItem>
        <MealDetailText>{item}</MealDetailText>
      </MealDetailItem>
    ));
  };

  return (
    <MealDetailListContainer>
      <MealDetailTitleContainer>
        <MealDetailTitle>{title}</MealDetailTitle>
      </MealDetailTitleContainer>
      {renderItem()}
    </MealDetailListContainer>
  );
};

export default MealDetailList;
