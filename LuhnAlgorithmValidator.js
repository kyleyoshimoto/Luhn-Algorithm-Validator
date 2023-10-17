// All valid credit card numbers
const valid = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  // valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Function that returns true if the card follows the Luhn algorithm and false if not:
function validateCred(card) {
  sum = 0;

  // Iterates through each digit index.
  for (let i = card.length - 1; i >= 0; i--) {

    // Checks if this is an index that we should double or not.
    if (i % 2 === 0 && i != card.length - 1) {

      // Makes sure our card is single digit by subtracting by 9 if double digit.
      if (2 * card[i] > 9) {
        sum += 2 * card[i] - 9;
      } else {
        sum += 2 * card[i];
      }

      // adds to sum as is as Luhn algorithm suggests.
    } else {
      sum += card[i];
    }
  }
  return sum % 10 === 0;
}

// Testing our demo credit card numbers.
console.log(validateCred(valid));
console.log(validateCred(valid1));
console.log(validateCred(invalid1));
console.log(validateCred(valid2));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));

// Function that will test a nested array of credit cards and return an array of invalid credit cards.
function findInvalidCards(nestedArray) {
  invalid = [];
  for (i in nestedArray) {

    // Calls the validateCred function established above on our nested array.
    if (!validateCred(nestedArray[i])) {
      
      // if function declares card invalid, it is pushed to our new array.
      invalid.push(nestedArray[i]);
    }
  }
  return invalid;
}

// console.log(findInvalidCards(batch));
const invalidCards = findInvalidCards(batch);

// Function that will identify what companies each card belongs to when fed a nested array of credit card numbers.
function idInvalidCardCompanies(batch) {
  companies = [];
  for (card in batch) {
    if (batch[card][0] === 3 && !companies.includes('Amex (American Express)')) {
      companies.push('Amex (American Express)');
    } else if (batch[card][0] === 4 && !companies.includes('Visa')) {
      companies.push('Visa');
    } else if (batch[card][0] === 5 && !companies.includes('Mastercard')) {
      companies.push('Mastercard');
    } else if (batch[card][0] === 6 && !companies.includes('Discover')) {
      companies.push('Discover');
    } else if (batch[card][0] < 3 && batch[card][0] > 6) {
      console.log('Company not found');
    }
  };
  return companies;
}

console.log(idInvalidCardCompanies(invalidCards));
