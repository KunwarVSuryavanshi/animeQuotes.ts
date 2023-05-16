# Anime Quotes

## What is this?

NPM package that can be used to get quotes from Anime.
This package is built on the top of FrostIn's anime quotes data, where I added more quotes by scraping websites (logic for which is there in <a target="_blank" href="https://github.com/KunwarVSuryavanshi/anime-quotes-data">anime-quotes-data repo</a>). <br/>
As I find few more sites/time to scrape data for it, I'll update the repo their and use its data in this package. If you want to build your own api, you can use the csv file that is there in quotes data repo or simply host the one that I have built and use it.
<br/>
Currently this repo has near to `20K` quotes.

## Install

`npm install @kunwarji/anime-quotes`

## Usage

```javascript
import animeQuotes from "@kunwarji/anime-quotes";

// Get random quote
console.log(animeQuotes.randomQuote());

// Get 10 random quote
console.log(animeQuotes.randomQuote(10));

// Get quote by anime
console.log(animeQuotes.randomQuoteByAnime("naruto"));

// Get 10 quotes by anime
console.log(animeQuotes.randomQuoteByAnime("naruto", 10));

// Get quote by character
console.log(animeQuotes.randomQuoteByCharacter("itachi uchiha"));

// Get 20 quotes by character
console.log(animeQuotes.randomQuoteByCharacter("itachi uchiha", 20));
```

## Example Object

```json
{
	"anime": "Yahari Ore No Seishun Love Come Wa Machigatteiru",
	"id": 4462,
	"name": "Hachiman Hikigaya",
	"quote": "Hard work betrays none, but dreams betray many."
}
```
