/* eslint-disable no-unused-vars */
/* eslint-disable */
import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {

  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([resultSUU, resultUP]) => {
      return [resultSUU, resultUP];
    })
    .catch((error) => {
      return error;
    });
}
