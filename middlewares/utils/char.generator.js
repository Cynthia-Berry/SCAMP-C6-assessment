const randomstring = require("randomstring");

const invoiceRefGenerator = organization => {
  let difference, organizationString;
  if (organization.length < 4) {
    difference = 4 - organization.length;
    const patch = randomstring.generate({charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', length: parseInt(difference)});
    organizationString = `${organization}${patch}`
  } else {
    organizationString = organization.substring(0, 3);
  }
  const generatedSuffix = randomstring.generate({charset: 'alphanumeric', length: 9});
  return `${organizationString.toUpperCase()}${generatedSuffix}`;
}


module.exports = {invoiceRefGenerator}