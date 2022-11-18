var binarySearch = (sortedArray, target) => {
    let low = 0;
    let high = sortedArray.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2)
        let guess = sortedArray[mid];
        
        if(target === guess) {
            return guess;
        }

        if(guess > item) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }

    return null;
}

binarySearch([1, 15, 16, 20], 16)