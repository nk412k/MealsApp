import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const PressableContainer = styled.Pressable`
  flex: 1;
`;

export const OuterContainer = styled.View<{ style?: React.CSSProperties }>`
  flex: 1;
  margin: 16px;
  border-radius: 8px;
  overflow: hidden;
  height: 150px;
  elavation: 4px;
  background-color: 'white';
  shadow-color: 'black';
  shadow-opacity: 0.25;
  shadow-offset: 0 4px;
  shadow-radius: 8px;
  overflow: ${Platform.OS === 'android' ? 'hidden' : 'visible'};
`;
