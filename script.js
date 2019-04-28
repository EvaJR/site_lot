var counter = 1;
var nederlands = true;
var translateButton = document.getElementById('vertaal');
var navbar = document.querySelector('nav');


function changePosition(e) {
  e.style.zIndex = `${counter++}`;
}

function vertaal() {
  if (nederlands) {
  // var text = translateButton.textContent;
  translateButton.textContent = "Nederlands";
  nederlands = false;
  navbar.style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
  translateButton.style.backgroundColor = 'rgba(0, 0, 255, 0.9)'
} else {
  translateButton.textContent = "auf deutsch";
  nederlands = true;
  navbar.style.backgroundColor = 'rgba(0, 0, 255, 0.9)';
  translateButton.style.backgroundColor = 'rgba(255, 0, 0, 0.9)'
}

}
