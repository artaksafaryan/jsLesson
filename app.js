function addNewWord(text, data) {
    let newArr = text.split('')
    let item = 0;
    for (let i = 0; i < newArr.length; i++) {

        if (newArr[i] === "_") {
            newArr[i] = data[item];
            item +=1;
        }

    }
    console.log(newArr.join(''))
    return newArr.join('')



}
addNewWord("_ we have a _", ["Huston", "problem"])
