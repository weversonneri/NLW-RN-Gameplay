import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: theme.colors.secondary90
  },
  content: {
    flex: 1
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  title: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 18
  },
  category: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
    marginRight: 24
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  date: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 13,
    marginLeft: 7
  },
  player: {
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24
  },
  guildIconContainer: {
    height: 68,
    width: 64,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  buttonRemove: {
    width: 90,
    height: 68,
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 20,
    paddingLeft: 10
  }

});