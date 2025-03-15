// Mock Admin Data (Editable for Admin)
const adminData = {
    activeDeposit: 200,  // Admin sets this value
    activeBalance: 50,   // Admin sets this value
    addedBonus: 10       // Admin sets this value
};

// Load Admin Data into the UI
document.getElementById("activeDeposit").textContent = `$${adminData.activeDeposit}`;
document.getElementById("activeBalance").textContent = `$${adminData.activeBalance}`;
document.getElementById("addedBonus").textContent = `$${adminData.addedBonus}`;

// Open & Close Live Chat Modal
function openLiveChat() {
    document.getElementById("liveChatModal").style.display = "block";
}

function closeLiveChat() {
    document.getElementById("liveChatModal").style.display = "none";
}

// Open & Close Withdraw Form Modal
function openWithdrawForm() {
    document.getElementById("withdrawModal").style.display = "block";
}

function closeWithdrawForm() {
    document.getElementById("withdrawModal").style.display = "none";
}

// Handle Withdraw Form Submission
document.getElementById("withdrawForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Withdrawal request submitted!");
    closeWithdrawForm();
});
