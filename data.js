data = {
  spisokSlov: [
    "мороз",
    "океан",
    "гроза",
    "молот",
    "печка",
    "дождь",
    "котик",
    "крыша",
    "песок",
    "берег",
    "горка",
    "берет",
    "курок",
    "гроза",
    "бочка",
    "ягода",
    "сосна",
    "хвост",
    "плеть",
    "моряк",
  ],
};
// рандом слово из списка
function getRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
slovo = getRandomWord(data.spisokSlov);

const inputs1 = document.querySelectorAll(".input_setting1");
const inputs2 = document.querySelectorAll(".input_setting2");
const inputs3 = document.querySelectorAll(".input_setting3");
const inputs4 = document.querySelectorAll(".input_setting4");
const inputs5 = document.querySelectorAll(".input_setting5");
// 1 slovo
const examinationButton1 = document.querySelector(".examinationButton1");
inputs1.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    if (input.value.length === 1) {
      if (inputs1[index + 1]) {
        inputs1[index].blur();
        inputs1[index + 1].focus();
      }
    }
  });
});

examinationButton1.addEventListener("click", () => {
  resultWord = "";
  inputs1.forEach((input, index) => {
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
//2 slovo
const examinationButton2 = document.querySelector(".examinationButton2");
inputs2.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    if (input.value.length === 1) {
      if (inputs2[index + 1]) {
        inputs2[index].blur();
        inputs2[index + 1].focus();
      }
    }
  });
});

examinationButton2.addEventListener("click", () => {
  resultWord = "";
  inputs2.forEach((input, index) => {
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
// 3 slovo
const examinationButton3 = document.querySelector(".examinationButton3");
inputs3.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    if (input.value.length === 1) {
      if (inputs3[index + 1]) {
        inputs3[index].blur();
        inputs3[index + 1].focus();
      }
    }
  });
});

examinationButton3.addEventListener("click", () => {
  resultWord = "";
  inputs3.forEach((input, index) => {
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
// 4 slovo
const examinationButton4 = document.querySelector(".examinationButton4");
inputs4.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    if (input.value.length === 1) {
      if (inputs4[index + 1]) {
        inputs4[index].blur();
        inputs4[index + 1].focus();
      }
    }
  });
});

examinationButton4.addEventListener("click", () => {
  resultWord = "";
  inputs4.forEach((input, index) => {
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
// 5 slovo
const examinationButton5 = document.querySelector(".examinationButton5");
inputs5.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    if (input.value.length === 1) {
      if (inputs5[index + 1]) {
        inputs5[index].blur();
        inputs5[index + 1].focus();
      }
    }
  });
});

examinationButton5.addEventListener("click", () => {
  resultWord = "";
  inputs5.forEach((input, index) => {
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
