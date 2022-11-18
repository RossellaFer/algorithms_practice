var quickSort = (list) => {
  if(list.length < 2) return list;
  const pivot = list[0];

  // slice the list to remove the pivot element and then using filter to identify lower and higher numbers
  const keysAreLessThanPivot = list.slice(1).filter(key => key <= pivot);
  const keysAreMoreThanPivot = list.slice(1).filter(key => key > pivot);

  return [
    ...quickSort(keysAreLessThanPivot),
    pivot,
    ...quickSort(keysAreMoreThanPivot)
  ]

}

