import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Illustration from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import { styles } from './styles';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSigIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <ScrollView>

        <View style={styles.container}>

          <Image
            source={Illustration}
            style={styles.image}
            resizeMode='stretch'
          />
          <View style={styles.content}>
            <Text style={styles.title}>
              Conecte-se {'\n'} e organize suas {'\n'} jogatinas
            </Text>

            <Text style={styles.subtitle}>
              Crie grupos para jogar seus games {'\n'}
              favoritos com seus amigos
            </Text>

            {loading
              ?
              <ActivityIndicator color={theme.colors.primary} />
              :
              <ButtonIcon
                title='Entrar com Discord'
                activeOpacity={0.7}
                onPress={handleSigIn}
              />}
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}
