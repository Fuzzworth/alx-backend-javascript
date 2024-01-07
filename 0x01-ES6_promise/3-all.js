/* eslint-disable no-unused-vars */
/* eslint-disable */
import {uploadPhoto, createUser } from "./utils.js";
export default function handleProfileSignup(){

  uploadPhoto().then((result) => {
    createUser().then((result2) => {
      process.stdout.write(`${result.body} ${result2.firstName} ${result2.lastName}`);
    }).catch((err2) => {
      console.log('Signup system offline');
    });
  }).catch((err) => {
    console.log('Signup system offline');
  });



}
