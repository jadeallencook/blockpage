import fonts from '../api/fonts';

const getFont = (font) => {
  return { ...fonts[font] };
};

export default getFont;
