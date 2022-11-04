const quotes = [
    {
        quote: "To know is nothing at all; to imagine is everything.",
        author: "Anatole France",
    },
    {
        quote: "I would as soon leave my son a curse as the almighty dollar.",
        author: "Andrew Carnegie",
    },
    {
        quote: "Business? It's quite simple. It's other people's money.",
        author: "Alexandre Dumas",
    },
    {
        quote: "Love does not consist in gazing at each other, but in looking together in the same direction.",
        author: "Antoine de Saint-Exuperys",
    },
    {
        quote: "One man with courage makes a majority.",
        author: "Andrew Jackson",
    },
    {
        quote: " Television has a real problem. They have no page two.",
        author: "Art Buchwald",
    },
    {
        quote: " When men are employed, they are best contented.",
        author: "Benjamin Franklin",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const dodayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = dodayQuote.quote;
author.innerText = dodayQuote.author;