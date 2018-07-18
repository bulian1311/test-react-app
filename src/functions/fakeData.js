export default () => {
  let result = [];
  for (let i = 0; i < 210; i++) {
    let n = Math.floor(Math.random() * 1000);
    result.push({
      id: n,
      firstName: `Firstname ${n}`,
      lastName: `Lastname ${n}`,
      email: `${n}email@in.gov`,
      phone: `(${n})211-6296`,
      address: {
        streetAddress: `${n} Mattis Ct`,
        city: `City ${n}`,
        state: `State ${n}`,
        zip: `22${n}78`
      },
      description: 'et lacus magna dolor...'
    });
  }
  return result;
};
