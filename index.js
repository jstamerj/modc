var value = null

module.exports.set = function(newValue) {
 value = newValue;
}

module.exports.get = function() {
  return value;
}
