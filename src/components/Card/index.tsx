import React, { PropsWithChildren } from 'react';
import { OuterContainer, PressableContainer } from './styledComponents';

interface Props extends PropsWithChildren {
  onPressCategoryCard: () => void;
  containerCSS?: React.CSSProperties;
}

const Card = (props: Props): React.ReactElement => {
  const { onPressCategoryCard, children, containerCSS } = props;

  return (
    <OuterContainer style={containerCSS}>
      <PressableContainer
        onPress={onPressCategoryCard}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        {children}
      </PressableContainer>
    </OuterContainer>
  );
};

export default Card;
