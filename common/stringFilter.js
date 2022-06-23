const string = "Строка для фильтрации";
const vowels = ['а','о','у','ы','э','и','е','ё','ю','я'];

let vowelsFilter = stringToFilter => {
    let stringFiltered = '';

    for (let i=0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            stringFiltered += string[i];
        }
    }

    return stringFiltered;
}

console.log(vowelsFilter(string));