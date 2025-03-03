function removeSmallest(numbers) {
    const smallest = Math.min(...numbers);
    const index = numbers.findIndex(i => i === smallest);
    return numbers.filter((numbers, i) => i !== index);
}

removeSmallest()