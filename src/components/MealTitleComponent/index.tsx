import { MealTitle, SubTitleContainer, SubTitleText } from './styledComponents';

interface Props {
  time: number;
  affordability: string;
  complexity: string;
  subTitleStyles?: React.CSSProperties;
  title: string;
  titleStyles?: React.CSSProperties;
}

const MealTitleComponent = (props: Props): React.ReactElement => {
  const {
    time,
    affordability,
    complexity,
    subTitleStyles,
    title,
    titleStyles,
  } = props;
  return (
    <>
      <MealTitle style={titleStyles}>{title}</MealTitle>
      <SubTitleContainer>
        <SubTitleText style={subTitleStyles}>{time}m</SubTitleText>
        <SubTitleText style={subTitleStyles}>
          {complexity.toUpperCase()}
        </SubTitleText>
        <SubTitleText style={subTitleStyles}>
          {affordability.toUpperCase()}
        </SubTitleText>
      </SubTitleContainer>
    </>
  );
};

export default MealTitleComponent;
