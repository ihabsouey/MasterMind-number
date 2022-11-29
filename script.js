var randomNumber = Math.floor(Math.random() * 9000) + 1000;
digit1 = Math.floor(randomNumber / 1000) % 10;
digit2 = Math.floor(randomNumber / 100) % 10;
digit3 = Math.floor(randomNumber / 10) % 10;
digit4 = randomNumber % 10;

function hasDuplicateDigits(d1, d2, d3, d4) {

    if (d1 == d2 || d1 == d3 || d1 == d4) {
        return true;
    }
    if (d2 == d3 || d2 == d4) {
        return true;
    }
    if (d3 == d4) {
        return true;
    }
    return false;
}

while (hasDuplicateDigits(digit1, digit2, digit3, digit4)) {

    randomNumber = Math.floor(Math.random() * 9000) + 1000;
    digit1 = Math.floor(randomNumber / 1000) % 10;
    digit2 = Math.floor(randomNumber / 100) % 10;
    digit3 = Math.floor(randomNumber / 10) % 10;
    digit4 = randomNumber % 10;
}


console.log(randomNumber);

digit1Input = document.getElementById("d1");
digit2Input = document.getElementById("d2");
digit3Input = document.getElementById("d3");
digit4Input = document.getElementById("d4");

var i = 1;

function guess() {
    if (i > 10) {
        alert("You lose! The number is " + randomNumber);
        h1lose = document.createElement("h2");
        h1lose.textContent = "Game Over !  the right number is "+randomNumber;
        document.getElementsByClassName("cardHeader")[0].innerHTML = "";
        document.getElementsByClassName("cardHeader")[0].appendChild(h1lose);
        document.getElementsByClassName("submitButton")[0].setAttribute("disabled", "disabled");
        document.body.style.backgroundColor = "red";
        return;
    }
    var guess1 = digit1Input.value;
    var guess2 = digit2Input.value;
    var guess3 = digit3Input.value;
    var guess4 = digit4Input.value;

    if (guess1 == "" || guess2 == "" || guess3 == "" || guess4 == "") {
        alert("Please enter a 4 digit number");
        return;
    }
    if (hasDuplicateDigits(guess1, guess2, guess3, guess4)) {
        alert("You can't have duplicate digits in your guess!");
        return;
    }

    existAndCorrectNumber = existAndCorrect(guess1, guess2, guess3, guess4);
    existAndWrongNumber = existAndWrong(guess1, guess2, guess3, guess4);

    h3Try = document.createElement("h3")
    h3Try.textContent = "try : " + i;
    i++;
    divtryNumber = document.createElement("div");
    divtryNumber.appendChild(h3Try);

    divInputZoneR = document.createElement("div")
    divInputZoneR.classList.add("inputZoneR")

    input1 = document.createElement("input")
    input1.value = guess1
    input1.classList.add("digitR");
    input1.setAttribute("readonly", "readonly");
    divInputZoneR.appendChild(input1);
    input2 = document.createElement("input")
    input2.value = guess2
    input2.classList.add("digitR");
    input2.setAttribute("readonly", "readonly");
    divInputZoneR.appendChild(input2);
    input3 = document.createElement("input")
    input3.value = guess3
    input3.classList.add("digitR");
    input3.setAttribute("readonly", "readonly");
    divInputZoneR.appendChild(input3);
    input4 = document.createElement("input")
    input4.value = guess4
    input4.classList.add("digitR");
    input4.setAttribute("readonly", "readonly");
    divInputZoneR.appendChild(input4);

    divResultZone = document.createElement("div")
    divResultZone.classList.add("resultZone")
    divResultZone.innerHTML = existAndCorrectNumber + "<span class='xy'> X</span> <br> " + + existAndWrongNumber + " <span class='xy'>Y</span>";


    divTry = document.createElement("div")
    divTry.classList.add("try")
    divTry.appendChild(divtryNumber)
    divTry.appendChild(divInputZoneR);
    divTry.appendChild(divResultZone);


    tryContainer = document.getElementsByClassName("tryContainer")[0].appendChild(divTry);

    if (existAndCorrectNumber == 4) {
        h1Won = document.createElement("h2")
        h1Won.textContent = cheatedOnce? "Congratulation cheater ! " : "Congratulation Winner ! ";
        document.getElementsByClassName("cardHeader")[0].innerHTML = "";
        document.getElementsByClassName("cardHeader")[0].appendChild(h1Won);
        document.getElementsByClassName("submitButton")[0].setAttribute("disabled", "disabled");
        document.body.style.backgroundColor = "green";

        alert("Winner !");
    }

}
function existAndCorrect(guess1, guess2, guess3, guess4) {
    var existAndCorrectNumber = 0;
    if (digit1 == guess1) {
        existAndCorrectNumber++;
    }
    if (digit2 == guess2) {
        existAndCorrectNumber++;
    }
    if (digit3 == guess3) {
        existAndCorrectNumber++;
    }
    if (digit4 == guess4) {
        existAndCorrectNumber++;
    }
    return existAndCorrectNumber;
}
function existAndWrong(guess1, guess2, guess3, guess4) {
    var existAndWrongNumber = 0;
    if ((guess1 == digit2 || guess1 == digit3 || guess1 == digit4)) {
        existAndWrongNumber++;
    }
    if ((guess2 == digit1 || guess2 == digit3 || guess2 == digit4)) {
        existAndWrongNumber++;
    }
    if ((guess3 == digit1 || guess3 == digit2 || guess3 == digit4)) {
        existAndWrongNumber++;
    }
    if ((guess4 == digit1 || guess4 == digit2 || guess4 == digit3)) {
        existAndWrongNumber++;
    }
    return existAndWrongNumber;
}
var cheatedOnce = false;
var  cheated= false;
function cheat(){
    cheatedOnce = true;

    if(cheated){
        document.getElementsByClassName("cheatNumber")[0].innerHTML="";
        cheated=false;
        document.getElementsByClassName("cheatButton")[0].style.backgroundColor="white";
    }else{
        document.getElementsByClassName("cheatButton")[0].style.backgroundColor="red";
    
    document.getElementsByClassName("cheatNumber")[0].innerHTML = randomNumber;
    cheated=true;
    }

}

function reset (){
    location.reload();
}
