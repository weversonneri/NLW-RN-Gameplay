import React, { useState, useCallback } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';


import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/storage';
import { Load } from '../../components/Load';

export function Home() {
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  const navigation = useNavigation();

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected });
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  async function loadAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const response: AppointmentProps[] = storage ? JSON.parse(storage) : [];

    if (category) {
      setAppointments(response.filter((item) => item.category === category));
    } else {
      setAppointments(response);
    }
    setLoading(false);
  }

  async function handleRemoveAppointment(appointment: AppointmentProps) {
    try {
      const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
      const storagedAppointments = storage ? JSON.parse(storage) : [];

      //delete storagedAppointments[appointment.id];
      const filter = storagedAppointments.filter((item: AppointmentProps) => item.id !== appointment.id);

      await AsyncStorage.setItem(
        COLLECTION_APPOINTMENTS,
        JSON.stringify(filter)
      );

      setAppointments((old) => (
        old.filter((item) => item.id !== appointment.id)
      ));

    } catch (error) {
      Alert.alert(
        'Erro ao deletar agendamento',
        'Algo de errado aconteceu ao deletar o agendamento',
      );
    }
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

  return (
    <Background>

      <View style={styles.header}>
        <Profile />
        <ButtonAdd
          onPress={handleAppointmentCreate}
        />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelected}
        hasCheckBox={true}
      />

      {
        loading
          ?
          <Load />
          :
          <>
            <ListHeader
              title="Partidas agendadas"
              subtitle={`Total ${appointments.length}`}
            />

            <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleAppointmentDetails(item)}
                  handleRemove={() => handleRemoveAppointment(item)}
                />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              contentContainerStyle={{ paddingBottom: 69 }}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
            />
          </>
      }
    </Background>
  );
}
