interface Teacher {
  readonly firstName : string;
  readonly lastName : string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location : string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0).toUpperCase()}. ${lastName}`;
}

class StudentClass implements StudentClass{
  constructor(
    public firstName: string,
    public lastName: string
  ) {
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director: Directors = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  numberOfReports: 10,
};

const studentInstance: StudentClass = new StudentClass('John', 'Doe');

console.log(teacher3);
console.log(director);
console.log(printTeacher(teacher3.firstName, teacher3.lastName));
console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());
