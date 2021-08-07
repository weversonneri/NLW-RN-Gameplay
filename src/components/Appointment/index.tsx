import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Text,
  Animated
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { categories } from '../../utils/categories';
import { GuildIcon } from '../GuildIcon';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { GuildProps } from '../Guild';

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
  handleRemove: () => void;
}

export function Appointment({ data, handleRemove, ...rest }: Props) {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather name="trash" size={25} color={theme.colors.heading} />

            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton
        {...rest}
      >
        <View style={styles.container}>
          <LinearGradient
            style={styles.guildIconContainer}
            colors={[secondary50, secondary70]}
          >
            <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
          </LinearGradient>
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>
                {data.guild.name}
              </Text>

              <Text style={styles.category}>
                {category.title}
              </Text>
            </View>

            <View style={styles.footer}>
              <View style={styles.dateInfo}>
                <CalendarSvg />

                <Text style={styles.date}>
                  {data.date}
                </Text>
              </View>

              <View style={styles.playerInfo}>
                <PlayerSvg fill={owner ? primary : on} />

                <Text
                  style={[
                    styles.player,
                    { color: owner ? primary : on }
                  ]}
                >
                  {owner ? 'Anfitrião' : 'Visitante'}
                </Text>
              </View>
            </View>

          </View>
        </View>
      </RectButton>
    </Swipeable >
  );
}
