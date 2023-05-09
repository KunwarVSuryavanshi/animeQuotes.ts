import quotes from './quotes';

type QuotesKey = 'anime' | 'name';

const searchQuotes = (key: QuotesKey, value: string, limit?: number) => {
  let quotesArr = [];
  for (let i = 0; i < quotes.length; i++) {
    if (quotes[i][key].toLowerCase() === value.toLowerCase()) {
      quotesArr.push(quotes[i]);
    }
  }
  if (!limit)
    return quotesArr[Math.floor(Math.random() * quotesArr.length)];
  return quotesArr.slice(0, limit < quotesArr.length && limit > 0 ? limit : quotesArr.length);
}

const randomQuote = (limit?: number) => {
  if (!limit) return quotes[Math.floor(Math.random() * quotes.length)];
  return quotes.slice(0, limit < quotes.length && limit > 0 ? limit : quotes.length);
}

const randomQuoteByAnime = (anime: string, limit?: number) => {
  const animeQuotes = searchQuotes('anime', anime, limit);
  return animeQuotes;
}

const randomQuoteByCharacter = (character: string, limit?: number) => {
  const charQuotes = searchQuotes('name', character, limit);
  return charQuotes;
}

console.log(randomQuote(), randomQuoteByAnime('Naruto'), randomQuoteByCharacter('Naruto'));