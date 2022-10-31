// set variable

let btn = document.querySelector("#new_quote")
let quote = document.querySelector(".qoute")
let person = document.querySelector(".person")


const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },


    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        person: "Steve Jobs"
    },


    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        person: "Eleanor Roosevelt"
    }
]



btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})