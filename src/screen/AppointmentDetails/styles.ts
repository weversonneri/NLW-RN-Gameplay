import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
  },
  banner: {
    width: '100%',
    height: 234,
    marginBottom: 30
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 30
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 28,
    color: theme.colors.heading
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.heading
  },
  member: {
    marginLeft: 24,
    marginTop: 27
  },
  footer: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: getBottomSpace(),
  }
});
