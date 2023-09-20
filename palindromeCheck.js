// Creating the Palindrome Check Function

function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the cleanStr is the same forwards and backwards
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Optimization for Reduced Time Complexity

function isPalindromeOptimized(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const length = cleanStr.length;

    for (let i = 0; i < length / 2; i++) {
        if (cleanStr[i] !== cleanStr[length - 1 - i]) {
        return false; // Early detection of non-palindromes
        }
    }

    return true; // If no mismatch found, it's a palindrome
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Should return true

console.log(isPalindrome("racecar")); // Should return true

/* To optimize the isPalindrome function and reduce its time complexity, we can implement an approach that compares characters from both ends of the string and moves towards the center. This way, we can achieve early detection of non-palindromes and reduce the average time taken for non-palindromes.*/

//The optimized approach has a time complexity of O(n/2), which simplifies to O(n), where n is the length of the input string.