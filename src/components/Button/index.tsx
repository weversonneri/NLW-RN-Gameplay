import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';


type Props = RectButtonProps & {
  title: string;
  isCancel?: boolean
}

export function Button({ title, isCancel, ...rest }: Props) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <View style={[styles.container, isCancel && styles.isCancel]}>
        <Text style={styles.title} >
          {title}
        </Text>
      </View>
    </RectButton>
  );
}
