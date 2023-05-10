import quotes from './quotes';

type QuotesKey = 'anime' | 'name';

const searchKey = (key: QuotesKey, i: number, value: string) => {
  if (
    quotes[i][key]?.toLowerCase() === value?.toLowerCase() ||
    quotes[i][key]?.toLowerCase()?.includes(value?.toLowerCase()) ||
    quotes[i][key]?.trim()?.toLowerCase()?.includes(value?.trim()?.toLowerCase()) ||
    quotes[i][key]?.toLowerCase()?.includes(value?.split(' ')?.[0]?.toLowerCase()) ||
    quotes[i][key]?.toLowerCase()?.includes(value?.split(' ')?.[1]?.toLowerCase())
  )
    return true;
  return false;
}

const searchQuotes = (key: QuotesKey, value: string, limit?: number) => {
  let quotesArr = [];
  for (let i = 0; i < quotes.length; i++) {
    if (searchKey(key, i, value)) {
      quotesArr.push({ ...quotes[i] });
    }
  }
  if (quotesArr.length === 0) return 'No quotes found 🤧';
  if (!limit)
    return quotesArr[Math.floor(Math.random() * quotesArr.length)];
  return quotesArr.slice(0, limit < quotesArr.length && limit > 0 ? limit : quotesArr.length);
}

export const randomQuote = (limit?: number) => {
  if (!limit) return quotes[Math.floor(Math.random() * quotes.length)];
  return quotes.slice(0, limit < quotes.length && limit > 0 ? limit : quotes.length);
}

export const randomQuoteByAnime = (anime: string, limit?: number) => {
  const animeQuotes = searchQuotes('anime', anime, limit);
  return animeQuotes;
}

export const randomQuoteByCharacter = (character: string, limit?: number) => {
  const charQuotes = searchQuotes('name', character, limit);
  return charQuotes;
}

// console.log(randomQuote(), randomQuoteByAnime('Naruto'), randomQuoteByCharacter('Goku', 10));