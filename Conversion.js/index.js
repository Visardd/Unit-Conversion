const numEl = document.getElementById("number-el")
const convBtn = document.getElementById("convert-btn")
const lenEl = document.getElementById("length-result")
const volEl = document.getElementById("volume-result")
const massEl = document.getElementById("mass-result")






function render(value){
    value = numEl.value 
    console.log(value)
    volEl.innerHTML = `${value} Litres = ${(value / 3.785).toFixed(4)} gallons | ${value} gallons = ${(value *  3.785).toFixed(4)} litres`
    massEl.innerHTML = `${value} kilos = ${(value * 2.205).toFixed(4)} pounds | ${value} pounds = ${(value / 2.205).toFixed(4)} kilos`
    lenEl.innerHTML = `${value} Meters = ${(value * 3.281).toFixed(4)} feet | ${value} feet = ${(value / 3.281).toFixed(4)} meters`
    
}

// Button click funcitonality
convBtn.addEventListener("click", function(){
    render()
})

// maybe add local storage to practice using it e.g. store old conversion lets say 1kg = 2.2 lbs or 100m = xyz ft