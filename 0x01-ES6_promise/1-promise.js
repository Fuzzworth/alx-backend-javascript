/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function getFullResponseFromAPI(success){
  const promise = new Promise(function(resolve, reject) {
  if (success) {
    const result = {
      status: 200,
      body: 'Success',
    } 
    resolve(result);
  }
  else {
    const result = "The fake API is not working currently";
    reject(Error(result));
  }
});
  return promise;
}
