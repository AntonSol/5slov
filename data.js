data = {
  spisokSlov: [
    "плоть",
    "весна",
    "сталь",
    "книга",
    "ложка",
    "музык",
    "берег",
    "город",
    "леска",
    "мячик",
    "печка",
    "рыбак",
    "сонет",
    "трава",
    "узник",
    "флаги",
    "холод",
    "цветы",
    "часть",
    "шумок",
  ],
};
function getRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
const slovo = getRandomWord(data.spisokSlov);
function massivIzSlova(word) {
  for (i = 0; i < word.length; i++) {
    massivIzSlova.push(word[i]);
  }
}
console.log(massivIzSlova(data.spisokSlov));
