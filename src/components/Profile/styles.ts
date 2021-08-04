import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    flexDirection: 'row'
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight
  },
  footer: {
    marginTop: 29,
    marginBottom: 39
  },
  modalButton: {
    flexDirection: 'row',
    marginHorizontal: 23,
    marginTop: 27
  },
  modalTitle: {
    textAlign: 'center',
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading
  },
});