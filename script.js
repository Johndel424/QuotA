// const apiKey = "mYHINSDmOjhNc8y2dyeCiDkM5XqluOtb8CArFRWJ"; // Replace with your actual API key
// const apiUrl = "https://quotes.rest/qod.json"; // API endpoint for the Quote of the Day

// async function fetchRandomQuote() {
//   try {
//     const response = await fetch(apiUrl + "?category=inspire", {
//       headers: {
//         "X-TheySaidSo-Api-Secret": apiKey
//       }
//     });

//     const data = await response.json();
//     const quote = data.contents.quotes[0];
//     const quoteDisplay = document.getElementById("quoteDisplay");
//     quoteDisplay.innerHTML = `"${quote.quote}" - ${quote.author}`;
//   } catch (error) {
//     console.error("Error fetching quote:", error);
//   }
// }

// const randomQuoteButton = document.getElementById("randomQuoteButton");
// randomQuoteButton.addEventListener("click", fetchRandomQuote);

// fetchRandomQuote();

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote =  () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        // console.log(item.content);
        // console.log(item.author);
        quote.innerText = item.content;
        author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);