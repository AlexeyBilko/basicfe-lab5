// Task 1 

let fullNameRule = /[a-zA-Zа-яА-ЯІіЇїҐґЄє]{1,15}[ ][A-ZА-ЯІЇҐЄ][.][ ][A-ZА-ЯІЇҐЄ]\./m;
let groupRule = /[A-ZА-ЯІЇҐЄ]{2}\-[0-9][0-9]/m;
let phoneNumberRule = /^[(][0-9]{3}[)][-][0-9]{3}[-][0-9]{2}[-][0-9]{2}$/;
let addressRule = /^[м][.][ ][a-zA-Zа-яА-ЯІіЇїҐґЄє-]+/;
let emailRule = /^\w+@\w+\.com$/;

const fullNameInput = document.getElementById("fullName");
const groupInput = document.getElementById("group");
const phoneNumberINput = document.getElementById("phoneNumber");
const addressInput = document.getElementById("address");
const emailInput = document.getElementById("email");

const enteredFullName = document.getElementById("enteredFullName");
const enteredGroup = document.getElementById("enteredGroup");
const enteredPhoneNumber = document.getElementById("enteredPhoneNumber");
const enteredAddress = document.getElementById("enteredAddress");
const enteredEmail = document.getElementById("enteredEmail");

const form = document.getElementsByClassName("validatedForm");

function validate() {
    let ifSuccessful = true;
    fullNameInput.classList.remove("inputError");
    groupInput.classList.remove("inputError");
    phoneNumberINput.classList.remove("inputError");
    addressInput.classList.remove("inputError");
    emailInput.classList.remove("inputError");
    if (!fullNameRule.test(fullNameInput.value)) {
        fullNameInput.classList.add("inputError");
        ifSuccessful = false;
    }
    if (!groupRule.test(groupInput.value)) {
        groupInput.classList.add("inputError");
        ifSuccessful = false;
    }
    if (!phoneNumberRule.test(phoneNumberINput.value)) {
        phoneNumberINput.classList.add("inputError");
        ifSuccessful = false;
    }
    if (!addressRule.test(addressInput.value)) {
        addressInput.classList.add("inputError");
        ifSuccessful = false;
    }
    if (!emailRule.test(emailInput.value)) {
        emailInput.classList.add("inputError");
        ifSuccessful = false;
    }
    if (ifSuccessful) {
        enteredFullName.innerHTML = fullNameInput.value;
        enteredGroup.innerHTML = groupInput.value;
        enteredPhoneNumber.innerHTML = phoneNumberINput.value;
        enteredAddress.innerHTML = addressInput.value;
        enteredEmail.innerHTML = emailInput.value; 
        form.clea
    }
    else {
        alert("Некоректні дані!");
        ifSuccessful = true;
    }
}

//Task 2
const cellByVariant = document.getElementById("cellByVariant");
const chosenColor = document.getElementById("chosenColor");
const cells = document.querySelectorAll("td");



cellByVariant.addEventListener("mouseover", () => {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.floor(Math.random() * maxVal).toString(16); 
    let randomBackGroundColor = randomNumber.padStart(6, 0); 
    cellByVariant.style.background = "#" + randomBackGroundColor;
});


cellByVariant.addEventListener("click", () => {
    cellByVariant.style.background = chosenColor.value;
});

cellByVariant.addEventListener("dblclick", () => {
    var table = document.getElementById("tableWithCells");
    var columnsCount = table.rows[0].cells.length;
    for (let index = (10 % columnsCount) - 1; index < columnsCount; index = index + 2) {
        table.rows[Math.trunc((10 / columnsCount))].cells[index].style.backgroundColor = chosenColor.value;;
    }
});