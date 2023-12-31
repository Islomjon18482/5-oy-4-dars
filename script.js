const name = document.querySelector("#name")
const age = document.querySelector("#age")
const car = document.querySelector("#car")
const dec = document.querySelector("#dec")
const btn = document.querySelector("#btn")
const tbody = document.querySelector("tbody")

function tester(){
    if(!name.value){
        focus();
        name.style.outlineColor = "red";
        return false
    }
    if(!age.value || !Number(age.value)){
        age.style.outlineColor = "red";
        focus();
        return false
    }
    if(!car.value){
        car.style.outlineColor = "red";
        focus();
        return false
    }
    if(!dec.value){
        dec.style.outlineColor = "red";
        focus();
        return false
    }

    return true
}

function copier(){
    const user = {
        name: name.value,
        age: age.value,
        car: car.value,
        dec: dec.value
    }
    let local = []
    if(localStorage.getItem("info")){
        local =JSON.parse(localStorage.getItem("info")) 
    }
    local.push(user)
    localStorage.setItem("info", JSON.stringify(local))
}

function clean(){
    name.value = ""
    age.value = ""
    car.value = ""
    dec.value = ""
}

function creat(element){
    const tr = document.createElement("tr")
    const tdName = document.createElement("td")
    tdName.innerHTML = element.name
    const tdAge = document.createElement("td")
    tdAge.innerHTML = element.age
    const tdCar = document.createElement("td")
    tdCar.innerHTML = element.car
    const tdDec = document.createElement("td")
    tdDec.innerHTML = element.dec
    tr.appendChild(tdName)
    tr.appendChild(tdAge)
    tr.appendChild(tdCar)
    tr.appendChild(tdDec)
    return tr
}

document.addEventListener("DOMContentLoaded", function(){
    let item = []
    if(localStorage.getItem("info")){
        item =JSON.parse(localStorage.getItem("info")) 
    }
    if(item.length && tbody){
        for (const i of item) {
            let tr = creat(i);
            tbody.appendChild(tr)
        }
    }
    window.reload()
})

btn.addEventListener("click", function(){
    if(tester()){
        copier()
        clean()
    }
})