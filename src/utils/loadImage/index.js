import noImage from './noImage.png';

const requestImage = require.context('../../assets', false, /.png$/);

export const loadImage = (imageName) => {
  try {
    return requestImage(`./${imageName}.png`).default;
  } catch (error) {
    return noImage;
  }
};
