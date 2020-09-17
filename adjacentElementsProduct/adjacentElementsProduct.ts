function adjacentElementsProduct(inputArray: number[]): number {
    let largestProduct = inputArray[0] * inputArray[1]

    for(let n of inputArray){
        const product = inputArray[n] * inputArray[n + 1]
        largestProduct = largestProduct < product ? product : largestProduct
    }

    return largestProduct
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));