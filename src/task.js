module.exports = findFirstMissingNaturalNumber = (arr = []) => {
    const sortedArr = arr.sort();

    for (let i = sortedArr[0]; i < sortedArr.length - 1; i++) {
        const foundStatus = sortedArr[i + 1] - sortedArr[i] !== 1;

        if (sortedArr[i] > 0 && foundStatus) {
            return sortedArr[i] + 1;
        }
    }
}
