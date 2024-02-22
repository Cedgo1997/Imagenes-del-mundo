const randomizer = (quantity = 4) => {
    const indexArrays = [];
    const memo = {};
    while (indexArrays.length < quantity) {
        let randomNumber = Math.floor(Math.random() * (quantity + 1));
        if (!memo[randomNumber]) {
            indexArrays.push(randomNumber);
            memo[randomNumber] = true;
        }
    }
    return indexArrays;
};

export default randomizer;
