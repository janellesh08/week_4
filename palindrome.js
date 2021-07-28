function palindromeChecker(str){
    let len = word.length;

    for(let i =0; i < len/2; i++){
        if(word[i] !== word[len - 1]){
            return 'This word is not a palindrome';
        }

        else{
            return 'This word is a palindrome'
        }
    }
}


let word = prompt('Enter your word: ');

let answer = palindromeChecker(word);

console.log(answer)