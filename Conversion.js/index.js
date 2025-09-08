const numEl = document.getElementById("number-el")
const convBtn = document.getElementById("convert-btn")
const lenEl = document.getElementById("length-result")
const volEl = document.getElementById("volume-result")
const massEl = document.getElementById("mass-result")
const saveBtn = document.getElementById("save-btn")
const savedList = document.getElementById("saved-list")



 
function render(value){
    value = numEl.value 
    console.log(value)
    volEl.innerHTML = `${value} Litres = ${(value / 3.785).toFixed(4)} gallons | ${value} gallons = ${(value *  3.785).toFixed(4)} litres`
    massEl.innerHTML = `${value} kilos = ${(value * 2.205).toFixed(4)} pounds | ${value} pounds = ${(value / 2.205).toFixed(4)} kilos`
    lenEl.innerHTML = `${value} Meters = ${(value * 3.281).toFixed(4)} feet | ${value} feet = ${(value / 3.281).toFixed(4)} meters`
    
}

// Button click funcitonality
convBtn.addEventListener("click", render)

saveBtn.addEventListener("click", () => {
    const value = Number(numEl.value)
    if (!value) return

    const li = document.createElement("li")
    li.textContent = `
      ${lenEl.textContent} | ${volEl.textContent} | ${massEl.textContent}
    `
    savedList.appendChild(li)
})


// maybe add local storage to practice using it e.g. store old conversion lets say 1kg = 2.2 lbs or 100m = xyz ft