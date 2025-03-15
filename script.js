document.addEventListener("DOMContentLoaded", function () {
    checkLogin();
});

let user = {
    balance: 0
};

function deposit() {
    let amount = prompt("Enter amount to deposit:");
    if (amount && !isNaN(amount) && amount > 0) {
        user.balance += parseFloat(amount);
        updateBalance();
    } else {
        alert("Invalid amount");
    }
}

function withdraw() {
    let amount = prompt("Enter amount to withdraw:");
    if (amount && !isNaN(amount) && amount > 0 && amount <= user.balance) {
        user.balance -= parseFloat(amount);
        updateBalance();
    } else {
        alert("Invalid amount or insufficient balance");
    }
}

function updateBalance() {
    document.getElementById("usd-value").innerText = user.balance;
}
