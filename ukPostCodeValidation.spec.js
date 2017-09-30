import {isValidUKPostCode} from './ukPostCodeValidation';

describe('isValidUKPostCode()', () => {
  [
    {postCode: 'GU1 3SB', expectation: true},
    {postCode: 'ABN 123', expectation: false},
    {postCode: '', expectation: false},
    {postCode: '1234567', expectation: false}
  ].forEach(item => {
    test(`Given ${item.postCode} should return ${item.expectation.toString()}`, () => 
      expect(isValidUKPostCode(item.postCode)).toBe(item.expectation));
  });
});