const isValidUKPostCode = ukPostCode => {
  if(!ukPostCode) { return false; }

  const ukPostCodePatternString = `^(?:(?:[A-PR-UWYZ][0-9]{1,2}|[A-PR-UWYZ][A-HK-Y][0-9]{1,2}|[A-PR-UWYZ][0-9][A-HJKPSTUW]|
  [A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRV-Y])[0-9][ABD-HJLNP-UW-Z]{2}|GIR0AA)$`;

  const regexObj = new RegExp(ukPostCodePatternString);
  const normalizedUkPostCode = ukPostCode.replace(/\s/g, '').toUpperCase();

  return !!regexObj.test(normalizedUkPostCode);
};

module.exports = isValidUKPostCode;