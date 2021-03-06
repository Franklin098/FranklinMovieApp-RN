import ImageColors from 'react-native-image-colors';
export const getImageColors = async (imageUrl: string) => {
  const colors = await ImageColors.getColors(imageUrl);
  let primary;
  let secondary;
  if (colors.platform === 'android') {
    primary = colors.dominant;
    secondary = colors.average;
  } else if (colors.platform === 'ios') {
    primary = colors.primary;
    secondary = colors.secondary;
  }
  return [primary, secondary];
};
