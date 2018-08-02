module.exports = {
  getTime: function () {
    var currT = new Date();

    return currT.getFullYear().toString() +
      addZeroIfLess10(currT.getMonth() + 1) +
      addZeroIfLess10(currT.getDate()) +
      '_' +
      addZeroIfLess10(currT.getHours()) +
      addZeroIfLess10(currT.getMinutes());
  }
};

function addZeroIfLess10(n) {
  if (n < 10) {
    return '0' + n;
  }
  return n.toString();
}