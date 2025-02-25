


document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--x', `${e.clientX}px`);
    document.body.style.setProperty('--y', `${e.clientY}px`);
});

const letra1 = [
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["!", "@", "#", "$", "%", "&", "*", "(", ")"]
];

let senha = "";

document.querySelector("#gerarSenha").addEventListener("click", () => {
    senha = "";
    for (let i = 0; i < 15; i++) {
        let randomSubArray = letra1[Math.floor(Math.random() * letra1.length)];
        let random = randomSubArray[Math.floor(Math.random() * randomSubArray.length)];
        senha += random;
    }
    document.querySelector("#senha").textContent = senha;
});

document.querySelector("#copiarSenha").addEventListener("click", () => {
    if (senha === "") {
        alert("No password to copy");
    } else {
        navigator.clipboard.writeText(senha);
        let senhaCopiada = document.querySelector("#senhaCopiada");
        senhaCopiada.textContent = "Senha Copiada";
        setTimeout(() => senhaCopiada.textContent = "", 2000);
    }
});
