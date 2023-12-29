const strings = ["hello", "world", "how", "are", "you"];

const titleCaseStrings = strings.map(string => string.charAt(0).toUpperCase() + string.slice(1));

console.log(titleCaseStrings);
