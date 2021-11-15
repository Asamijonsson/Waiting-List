let registerName = document.querySelector("#name");
let registerBtn = document.querySelector(".registerButton");
let waitingList = document.querySelector("#waitingPeople");
let allWaitingPeople = document.querySelector("#waitingLine");

let waitingPeople = 0;
let waitingNameInput = document.querySelector("#waitingList");
let inputName = document.querySelector("#name");
let registration = document.querySelector("#registerName");

let fastTrackBtn = document.createElement("button");
fastTrackBtn.setAttribute("class", "fastTrack");
fastTrackBtn.textContent = "Fast Track";

registration.appendChild(fastTrackBtn);

let finishButton = document.createElement("button");
finishButton.textContent = "Checka in bagage";
registration.appendChild(finishButton);

let message = document.querySelector("#message");

fastTrackBtn.addEventListener("click", () => {
  let listItem2 = document.createElement("li");
  listItem2.textContent = inputName.value;
  waitingList.prepend(listItem2);
  waitingPeople++;
  inputName.value = "";
});

registerBtn.addEventListener("click", () => {
  let listItem = document.createElement("li");
  listItem.textContent = inputName.value;
  waitingList.appendChild(listItem);
  waitingPeople++;
  inputName.value = "";
});

finishButton.addEventListener("click", () => {
  if (waitingPeople !== 0) {
    waitingList.removeChild(waitingList.children[0]);
    waitingPeople--;
  } else {
    allWaitingPeople.appendChild(message);
  }
});

[
  document.querySelector(".fastTrack"),
  document.querySelector(".registerButton"),
].forEach((msg) => {
  msg.addEventListener("click", () => allWaitingPeople.removeChild(message));
});
