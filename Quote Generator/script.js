let quote = document.getElementById('quote');
let author = document.getElementById('author');
let newQuote = document.getElementById('new-quote');
let tweet = document.getElementById('tweet');

const api_url = 'https://dummyjson.com/quotes/random';

async function getQuote(url){
    const response = await fetch(url);
    let data = await response.json();
    quote.innerText = data.quote;
    author.innerText = data.author;
}

newQuote.addEventListener('click',() => {
    getQuote(api_url);
})

tweet.addEventListener('click', () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerText} By ${author.innerText}`, "Tweet Window", "width=600, height=300");
})

getQuote(api_url);