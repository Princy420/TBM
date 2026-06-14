import { Cloudinary } from '@cloudinary/url-gen';

// Initialisation de l'instance Cloudinary avec votre Cloud Name
export const cld = new Cloudinary({
  cloud: {
    cloudName: 'ddnqhlybk' // Votre vrai Cloud Name
  }
});
