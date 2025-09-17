const numEl = document.getElementById("number-el");
const convBtn = document.getElementById("convert-btn");
const lenEl = document.getElementById("length-result");
const volEl = document.getElementById("volume-result");
const massEl = document.getElementById("mass-result");
const saveBtn = document.getElementById("save-btn");
let savedList = document.getElementById("saved-list");
const delBtn = document.getElementById("del-btn");

let list = [];

function calculate(value) {
  const num = Number(value);
  return {
    volume: `${num} Litres = ${(num / 3.785).toFixed(
      4
    )} gallons | ${num} gallons = ${(num * 3.785).toFixed(4)} litres`,
    mass: `${num} kilos = ${(num * 2.205).toFixed(
      4
    )} pounds | ${num} pounds = ${(num / 2.205).toFixed(4)} kilos`,
    length: `${num} meters = ${(num * 3.281).toFixed(
      4
    )} feet | ${num} feet = ${(num / 3.281).toFixed(4)} meters`,
  };
}

function displayResults(value) {
  const results = calculate(value);
  volEl.innerHTML = results.volume;
  massEl.innerHTML = results.mass;
  lenEl.innerHTML = results.length;
}

function render(list) {
  let listItems = "";
  for (let i = 0; i < list.length; i++) {
    const results = calculate(list[i]);
    listItems += `
      <li>
        <p>${results.volume}</p>
        <p>${results.mass}</p>
        <p>${results.length}</p>
      </li>
    `;
  }
  savedList.innerHTML = listItems;
}

// Button click functionality
convBtn.addEventListener("click", () => {
  displayResults(numEl.value);
});

saveBtn.addEventListener("click", () => {
  if (numEl.value) {
    list.push(numEl.value);
    localStorage.setItem("conversions", JSON.stringify(list));
    render(list);
  }
});

delBtn.addEventListener("click", function () {
  localStorage.clear();
  list = [];
  savedList.innerHTML = "";
});

// Load from localStorage on page load
window.addEventListener("load", () => {
  const saved = JSON.parse(localStorage.getItem("conversions"));
  if (saved) {
    list = saved;
    render(list);
  }
});
