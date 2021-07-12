import {uniqueCardsArray} from "../constants/uniqueCardsArray";

export function shuffleCards() {
  const repeatingCards = [...uniqueCardsArray, ...uniqueCardsArray];
  const length = repeatingCards.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = repeatingCards[currentIndex];
    repeatingCards[currentIndex] = repeatingCards[randomIndex];
    repeatingCards[randomIndex] = temp;
  }
  return repeatingCards;
}
