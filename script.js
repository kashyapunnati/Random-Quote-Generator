const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Do something today that your future self will thank you for.",
        author: "Sean Patrick Flanery"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        text: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    }
];

let lastQuoteIndex = -1;

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const quoteButton = document.getElementById("quoteBtn");
const shareButton = document.getElementById("shareBtn");

function showRandomQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);

    lastQuoteIndex = randomIndex;

    quoteElement.textContent = `"${quotes[randomIndex].text}"`;
    authorElement.textContent = `— ${quotes[randomIndex].author}`;
}

quoteButton.addEventListener("click", showRandomQuote);

shareButton.addEventListener("click", async function () {
    const quote = `${quoteElement.textContent} ${authorElement.textContent}`;

    if (navigator.share) {
        await navigator.share({
            title: "Random Quote",
            text: quote
        });
    } else {
        await navigator.clipboard.writeText(quote);
        alert("Quote copied to clipboard!");
    }
});