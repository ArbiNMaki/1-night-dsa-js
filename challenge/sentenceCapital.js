/**
 * hello world => Hello World
 * sentence capital => Sentence Capital
 */

/**
 * 1. Make the String lowercase (toLowerCase Method)
 * 2. Convert String to Array (Split Method)
 * 3. Capitalize each word (Map Method)
 * 4. Convert Array back to String (Join Method)
 */

const capitalize = (str) => {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalize("hello world"));
console.log(capitalize("sentence capital"));