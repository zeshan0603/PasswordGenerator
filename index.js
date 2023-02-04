const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passwordEl1 = document.getElementById("password-el-1")
let passwordEl2 = document.getElementById("password-el-2")
let inputEl = document.getElementById("input")



let passwordLength = 0;



function randomChar() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePassword() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        password += randomChar()
    }
    return password
}


function renderPasswords() {

    const passwordOne = generatePassword()
    const passwordTwo = generatePassword()
    passwordEl1.textContent = passwordOne
    passwordEl2.textContent = passwordTwo

    passwordLength = inputEl.value;
}

















