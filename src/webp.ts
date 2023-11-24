/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

import imagemin from 'imagemin';
import webp from 'imagemin-webp';

const webpOutputFolder = './public/myproject';
const placeholerOutputFoler = './public/myproject/placeholder';
const s3uploadWebp = './public/myproject/new';

const produceWebP = async () => {
  await imagemin([`${s3uploadWebp}/*.{png,jpg,jpeg}`], {
    destination: webpOutputFolder,
    plugins: [
      webp({
        lossless: true,
      }),
    ],
  });
  await imagemin([`${s3uploadWebp}/*.{png,jpg,jpeg}`], {
    destination: placeholerOutputFoler,
    plugins: [
      webp({
        quality: 1,
      }),
    ],
  });
};

void produceWebP();
