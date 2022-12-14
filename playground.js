function quickSort(arr) {
    if(arr.length < 2) return arr;
    let pivot = arr[0];
    const areLessThan = arr.slice(1).filter(el => el <= pivot);
    const areMoreThan = arr.slice(1).filter(el => el > pivot);

    return [
        ...quickSort(areLessThan),
        pivot,
        ...quickSort(areMoreThan)
    ]
}

console.log(quickSort([2,5,14,1,34,10]))