let button = document.querySelectorAll("input")
let ul = document.querySelector("ul");
console.log(button);


button[1].addEventListener('click', () => {
    let li = document.createElement("LI");
    let text = document.createTextNode(button[0].value);
    li.appendChild(text);

    ul.appendChild(li);
})

