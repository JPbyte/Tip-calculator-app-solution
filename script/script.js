
//variables
const bill = document.querySelector("#numberbill")
const people = document.querySelector("#numberpeople")
const percent = document.querySelectorAll(".percent_number")
const custom = document.querySelector(".percent_number_custom")
const error = document.querySelectorAll(".error")


//Functions
function number(value){
    return !isNaN(value)
}

bill.addEventListener("change", () => {
    divisao()
    if(number(bill.value.split(" ").join(""))) {
        bill.style.border = "0.17rem green solid"
        error[0].textContent = ""
    } else {
        bill.style.border = "0.17rem red solid"
        bill.style.placeholder = "00.00"
        error[0].textContent = "Number only"
        error[0].style.color = "red"
    } 
})

people.addEventListener("change", () => {

    if(number(people.value.split(" ").join(""))) {
        people.style.border = "0.17rem green solid"
        error[1].textContent = ""
    } else {
        people.style.border = "0.17rem red solid"
        error[1].textContent = "Number only"
        error[1].style.color = "red"
    }
})

percent[0].addEventListener("click", () => {
    percent[0].style.backgroundColor = "hsl(172, 67%, 45%"
    percent[1].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[2].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[3].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[4].style.backgroundColor = "hsl(183, 100%, 15%)"
})

percent[1].addEventListener("click", () => {
    percent[1].style.backgroundColor = "hsl(172, 67%, 45%"
    percent[0].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[2].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[3].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[4].style.backgroundColor = "hsl(183, 100%, 15%)"
})

percent[2].addEventListener("click", () => {
    percent[2].style.backgroundColor = "hsl(172, 67%, 45%"
    percent[1].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[0].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[3].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[4].style.backgroundColor = "hsl(183, 100%, 15%)"
})

percent[3].addEventListener("click", () => {
    percent[3].style.backgroundColor = "hsl(172, 67%, 45%"
    percent[1].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[2].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[0].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[4].style.backgroundColor = "hsl(183, 100%, 15%)"
})

percent[4].addEventListener("click", () => {
    percent[4].style.backgroundColor = "hsl(172, 67%, 45%"
    percent[1].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[2].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[3].style.backgroundColor = "hsl(183, 100%, 15%)"
    percent[0].style.backgroundColor = "hsl(183, 100%, 15%)"
})