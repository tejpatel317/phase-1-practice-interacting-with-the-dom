let initialSecond = 0;
let counter = document.getElementById("counter")
let pandrbutton = document.getElementById("pause");
let interval = setInterval(addOne, 1000);
let plusbutton = document.getElementById("plus");
let minusbutton = document.getElementById("minus");
let heartbutton = document.getElementById("heart");
let form = document.getElementById('comment-form')
let disabledPlus = document.createAttribute("disabled");
let disabledMinus = document.createAttribute("disabled");
let disabledHeart = document.createAttribute("disabled");
let x = 0;



function addOne() {
    initialSecond +=1
    counter.textContent = initialSecond;
}

function minusOne() {
    initialSecond -=1
    counter.textContent = initialSecond;
}

plusbutton.addEventListener("click", () => {
    addOne()
})

minusbutton.addEventListener("click", () => {
    minusOne()
})


pandrbutton.addEventListener("click", () => {
    if (pandrbutton.textContent === " pause ") {
        clearInterval(interval);
        pandrbutton.textContent = " resume "
        plusbutton.setAttributeNode(disabledPlus)
        minusbutton.setAttributeNode(disabledMinus)
        heartbutton.setAttributeNode(disabledHeart)
    }
    else if (pandrbutton.textContent === " resume ") {
        pandrbutton.textContent = " pause "
        interval = setInterval(addOne, 1000)
        plusbutton.removeAttribute("disabled")
        minusbutton.removeAttribute("disabled")
        heartbutton.removeAttribute("disabled")
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let value = document.getElementById("comment-input").value
    let p = document.createElement("p");
    p.textContent = value;
    document.getElementById("list").appendChild(p)
})

heartbutton.addEventListener("click", (e) => {
    let lineItems = document.getElementsByTagName("li")
    for (const li of lineItems) {
        let timestamp = parseInt(li.innerHTML.split(" ")[0], 10)
        if (timestamp === initialSecond) {
            let counter = parseInt(li.innerHTML.split(" ")[4], 10)
            li.textContent = `${initialSecond} has been like ${counter+1} time`
            document.querySelector("ul").appendChild(li)
            return
        }}
        let li = document.createElement("li");
        li.textContent = `${initialSecond} has been like 1 time`
        document.querySelector("ul").appendChild(li);
 
})

/*for (const li of lineItems) {
    let timestamp = parseInt(li.innerHTML.split(" ")[0], 10)
    let counter = parseInt(li.innerHTML.split(" ")[4], 10)
     if (timestamp = initialSecond) {
         li.textContent = `${initialSecond} has been like ${counter+1} time`
         document.querySelector("ul").appendChild(li);
     }
     else {*/