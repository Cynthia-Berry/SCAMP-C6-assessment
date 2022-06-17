const {customAlphabet} = require('nanoid');


const invoiceRefGenerator = organization => {
    let difference, organizationString;
    if (organization.length < 4) {
        difference = 4 - organization.length;
        const patch = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', difference);
        organizationString = `${organization}${patch()}`
    } else {
        organizationString = organization.substring(0, 4);
    }
    const generatedSuffix = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 8);
    return `${organizationString.toUpperCase()}${generatedSuffix()}`;
}


module.exports = {invoiceRefGenerator}