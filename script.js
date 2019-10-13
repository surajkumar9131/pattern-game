var game = {
  count: 0,
  colors: ["#green", "#red", "#yellow", "#blue"],
  compSeq: [],
  playerSeq: []
};

function animation(color) {
  $(color).addClass("animate");
  setTimeout(function() {
    $(color).removeClass("animate");
  }, 500);
}

$("#start").click(function() {
  resetGame();
  $("#count-num").html("--");
  generateNext();
});

function resetGame() {
  game.compSeq = [];
  game.playerSeq = [];
  game.count = 0;
}

function generateNext() {
  game.count++;
  if (game.count < 10) {
    $("#count-num").html("0" + game.count);
  } else {
    $("#count-num").html(game.count);
  }
  game.compSeq.push(game.colors[Math.floor(Math.random() * 4)]);
  playSeq();
}

function playSeq() {
  var i = 0;
  var seq = setInterval(function() {
    animation(game.compSeq[i]);
    i++;
    if (i >= game.compSeq.length) {
      clearInterval(seq);
    }
  }, 700);
  game.playerSeq = [];
}

function addColorToPlayer(id) {
  var color = "#" + id;
  console.log(color);
  game.playerSeq.push(color);
  checkPlayerMove(color);
}

function checkPlayerMove(color) {
  if (
    game.playerSeq[game.playerSeq.length - 1] !==
    game.compSeq[game.playerSeq.length - 1]
  ) {
    setTimeout(function() {
      alert("Wrong move! Try again.");
    }, 500);
    setTimeout(function() {
      playSeq();
    }, 500);
  } else {
    var checkCorrect = game.playerSeq.length === game.compSeq.length;
    if (checkCorrect) {
      if (game.count === 10) {
        alert("You won!");
      } else {
        setTimeout(function() {
          generateNext();
        }, 500);
      }
    }
  }
}

$("#new-game").click(function() {
  resetGame();
  $("#count-num").html("--");
});
