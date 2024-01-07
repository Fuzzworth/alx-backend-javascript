/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function getResponseFromAPI(){
  const promise = new Promise(function(resolve, reject) {
  if (true) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
  return promise;
}
