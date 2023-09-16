const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Median age
const middle = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 === 0
  ? (ages[middle - 1] + ages[middle]) / 2
  : ages[middle];

// Average age
const sum = ages.reduce((total, age) => total + age, 0);
const averageAge = sum / ages.length;

// Range of ages
const ageRange = maxAge - minAge;

// Compare (min - average) and (max - average)
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

console.log('Sorted Ages:', ages);
console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Age Range:', ageRange);
console.log('Min Diff from Average:', minDiff);
console.log('Max Diff from Average:', maxDiff);
