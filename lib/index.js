var value = null;

console.log(__dirname, 'Loading modc');

module.exports = function() {
  return {
    set: function(newValue) {
      console.log(__dirname, 'Setting value...', newValue);
      value = newValue;
    },
    get: function() {
      console.log(__dirname, 'Getting value...', value);
      return value;
    }
  };
};
