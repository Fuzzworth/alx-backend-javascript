/* eslint-disable no-unused-vars */
/* eslint-disable */
import {uploadPhoto, createUser } from "./utils.js";
export default function handleProfileSignup(){
  
  uploadPhoto().then((result) => {
    process.stdout.write(`${result.body} `);
  }).catch((err) => {
    console.log('Signup system offline');
  });

  createUser().then((result) => {
    process.stdout.write(`${result.firstName} ${result.lastName}`);
  }).catch((err) => {
    console.log('Signup system offline');
  });

}
