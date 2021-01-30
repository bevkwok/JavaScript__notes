// function maximumToys(prices, prices) {
//     let toyNum = 0;
//     let min = 0;
//     let minIdx = 0;

//     while((prices - min) >= 0) {
//         min = prices[0];
//         for(var i = 0; i < prices.length; i++) {
//             if(prices[i] < min) {
//                 min = prices[i];
//                 minIdx = i;
//             }
//         }
//         prices -= min;
//         console.log('pre-prices' ,prices);
//         [prices[prices.length-1], prices[minIdx]] = [prices[minIdx], prices[prices.length-1]];
//         console.log(prices);
//         prices.pop();
//         toyNum++;
//     }
//     return toyNum;
// }

function maximumToys(k, prices) {
    let toyNum = 0;
    let cheapestToy = 0;
    let cheapToyIdx = 0;
    let enoughtMoney = true;

    while(enoughtMoney) {
        cheapestToy = prices[0];
        cheapToyIdx = 0;
        for(let i = 0; i < prices.length; i++) {
            // trying to find the cheapest toy here
            if(prices[i] < cheapestToy) {
                cheapestToy = prices[i];
                cheapToyIdx = i;
            }
        }

        if(k >= cheapestToy){ //have enough money to buy
            k -= cheapestToy; // pay for the toy
            toyNum++; // gain one more toy

            // move and remove that toy to the end of prices array
            [prices[(prices.length - 1)], prices[cheapToyIdx]] = [prices[cheapToyIdx], prices[(prices.length - 1)]];
            prices.pop(); 

        } else { // don't have enought money to buy
            enoughtMoney = false;
        }
    }
    return toyNum;
}
console.log(maximumToys(50, [1, 12, 5, 111, 200, 1000, 10]));