import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';


type Props = TouchableOpacityProps & {
  title: string;
  isCancel?: boolean
}

export function ButtonSecondary({ title, isCancel, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <View style={[styles.container, isCancel && styles.isCancel]}>
        <Text style={styles.title} >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
