const container = document.querySelector(".container");
const slider = document.getElementById("myRange");
const output = document.getElementById("output");
output.innerText = `${slider.value} x ${slider.value}`;
displayGrid(slider.value);

slider.oninput = function () {
  output.innerHTML = `${this.value} x ${this.value}`;
  container.innerHTML = "";
  displayGrid(this.value);
};

console.log(container);

let mousedown = false;
document.body.onmousedown = () => (mousedown = true);
document.body.onmouseup = () => (mousedown = false);
console.log(mousedown);

function changeColor(e) {
  if (e.type == "mouseover" && !mousedown || e.target.style.backgroundColor == "black") return;
  e.target.style.backgroundColor = "black";
}

function displayGrid(size) {
  const width = container.clientWidth;
  container.style.gridTemplateColumns = `repeat(${size},1fr)`;
  container.style.gridTemplateRows = `repeat(${size},1fr)`;
  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.width = `${width / size}px`;
    pixel.style.height = `${width / size}px`;
    pixel.addEventListener("mousedown", changeColor);
    pixel.addEventListener("mouseover", changeColor);
    container.appendChild(pixel);
  }
}
