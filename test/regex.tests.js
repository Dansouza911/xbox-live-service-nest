// at least 1 lowercase alphabetical
// at least 1 uppercase alphabetical
// at least 1 numeric
// one special character
// const passwordRegex = new RegExp(
//   '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
// );
const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
console.log(reg.test('Kleptokoko534!'));

const cpfRegex = /(\d{3})(\d{3})(\d{3})(\d{2})/
console.log(cpfRegex.test('05810999158'))
