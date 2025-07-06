function wordsTracker(arr) {

    // let searchWordsLine = arr.shift();
    let [searchWordsLine, ...textWords] = arr;
    let searchWords = searchWordsLine.split(" ");

    let wordCounts = {};

    for (let word of searchWords) {
        wordCounts[word] = 0;
    }

    for (let word of textWords) {
        if (wordCounts.hasOwnProperty(word)) {
            wordCounts[word]++;
        }
    }

    let sorted = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}

wordsTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task']);
wordsTracker(['is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);