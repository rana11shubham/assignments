/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let len=transactions.length;
  final_transaction={};
  for(let i=0;i<len;i++){
      category=transactions[i].category;
      price=transactions[i].price;
      if(!final_transaction[category]){
        final_transaction[category]=0;
      }
      final_transaction[category]+=price;
  }
  let result=Object.keys(final_transaction).map(function(cateogry){
      return {category:cateogry,totalSpent: final_transaction[cateogry]};
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
