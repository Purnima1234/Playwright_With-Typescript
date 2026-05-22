//Login Lockout After Failed Attempts using ternary operator

let loginattempts=4

let maxattempts = (loginattempts===2? "Output: 1 attempt left before lockout": loginattempts===3? "Output: 🔒 Account Locked — Contact support" :loginattempts===0? "Login successful" : "Account blocked");
    console.log(maxattempts);