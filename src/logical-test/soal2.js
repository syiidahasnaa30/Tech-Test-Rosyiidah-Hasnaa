const countRandomCharacter = (words) => {
    const splittedWord = words.split("");
    const uniqueWord = [...new Set(splittedWord)]
    const countUnique = uniqueWord.map((word)=>{
        return {character: word, count: 0}
    })
    
    splittedWord.forEach(word => {
        countUnique.forEach(unique => {
            if (word === unique.character) {
                unique.count += 1
            }
        })
    })
    return countUnique;
}

const counting = countRandomCharacter("aabbbahwws");
counting.forEach(count => {
    console.log(count.character + " = " + count.count)
})