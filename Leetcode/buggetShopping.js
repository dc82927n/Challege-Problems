unction budgetShopping(n, bundleQuantities, bundleCosts) {
    // Write your code here
    let arrayOfBooksPurchased = []
    for (let i = 0; i < bundleQuantities.length; i++){
        let max = 0;
        let numOfBooksPurchased = 0;
        while (n >= bundleCosts[i]) {
            n -= bundleCosts[i];
            numOfBooksPurchased += bundleQuantities[i];
            
        }
        for (let j = 0; j < bundleQuantities.length; j++) {
            let amountOfBooksPurchasedFromFirstStore = numOfBooksPurchased;
            while (n >= bundleCosts[j]) {
                n -= bundleCosts[j];
                amountOfBooksPurchasedFromFirstStore += bundleQuantities[i];


                
            }
            if (amountOfBooksPurchasedFromFirstStore > max) {
                max = amountOfBooksPurchasedFromFirstStore;
                console.log('New max', max);
            }


        }
        arrayOfBooksPurchased.push(max);
        
    }
    return arrayOfBooksPurchased.sort((a, b) => b - a)[0];


}
