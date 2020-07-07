const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

function dragStart() {
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));

  this.classList.add("is-dragging");
}

// function drag(event) {

// }

function dragEnd() {
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
  this.classList.remove("is-dragging");
}

cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  // card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragEnd);
});

// function dragEnter(event) {
//   console.log("> Dropzone Entered a card", event);
// }

function dragOver() {
  this.classList.add("over");

  const cardBeingDragged = document.querySelector(".is-dragging");
  console.log("card", cardBeingDragged);

  this.appendChild(cardBeingDragged);
}
function dragLeave() {
  this.classList.remove("over");
}

function drop() {
  this.classList.remove("over");
}

dropzones.forEach((dropzone) => {
  // dropzone.addEventListener("dragenter", dragEnter);
  dropzone.addEventListener("dragover", dragOver);
  dropzone.addEventListener("dragleave", dragLeave);
  dropzone.addEventListener("drop", drop);
});
