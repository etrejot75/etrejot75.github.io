// Select the new quote button using a querySelector. Assign it to a new variable.
const pokemonImg = document.querySelector("pokemon-img");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonType= document.querySelector("#pokemon-type");
const pokemonBtn = document.querySelector("#js-new-pokemon");

// Write an event listener to check if the button is clicked. When the button is clicked, run a function called "getQuote".
pokemonBtn.addEventListener("click", getPokemon);

const endpoint = "https://pokeapi.co/api/v2/pokemon/${id}";
// Write the function declaration, and check the button click works by returning a message in the console everytime the button is clicked.

let json = ""; //this make json a global variable -- which means we can change in our function getQuote and then also access it in displayAnswer();

async function getQuote() { 
    const answerArea = document.querySelector('#js-answer-text');
    answerArea.textContent = "";
    // console.log("testing getQuote");
    // Change the getQuote function to use the fetch method to get a random quote from that endpoint.
    // If successful, output the quote to the console
    // If it fails, output an error message to the console AND via alert

    try{ 
        const response = await fetch(endpoint);
        if(!response.ok) { 
            throw Error (response.statusText);
        }
    
    json = await response.json();
    //console.log(json.question);
    //console.log(json.answer);
    displayQuote(json.question);

    } catch (err) { 
        console.log(err); 
        alert("Failed to fetch a new trivia");
    }
}

function displayAnswer(quote){
    const answerText = json.answer;
    const answerArea = document.querySelector("#js-answer-text");
    answerArea.textContent = answerText;

}

function displayQuote(quote){ 
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

getQuote();

// Add a new variable that holds the API endpoint: 
// https://trivia.cyberwisp.com/getrandomchristmasquestion


// Write a second function called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text.
// Adjust getQuote to run displayQuote at the proper place in the code.
// Notice when you refresh that a quote isn't displayed. Fix that.