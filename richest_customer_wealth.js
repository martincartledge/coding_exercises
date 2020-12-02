/*
  https://leetcode.com/problems/richest-customer-wealth/

  You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

  A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
*/

https: const richestCustomer = (accounts) => {
  let max = 0;

  for (let i = 0; i < accounts.length; i++) {
    let currentMax = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      currentMax += accounts[i][j];
      max = Math.max(max, currentMax);
    }
  }
  return max;
};

// richestCustomer([[1,2,3], [3,2,1]]); // 6

// richestCustomer([[1,5],[7,3],[3,5]]); // 10

// richestCustomer([[2,8,7],[7,1,3],[1,9,5]]); // 17
