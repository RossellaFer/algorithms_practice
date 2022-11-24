const selectionSort = (array) => {
    const length = array.length;

    for(let i = 0; i < length; i++) {
        let min = i;

        for (let j = i + 1; j < length; j++) {
            if(array[j] < array[min]) {
                min = j
            }
        }

        if(min !== i) {
            // swap in place
            let tmp = inputArr[i]; 
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;  
        }
    }
    
    return array;
}