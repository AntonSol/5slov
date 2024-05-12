data = {
  spisokSlov: ["книга", "слово"],
};
// рандом слово из списка
function getRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
slovo = getRandomWord(data.spisokSlov);


const inputs = document.querySelectorAll(".input_setting");
const examinationButton = document.querySelector(".examinationButton");
inputs.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    if (input.value.length === 1) {
      if (inputs[index + 1]) {
        inputs[index].blur();
        inputs[index + 1].focus();
      }
    }
  });
});

examinationButton.addEventListener("click", () => {
  resultWord = "";
  inputs.forEach((input, index) => {
    resultWord += input.value;
    if (slovo[index] === input.value) {
      input.classList.add("confirm");
      return;
    }
    if (slovo.includes(input.value)) {
      input.classList.add("outOfPlace");
      return;
    }
    if (!slovo.includes(input.value)) {
      input.classList.add("empty");
      return;
    }
  });
});
