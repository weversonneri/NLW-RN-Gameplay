import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image
} from 'react-native';
import { styles } from './styles';

import DiscordIcon from '../../assets/discord.png';

type Props = TouchableOpacityProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordIcon} style={styles.icon} />
      </View>
      <Text style={styles.title} >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
