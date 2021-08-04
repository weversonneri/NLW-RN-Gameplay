import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { styles } from './styles';

import { Avatar } from '../Avatar';
import { useAuth } from '../../hooks/auth';
import { RectButton } from 'react-native-gesture-handler';
import { LogoutModal } from '../LogoutModal';
import { Button } from '../Button';
import { theme } from '../../global/styles/theme';
import { ButtonSecondary } from '../ButtonSecondary';

export function Profile() {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const { user, signOut } = useAuth();

  function handleOpenModal() {
    setOpenLogoutModal(true);
  }

  function handleCloseModal() {
    setOpenLogoutModal(false);
  }

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>

      <RectButton
        onPress={handleOpenModal}
      >
        <Avatar
          urlImage={user.avatar}
        />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            {user.firstName}
          </Text>
        </View>
        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>

      </View>

      <LogoutModal
        visible={openLogoutModal}
        closeModal={handleCloseModal}
      >
        <View style={styles.footer}>
          <Text style={styles.modalTitle}>
            Deseja sair do Game<Text style={{ color: theme.colors.primary }}>Play?</Text>
          </Text>

          <View style={styles.modalButton}>
            <View style={{ flex: 1 }}>
              <ButtonSecondary
                isCancel
                title="Não"
                onPress={handleCloseModal}
              />
            </View>
            <View style={{ marginHorizontal: 4 }} />

            <View style={{ flex: 1 }}>
              <ButtonSecondary
                title="Sim"
                onPress={handleSignOut}
              />
            </View>
          </View>
        </View>
      </LogoutModal>
    </View>
  );
}
