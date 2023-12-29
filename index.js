var arr = [];
var userClick = 0;
function gameStart() {
  const sound = new Audio("sounds/tom-1.mp3");
  sound.play();
  $("h1").text("Level " + (arr.length + 1));
  let n = Math.floor(Math.random() * 4) + 1;
  arr.push(n);
  $(".btn" + n).animate({ opacity: 0.5 });
  window.setTimeout(function () {
    $(".btn" + n).animate({ opacity: 1 });
  }, 1000);
}
function gameEnds() {
  $("h1").text("Game Over,Press any key to restart");
  const sound = new Audio("sounds/tom-2.mp3");
  sound.play();
  arr = [];
  userClick = 0;
}
$(".btn").click(function () {
  for (let i = 0; i < arr.length; i++) {
    console.log("Array -> " + arr[i]);
  }

  const sound = new Audio("sounds/tom-3.mp3");
  sound.play();
  if (
    userClick < arr.length &&
    this.classList.contains("btn" + arr[userClick])
  ) {
    userClick++;
    if (userClick == arr.length) {
      userClick = 0;
      gameStart();
    }
  } else {
    gameEnds();
  }
});

$(document).keypress(function () {
  arr = [];
  userClick = 0;
  gameStart();
});
