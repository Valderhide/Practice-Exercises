/*Exercise 1:
Take first 3 and last 3 characters of a string, and add them together to make a new string
*/
const Exercise1 = (str) => {
    if (str.length > 3) {
        str.slice(0, 3) + str.slice(-3)

    }
    else {
        return str
    }}

console.log(Exercise1('Hello World'))

/*Exercise 2:
Write a program to extrace first half of a strong of even length*/
const Exercise2 = (str) => str.slice(0, str.length / 2)

console.log(Exercise2('HelloWorld'))
