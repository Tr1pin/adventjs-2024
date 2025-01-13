function findMissingNumbers(nums) {
    let missing = [];
    nums = [...new Set(nums)]; // Eliminar duplicados
    nums.sort((a, b) => a - b); // Ordenar en orden ascendente

    const min = 1;
    const max = nums[nums.length - 1];

    for (let i = min; i <= max; i++) {
        if (!nums.includes(i)) {
            missing.push(i);
        }
    }

    return missing;
}

// Pruebas
console.log(findMissingNumbers([1, 2, 4, 6])); // [3, 5]
console.log(findMissingNumbers([4, 8, 7, 2])); // [3, 5, 6]
console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1])); // [4]
