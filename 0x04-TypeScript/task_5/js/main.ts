interface MajorCredits {
  brand: 'MajorCredits';
  credits: number;
}

interface MinorCredits {
  brand: 'MinorCredits';
  credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    brand: 'MajorCredits',
    credits: subject1.credits + subject2.credits,
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    brand: 'MinorCredits',
    credits: subject1.credits + subject2.credits,
  };
}

// Example Usage
const subjectA: MajorCredits = { brand: 'MajorCredits', credits: 3 };
const subjectB: MajorCredits = { brand: 'MajorCredits', credits: 4 };

const resultMajorCredits = sumMajorCredits(subjectA, subjectB);
console.log('Sum of Major Credits:', resultMajorCredits);

const subjectX: MinorCredits = { brand: 'MinorCredits', credits: 2 };
const subjectY: MinorCredits = { brand: 'MinorCredits', credits: 1 };

const resultMinorCredits = sumMinorCredits(subjectX, subjectY);
console.log('Sum of Minor Credits:', resultMinorCredits);
