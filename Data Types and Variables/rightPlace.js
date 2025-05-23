function rightPlace(word, symbol, checkWord) {

    let newWord = word.replace('_', symbol);
    
    if (newWord === checkWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');