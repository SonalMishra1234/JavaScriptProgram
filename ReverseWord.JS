var input = "It is a Program of Reverse each word in a sentence";
var reverse = "";
var currentWord = "";
console.log(input);

for (var i = 0; i < input.length; i++) 
{
  if (input[i] !== ' ') 
  {
    // Build the current word character by character
    currentWord = input[i] + currentWord;
  } 
  else
   {
    // Found a space, so append the reversed current word to the result
    reverse += currentWord + ' ';
    currentWord = ""; // Reset the current word
  }
}

// Append the last word in the sentence
reverse += currentWord;

console.log(reverse);