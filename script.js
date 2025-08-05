function greetUser() {
  const name = document.getElementById("nameInput").value;

  const greeting = "I love you Chelse Laberinto!";
  const followgreeting = "Kahit anong pangalan lagay mo jan, ikaw parin mahal ko!";

  document.getElementById("greetingMessage").innerHTML = greeting;
  document.getElementById("followMessage").innerHTML = followgreeting;
}
