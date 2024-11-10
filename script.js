const players = {
  easy: [
    { path: "Sporting CP -> Manchester United -> Real Madrid -> Juventus -> Manchester United", player: "Cristiano Ronaldo", image: "ronaldo.jpg", hint: "Multiple Ballon d'Or winner" },
    { path: "Barcelona -> PSG", player: "Lionel Messi", image: "messi.jpg", hint: "Barcelona legend, wears number 10" },
    { path: "Everton -> Manchester United -> LA Galaxy", player: "Wayne Rooney", image: "rooney.jpg", hint: "Manchester United's all-time top scorer" },
    { path: "Chelsea -> Barcelona -> Milan", player: "Thierry Henry", image: "henry.jpg", hint: "Premier League legend, Arsenal's top scorer" },
    { path: "Arsenal -> Manchester City -> Juventus", player: "Gabriel Jesus", image: "jesus.jpg", hint: "Brazilian forward with a strong Premier League career" },
    { path: "Liverpool -> Bayern Munich", player: "Sadio Mané", image: "mane.jpg", hint: "Explosive winger known for speed and skill" },
    { path: "AC Milan -> Chelsea -> PSG", player: "Zlatan Ibrahimović", image: "ibrahimovic.jpg", hint: "Swedish legend, known for his confidence" },
    { path: "Real Madrid -> Tottenham -> Juventus", player: "Gareth Bale", image: "bale.jpg", hint: "Winger with blistering pace and a knack for big moments" },
    { path: "Paris Saint-Germain -> Barcelona", player: "Neymar", image: "neymar.jpg", hint: "Brazilian superstar known for flair and dribbling" },
    { path: "Manchester City -> Bayern Munich -> Chelsea", player: "Pep Guardiola", image: "guardiola.jpg", hint: "Midfield maestro turned manager" },
  ],
  medium: [
    { path: "Liverpool -> Real Madrid -> Bayern Munich", player: "Xabi Alonso", image: "alonso.jpg", hint: "Spanish midfielder known for long passes" },
    { path: "Manchester United -> Everton -> PSG", player: "Morgan Schneiderlin", image: "schneiderlin.jpg", hint: "Defensive midfielder, played in the Premier League" },
    { path: "Napoli -> Juventus -> PSG", player: "Gonzalo Higuaín", image: "higuain.jpg", hint: "Argentine striker, prolific goal scorer" },
    { path: "Tottenham -> Manchester City", player: "Kyle Walker", image: "walker.jpg", hint: "Fast right-back with a solid Premier League career" },
    { path: "Valencia -> Chelsea -> Arsenal", player: "César Azpilicueta", image: "azpilicueta.jpg", hint: "Versatile defender, can play full-back or center-back" },
    { path: "Roma -> Leicester City", player: "Riyad Mahrez", image: "mahrez.jpg", hint: "Algerian winger known for his dribbling and pace" },
    { path: "Wolves -> Barcelona", player: "Adama Traoré", image: "traore.jpg", hint: "Known for his blistering speed and physicality" },
    { path: "Napoli -> Arsenal -> Chelsea", player: "David Luiz", image: "luiz.jpg", hint: "Brazilian center-back with a flair for attacking" },
    { path: "Atletico Madrid -> Chelsea", player: "Diego Costa", image: "costa.jpg", hint: "Spanish striker known for his physical style of play" },
    { path: "Liverpool -> Wolverhampton Wanderers", player: "Diogo Jota", image: "jota.jpg", hint: "Portuguese forward with an eye for goal" },
  ],
  hard: [
    { path: "Ajax -> Barcelona -> LA Galaxy", player: "Frank Rijkaard", image: "rijkaard.jpg", hint: "Dutch midfielder turned manager" },
    { path: "Manchester City -> Juventus -> Barcelona", player: "Sergio Agüero", image: "aguero.jpg", hint: "Argentine striker with a legendary Premier League career" },
    { path: "Sevilla -> Barcelona -> PSG", player: "Jérémy Mathieu", image: "mathieu.jpg", hint: "Defender with stints at major clubs across Europe" },
    { path: "Inter Milan -> Chelsea -> Liverpool", player: "Samuel Eto'o", image: "etoo.jpg", hint: "Cameroonian striker with an illustrious career in Europe" },
    { path: "Stuttgart -> Bayern Munich -> Real Madrid", player: "Hamit Altıntop", image: "altintop.jpg", hint: "Turkish midfielder, known for his set-piece skills" },
    { path: "AC Milan -> PSG -> Chelsea", player: "Thiago Silva", image: "silva.jpg", hint: "Brazilian center-back with an incredible career at top clubs" },
    { path: "Benfica -> Liverpool -> Barcelona", player: "Javi García", image: "garcia.jpg", hint: "Spanish midfielder, excellent defensively" },
    { path: "Sunderland -> Manchester United", player: "John O'Shea", image: "oshea.jpg", hint: "Defender known for his time at Manchester United" },
    { path: "Arsenal -> Manchester City", player: "Samir Nasri", image: "nasri.jpg", hint: "French midfielder with technical skills" },
    { path: "Bayer Leverkusen -> Chelsea -> Leicester City", player: "N'Golo Kanté", image: "kante.jpg", hint: "Midfielder with extraordinary work rate" },
  ],
};

let currentLevel = [];
let currentPathIndex = 0;
let score = 0;

function selectLevel(level) {
  document.getElementById("start-page").style.display = "none";
  document.getElementById("game-page").style.display = "block";
  currentLevel = players[level];
  loadCareerPath();
}

function loadCareerPath() {
  const careerPath = currentLevel[currentPathIndex].path;
  const careerPathText = `Career Path: ${careerPath}`;
  document.getElementById("career-path").textContent = careerPathText;
  document.getElementById("player-guess").value = "";
  document.getElementById("result-message").textContent = "";
  document.getElementById("best-moment").style.display = "none";
  document.getElementById("next-player-btn").style.display = "none";
  document.getElementById("player-image").innerHTML = "";
}

function checkGuess() {
  const guess = document.getElementById("player-guess").value.trim().toLowerCase();
  const correctAnswer = currentLevel[currentPathIndex].player.toLowerCase();

  if (guess === correctAnswer) {
    score++;
    document.getElementById("score").textContent = score;
    document.getElementById("result-message").textContent = "Correct!";
    document.getElementById("result-message").style.color = "green";
    document.getElementById("result-message").style.animation = "correctBounce 0.5s";
    displayPlayerImage();
    document.getElementById("best-moment").textContent = `Best Career Moment: ${currentLevel[currentPathIndex].hint}`;
    document.getElementById("best-moment").style.display = "block";
    document.getElementById("next-player-btn").style.display = "block";
  } else {
    document.getElementById("result-message").textContent = "Try Again!";
    document.getElementById("result-message").style.color = "red";
    document.getElementById("result-message").style.animation = "incorrectShake 0.5s";
  }
}

function displayPlayerImage() {
  const imgSrc = currentLevel[currentPathIndex].image;
  const imgElement = document.createElement("img");
  imgElement.src = imgSrc;
  imgElement.alt = "Player Image";
  imgElement.style.display = "block";
  document.getElementById("player-image").appendChild(imgElement);
}

function revealHint() {
  const hint = currentLevel[currentPathIndex].hint;
  alert(`Hint: ${hint}`);
}

function revealPlayer() {
  const player = currentLevel[currentPathIndex].player;
  document.getElementById("result-message").textContent = `The player was ${player}.`;
  document.getElementById("result-message").style.color = "orange";
  displayPlayerImage();
  document.getElementById("next-player-btn").style.display = "block";
}

function nextPlayer() {
  currentPathIndex = (currentPathIndex + 1) % currentLevel.length;
  loadCareerPath();
}

function backToMenu() {
  document.getElementById("start-page").style.display = "block";
  document.getElementById("game-page").style.display = "none";
  currentPathIndex = 0;
  score = 0;
  document.getElementById("score").textContent = score;
}
