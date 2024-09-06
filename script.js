// Define the height of the triangle
const height = 7;

// Get the element where the triangle will be displayed
const triangleElement = document.getElementById('triangle');

// Loop through each row
for (let i = 1; i <= height; i++) {
    let row = '';
    // Loop through each column in the row
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    
    // Create a <p> element for each row
    const rowElement = document.createElement('p');
    rowElement.textContent = row;
    
    // Append the row to the triangle element
    triangleElement.appendChild(rowElement);
}
function checkPalindrome() {
    // Get the input from the user
    let word = document.getElementById('userInput').value;
    
    // Convert the word to lowercase to make the check case-insensitive
    let lowerCaseWord = word.toLowerCase();
    
    // Reverse the word
    let reversedWord = lowerCaseWord.split('').reverse().join('');
    
    // Get the result element to display the message
    let result = document.getElementById('result');
    
    // Check if the original word is equal to the reversed word
    if (lowerCaseWord === reversedWord) {
        result.textContent = word + " is a palindrome!";
        result.style.color = "green";
    } else {
        result.textContent = word + " is not a palindrome.";
        result.style.color = "red";
    }
}
