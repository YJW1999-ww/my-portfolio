const myHometown = document.getElementById("about-my-hometown");
const homeTownPhoto = document.getElementById("hometownphoto");
const favoriteFood = document.getElementById("about-my-favorite-food");
const mySchool = document.getElementById("about-my-school");
const myPet = document.getElementById("about-my-pet");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const feedback = document.getElementById("feedback");

choice1.onclick = function () {
  feedback.textContent = "バナナ？嫌だ。";
};
choice2.onclick = function () {
  feedback.textContent = "ちょっと残念だが、ドリアンも好き！";
};
choice3.onclick = function () {
  feedback.textContent = "正解！大好きだ！";
};

const choose = function (choiceString) {
  if (choiceString === "バナナ") {
    feedback.textContent = "バナナ？嫌だ。";
  } else if (choiceString === "ドリアン") {
    feedback.textContent = "ちょっと残念だが、ドリアンも好き！";
  } else {
    feedback.textContent = "正解！大好きだ！";
  }
};

choice1.onclick = function () {
  choose("バナナ");
};

choice2.onclick = function () {
  choose("ドリアン");
};

choice3.onclick = function () {
  choose("ドラゴンフルーツ");
};
