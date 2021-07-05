import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {
  const { secondary100, secondary80 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary80]}
    >
      {children}
    </LinearGradient>
  );
}
