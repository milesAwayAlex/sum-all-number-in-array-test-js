const sumItems = array => {
  if (Array.isArray(array)) return array.reduce((a, e) => a + sumItems(e), 0);
  return array;
};

module.exports = sumItems;
