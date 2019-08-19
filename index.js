// # javascript-session1-ic
//
// Try to do this without using the code from previous work.
// Only use the JavaScript reference guide: https://docs.google.com/document/d/1sdPHe4xQt_qEzbePtZRdTOcX2hDWpBVV8E_L8JvcPrI/
//
//     Create a main function for all of your code.
//     Keep asking the user to press 1, 2, or 3 until they press 'q' to quit.
//
// - If they press 1, alert "Challenge goes here".
// - If they press 2, alert "2".
// - If they press 3, alert "Hello World".
//
//     ### Challenge
// - If they press 1, ask them to press a, b, or c in a different function.
// If they press a, alert "A", if they press b, alert "B", if they press c, alert "C".
//
//     ### Challenge 2
// - Return the values of a, b, or c to use in the main function.

function main(e2) {
    var userInput = prompt("Enter 1 for challenge, 2 for alert and 3 for Hello world or q to quit");

    while (userInput !== 'q') {

        if (userInput === '1') {

            alert("Challenge");
            abc_menu();
            console.log(e2);
        }
        if (userInput === '2') {
            alert(2);
        } else if (userInput === '3') {
            alert("Hello World!");
        }
        userInput = prompt(" Enter 1 for challenge, 2 for alert and 3 for Hello world or q for quit");
    }
}
main();
function abc_menu() {
    var userInput2 = prompt("Enter a for A, b for alert B and 3 for C or q to quit");
    while (userInput2 !== 'q') {

        if (userInput2 === 'a') {

            alert("A");

        }
        if (userInput2 === 'b') {
            alert("B");
        } else if (userInput2 === 'c') {
            alert("C");
        }
        userInput2 = prompt("Enter 'a' for A, 'b' for alert B and 'c' for C or q to quit");
    }
    return (userInput2);
}