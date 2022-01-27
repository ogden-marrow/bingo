/*jshint esversion: 8 */
import fetch from 'node-fetch';
function testAPI() {
    fetch('http://170.187.145.227:3000/WordsAPI')
        .then(res => res.json())
        .then(out => {
            out.forEach(element => {
                out.forEach(element2 => {
                    if (element != element2) {
                        if (element.toLowerCase() == element2.toLowerCase()) {
                            console.log("Error: " + element + " and " + element2 + " are the same word");
                        }
                    }
                });
            });
        }
        )
        .catch(err => console.log(err));
}

setInterval(() => {
    testAPI();
    console.log("testAPI() ran " + new Date());
}, 100);
