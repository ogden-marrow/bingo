/*jshint esversion: 11 */
function oneWord(wordArray) {
    let di = document.getElementById("Word");
    let wordOfTheDay = wordArray[Math.floor(Math.random() * wordArray.length)];
    di.innerHTML = wordOfTheDay;
}
function main() {
    fetch('http://170.187.145.227:8080/WordsAPI')
        .then(res => res.json())
        .then(out => oneWord(out))
        .catch(err => console.log(err));
}
main();