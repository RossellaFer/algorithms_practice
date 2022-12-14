function merge(arr1, m, arr2, n) {
    let first = m - 1;
    let second = n - 1;
    let i = (m + n) - 1;

    while (second >= 0) {
        let fVal = arr1[first];
        let sVal = arr2[second];

        if(fVal > sVal) {
            arr1[i] = fVal;
            i--;
            first--;
        }
        else {
            arr1[i] = sVal;
            i--;
            second--;
        }
    }
}

mergeSort([1,2,3,0,0,0], 3, [2,5,6], 3);