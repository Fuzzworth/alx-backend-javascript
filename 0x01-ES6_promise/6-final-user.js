/* eslint-disable no-unused-vars */
/* eslint-disable */
import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {

  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([userResult, photoResult]) => {
      return [
      {
        status: userResult.status,
        value: userResult.status === 'fulfilled' ? userResult.value : userResult.reason,
      },
      {
        status: photoResult.status,
        value: photoResult.status === 'fulfilled' ? photoResult.value : photoResult.reason,
      },
    ];
    })
    .catch((error) => {
      return [
        {
        status: 'rejected',
        value: error.message,
      },
      ];
    });
}
