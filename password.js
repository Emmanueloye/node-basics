const ShortUniqueId = require('short-unique-id');

const passGenerator = () => {
  const password = new ShortUniqueId().rnd(10);
  console.log(password);
  return password;
};

passGenerator();
