// https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function (address) {
  const defanged = [];

  for (let value of address) {
    if (value === ".") {
      defanged.push("[.]");
    } else {
      defanged.push(value);
    }
  }
  return defanged.join("");
};

// defangIPaddr("1.1.1.1") // "1[.]1[.]1[.]1"
// defangIPaddr("255.100.50.0") // "255[.]100[.]50[.]0"
