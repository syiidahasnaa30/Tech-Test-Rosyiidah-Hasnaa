const countRandomCharacter = (words) => {
    const splittedWord = words.split("");
    const uniqueWord = [...new Set(splittedWord)]
    const countWord = [];
    uniqueWord.forEach(word => {
        countWord.push({ character: word, count: 0 });
    })

    splittedWord.forEach(word => {
        countWord.forEach(charToCount => {
            if (word === charToCount.character) {
                charToCount.count += 1
            }
        })
    })
    return countWord;
}

const counting = countRandomCharacter("aabbbahwws");
counting.forEach(count => {
    console.log(count.character + " = " + count.count)
})