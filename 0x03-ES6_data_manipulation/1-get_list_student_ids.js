export default function getListStudentIds(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects)) {
    const iDArray = arrayOfObjects.map((item) => {
     return item.id; 
    });

    return iDArray;

  } else {
    return [];
  }

}
