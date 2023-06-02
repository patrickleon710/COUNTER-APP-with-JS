/* document.getElementById("count-el").innerText = 5 */

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// works with the onclick on line 13 html
let count = 0

let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")


function increment() {
    count += 1
    countEl.textContent = count   
}

function save() {
    saveEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0
    console.log(count)
}

