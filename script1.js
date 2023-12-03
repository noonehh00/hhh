const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "FUCK YOU!";
  gif.src =
    "https://media.giphy.com/media/26BRNKLUezD1NpsOc/giphy.gif";
    yesBtn.style.display = "none";
});

