import { FontFace } from '../types/FontFace';
import { TextStyle, Platform } from 'react-native';
import { matchFontFace } from './matchFontFace';
import { getLocalFontName } from './getLocalFontName';

export function generateOverrideStyle(fontFaces: FontFace[], textStyle: TextStyle): TextStyle {
  const fontFace = matchFontFace(fontFaces, textStyle);
  if (fontFace) {
    const fontFamily = getLocalFontName(fontFace);
    const fontWeight = undefined;
    const fontStyle = undefined;

    const platformOverrides =
      Platform.OS === 'ios'
        ? {
            fontWeight,
            fontStyle,
          }
        : {};

    return {
      ...textStyle,
      fontFamily,
      ...platformOverrides,
    };
  } else {
    return textStyle;
  }
}
