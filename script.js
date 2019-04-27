var counter = 1;

function changePosition(e) {
  e.style.zIndex = `${counter++}`;
}
