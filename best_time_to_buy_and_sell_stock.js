// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = (prices) => {
  let buyStock = prices[0],
    sellStock = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buyStock) {
      buyStock = prices[i];
    } else if (prices[i] - buyStock > sellStock) {
      sellStock = prices[i] - buyStock;
    }
  }

  return sellStock;
};

// maxProfit([7,1,5,3,6,4]); // 5
// maxProfit([7,6,4,3,1]); // 0
// maxProfit([1,2]); // 1
// maxProfit([2,4,1]); // 2
