/*jshint esversion: 8 */
function CreatTable(data) {
    // get the reference for the body
    let body = document.getElementsByTagName("body")[0];
    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
    let totalCount = 0;
    // creating all cells
    for (let i = 0; i < 5; i++) {
        let cellText = 0;
        // creates a table row
        let row = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            let cell = document.createElement("td");
            if (totalCount == 12) {
                cellText = document.createTextNode("Free Space🤣");
            } else {
                cellText = document.createTextNode(data[totalCount]);
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
            totalCount++;
        }
        row.style.padding = "50px 10px 20px 30px";
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "1");
}
function main() {
    fetch('http://170.187.145.227:3000/WordsAPI')
        .then(res => res.json())
        .then(out => CreatTable(out))
        .catch(err => console.log(err));
}
main();