const { expect } = require('chai');
const isValidUKPostCode = require('./ukPostCodeValidation');

describe('isValidUKPostCode()', () => {
  [
    {postCode: 'GU1 3SB', expectation: true},
    {postCode: 'ABN 123', expectation: false},
    {postCode: '', expectation: false},
    {postCode: '1234567', expectation: false}
  ].forEach(item => {
    it(`should return ${item.expectation.toString()} given ${item.postCode} `, () => 
      expect(isValidUKPostCode(item.postCode)).to.equal(item.expectation));
  });
});