// https://leetcode.com/problems/unique-email-addresses/

const isLengthValid = (email) => {
  if (!email) return false;
  return email.length <= 100;
};

const numUniqueEmails = function (emails) {
  if (!emails || !emails.length || !isLengthValid(emails)) return -1;

  let uniqueEmails = new Set();

  for (let email of emails) {
    let index = email.indexOf("@");
    let localName = email.substring(0, index);
    let domainName = email.substring(index);

    if (localName.includes("+")) {
      localName = localName.substring(0, localName.indexOf("+"));
    }

    if (localName.includes(".")) {
      localName = localName.replace(/\./g, "");
    }

    uniqueEmails.add(localName + domainName);
  }

  return uniqueEmails.size;
};

numUniqueEmails([
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
]); // 2
