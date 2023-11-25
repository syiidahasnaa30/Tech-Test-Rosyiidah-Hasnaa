const convertToTitle = (text) => {
    let title = "";
    let splitted = text.split("");

    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i - 1] === " " || i === 0) {
            splitted[i] = splitted[i].toUpperCase();
        }
        title += splitted[i]
    }
    return title
}
const printText = (words) => {
    const moveTheSpecialCharacter = words.replaceAll(/[^ A-Za-z0-9]/gm, "").toLowerCase();
    const title = convertToTitle(moveTheSpecialCharacter)
    const normalText = moveTheSpecialCharacter.replaceAll(" ", "-")

    console.log(title);
    console.log(normalText)

}
printText("SELamAt PaGi Dunia!!@& 30");