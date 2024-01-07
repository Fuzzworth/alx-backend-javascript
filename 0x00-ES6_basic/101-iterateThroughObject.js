/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function iterateThroughObject(reportWithIterator) {
  let employee = reportWithIterator.next();
  while (!employee.done)
  {
    process.stdout.write(employee.value);
    employee = reportWithIterator.next();
    if (!employee.done)
      process.stdout.write(" | ");
  }
 }
