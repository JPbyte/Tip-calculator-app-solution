
//variables
const bill = document.getElementById("numberbill");
const people = document.getElementById("numberpeople")
const error = document.querySelectorAll(".error")
const tip = document.querySelectorAll(".tip")
const valorFinal = document.querySelectorAll(".value")

let billValor = 0.0; // Valor Padrão
let tipValue = 0.15; //valor inicial
let peoplevalor = 1;//valor people

bill.addEventListener("input", billvalue);

people.addEventListener("input", peoplevalue);


//functions

function validate(value) {
    return isNaN(value)
};

function setColor(event) {
    tip.forEach(btn => {
        btn.classList.add("btn_active")
        //setar estado ativo
        if(event.target.innerHTML == btn.innerHTML) {
            btn.style.backgroundColor = "hsl(172, 67%, 45%)";
            tipValue = parseFloat(btn.innerHTML) / 100;
        } else {
            btn.style.backgroundColor = "hsl(183, 100%, 15%)"
        }
        calcular();
        console.log(tipValue)
    });
}


function billvalue() {
    
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
    
    billValor = parseFloat(bill.value);
    console.log(billvalue)
    calcular()
};


tip.forEach(btn => {
    btn.addEventListener("click", setColor)
});


function peoplevalue() {

    if (people.value.includes(',')) {
        people.value = people.value.replace(',' , '.')
    }
    if(validate(people.value.split(" ").join(""))) {
        people.style.border = "0.175rem red solid"
        error[1].textContent = "Number only, please"
        error[1].style.color = "red"
    } else {
        people.style.border = "0.175rem green solid"
        error[1].textContent = ""
    };

    peoplevalor = parseFloat(people.value);
    calcular();
    console.log(peoplevalor)
}

function calcular() {

    if(peoplevalor >= 1 ) {
        let ammout = billValor * tipValue / peoplevalor;
        let total = billValor * (tipValue + 1) / peoplevalor;
        valorFinal[0].innerHTML = '$' + ammout.toFixed(2);
        valorFinal[1].innerHTML = '$' + total.toFixed(2);
    }
}


