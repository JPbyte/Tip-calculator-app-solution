
//variables
const bill = document.getElementById("numberbill");
const error = document.querySelectorAll(".error")
const tip = document.querySelectorAll(".tip")


bill.addEventListener("input", billvalue);

let billValor = 0.0; // Valor Padrão


//functions

function validate(value) {
    return isNaN(value)
}

function billvalue() {
    billvalue = parseFloat(bill.value)
    console.log(billvalue)

    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',' , '.')
    }
    if(validate(bill.value.split(" ").join(""))) {
        bill.style.border = "0.175rem red solid"
        error[0].textContent = "Number only, please"
        error[0].style.color = "red"
    } else {
        bill.style.border = "0.175rem green solid"
        error[0].textContent = ""
    }
}

console.log(bill)

tip.forEach(btn => {
    btn.addEventListener("click", setColor)
})


