let passfield = document.getElementById("password"),
copy = document.getElementById("copy"),
generate = document.getElementById("generate");

let password = " ";

generate.addEventListener("click", () => {
    password = "";
    let length = 8;
    let lower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()|";
    let n = lower.length;
    for (let i = 0; i < length; i++) {
        password += lower.charAt(Math.floor(Math.random() * n));
    }
    passfield.value = password;
});

copy.addEventListener("click", () => {
    // password.select();
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
});