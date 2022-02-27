/*Exercise 1:
Take first 3 and last 3 characters of a string, and add them together to make a new string
*/
const Exercise1 = (str) => {
    let newStr;
    if (str.length > 3) {
        newStr = str.slice(0, 3) + str.slice(-3);

    }
    else {
        newStr = str;
    }
    alert(newStr)
}

/*Exercise 2:
Write a program to extrace first half of a strong of even length*/
const Exercise2 = (str) => str.slice(0, str.length / 2)

console.log(Exercise2('HelloWorld'))

/*Exercise 3:
Write a program to concatenate two strings except their first character*/

const Exercise3 = (str, str2) => str.slice(1).concat(str2.slice(1))
console.log(Exercise3('hello', 'world'))

/*Exercise 4:
Given two values, write a program to find out which on is nearest to 100*/

const Exercise4 = (num1, num2) => {
    if (100 - num1 < 100 - num2) {
        console.log(num1)
    }
    if (100 - num1 > 100 - num2) {
        console.log(num2)
    }
    if (100 - num1 == 100 - num2) {
        console.log("Both are the same")
    }

}
console.log(Exercise4(51, 50))

/*Exercise 5:
Write a program to check if a given string contains 2 to 4 occurences of a specified character*/

const Exercise5 = (str) => str.match(/z/g)
console.log(Exercise5('Hello World'))