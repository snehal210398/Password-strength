var pass = document.getElementById("password");
var msg = document.getElementById("message");
var len = document.getElementById("length");

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.diaplay = "none";
    }
    if (pass.value.length < 4) {
        len.innerHTML = "weak";
        pass.style.borderColor = '#ff5925';
        msg.style.color = "#ff5925";
    } else if (pass.value.length >= 4 && pass.value.length < 8) {
        len.innerHTML = "Medium";
        pass.style.borderColor = 'yellow';
        msg.style.color = "yellow";
    } else if (pass.value.length >= 8) {
        len.innerHTML = "Strong";
        pass.style.borderColor = 'green';
        msg.style.color = "green";
    }
})
