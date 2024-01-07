/* eslint-disable no-unused-vars */
/* eslint-disable */
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error('An error occurred:', error);
    return {
      photo: null,
      user: null,
    };
  }
}

